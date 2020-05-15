#include <iostream>
#include <memory>
#include <vector>
#include <string>
#include <thread>
#include <sstream>
#include <unistd.h>
#include <pthread.h>
#include <vector>
#include <map>
#include <algorithm>


#include "include/IAgoraService.h"
#include "include/IAgoraRtmService.h"


#include <stdio.h>
#include <string.h>
#include <errno.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/time.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>


using namespace std;

#define APP_ID  "b33c94cb4537458a85c6c16cb9129037"
#define USERID  "rasp"
#define DSTID   "android"
#define MS      1000

#define DSET_IP_ADDRESS     "192.168.7.77"
#define DEST_IP_PORT 17777
#define BUFFER_LEN  1024


class RtmEventHandler: public agora::rtm::IRtmServiceEventHandler {
  public:
    RtmEventHandler() {}
    ~RtmEventHandler() {}

    virtual void onLoginSuccess() override {
        cout << "on login success in eventHandler" << endl;
        sockerInit();
    }

    virtual void onLoginFailure(agora::rtm::LOGIN_ERR_CODE errorCode) override {
        cout << "on login failure: errorCode = " << errorCode << endl;
    }

    virtual void onLogout(agora::rtm::LOGOUT_ERR_CODE errorCode) override {
        cout << "on login out" << endl;
    }

    virtual void onConnectionStateChanged(agora::rtm::CONNECTION_STATE state,
                        agora::rtm::CONNECTION_CHANGE_REASON reason) override {
        cout << "on connection state changed: state = " << state << endl;
    }

    virtual void onSendMessageResult(long long messageId,
                        agora::rtm::PEER_MESSAGE_ERR_CODE state) override {
        cout << "on send message messageId: " << messageId << " state: "
             << state << endl;
    }

    virtual void onMessageReceivedFromPeer(const char *peerId,
                        const agora::rtm::IMessage *message) override {
        cout << "on message received from peer: peerId = " << peerId
             << " message = " << message->getText() << endl;
        setCurMsg((char*)message->getText());
    }

private:

    void setCurMsg(char* str) {
        curMsg = str;
        // cout << "write curMsg:" << curMsg << endl;

        int send_num;
        char send_buf[BUFFER_LEN];

        writeBuff((string)curMsg, send_buf);

        struct timeval tv;
        gettimeofday(&tv, NULL);
        long ms = tv.tv_sec * MS + tv.tv_usec / MS;

        cout << "time:" << ms << endl
             << "Move, send socket:" << send_buf << endl;

        send_num = sendto(sock_fd, send_buf, BUFFER_LEN,
                          0, (struct sockaddr *)&addr_serv, len);

        cout << "finish sending" << endl;
        if(send_num < 0) {
            perror("sendto error:");
            exit(1);
        }

    }

    // msg format: G %f %f %f %f %f S %f %f
    // buffsend format: #q#%f;%f;%f;%f;%f!#w#%f;%f!
    void writeBuff(string msg, char* send_buf) {
        stringstream ssInput, ssOutput;
        ssInput << msg;
        char ch;
        ssInput >> ch; // G
        float angle[3];
        float angVec[3];
        float wheel[3];
        ssInput >> angle[0] >> angle[1] >> angle[2];
        ssInput >> angVec[0] >> angVec[1] >> angVec[2];
        ssInput >> ch >> wheel[0] >> wheel[1];
        wheel[2] = 0;

        ssOutput << "#e#" << angle[0] << ";" << angle[1] << ";" << angle[2] <<
          "!#w#" << wheel[0] << ";" << wheel[1] << ";" << wheel[2] << "!";
        strcpy(send_buf, ssOutput.str().c_str());
    }

    void sockerInit() {
        sock_fd = socket(AF_INET, SOCK_DGRAM, 0);
        if(sock_fd < 0)
        {
            perror("socket");
            exit(1);
        }
        // movebase;
        memset(&addr_serv, 0, sizeof(addr_serv));
        addr_serv.sin_family = AF_INET;
        addr_serv.sin_addr.s_addr = inet_addr(DSET_IP_ADDRESS);
        addr_serv.sin_port = htons(DEST_IP_PORT);
        len = sizeof(addr_serv);
    }

    char *curMsg = NULL;
    struct sockaddr_in addr_serv;
    int len;
    int sock_fd;

};

class ChannelEventHandler: public agora::rtm::IChannelEventHandler {
  public:
    ChannelEventHandler(string channel) {
        channel_ = channel;    
    }
    ~ChannelEventHandler() {}

    virtual void onJoinSuccess() override {
        cout << "on join channel success" << endl;
    }

    virtual void onJoinFailure(agora::rtm::JOIN_CHANNEL_ERR errorCode) override{
        cout << "on join channel failure: errorCode = " << errorCode << endl;
    }

    virtual void onLeave(agora::rtm::LEAVE_CHANNEL_ERR errorCode) override {
        cout << "on leave channel: errorCode = " << errorCode << endl;
    }

    virtual void onMessageReceived(const char* userId,
                        const agora::rtm::IMessage *msg) override {
        cout << "receive message from channel: " << channel_.c_str()
             << " user: " << userId << " message: " << msg->getText()
             << endl;
    }

    virtual void onMemberJoined(agora::rtm::IChannelMember *member) override {
        cout << "member: " << member->getUserId() << " joined channel: "
             << member->getChannelId() << endl;
    }

    virtual void onMemberLeft(agora::rtm::IChannelMember *member) override {
        cout << "member: " << member->getUserId() << " lefted channel: "
             << member->getChannelId() << endl;
    }

    virtual void onGetMembers(agora::rtm::IChannelMember **members,
                    int userCount,
                    agora::rtm::GET_MEMBERS_ERR errorCode) override {
        cout << "list all members for channel: " << channel_.c_str()
             << " total members num: " << userCount << endl;
        for (int i = 0; i < userCount; i++) {
            cout << "index[" << i << "]: " << members[i]->getUserId();
        }
    }

    virtual void onSendMessageResult(long long messageId,
                    agora::rtm::CHANNEL_MESSAGE_ERR_CODE state) override {
        cout << "send messageId: " << messageId << " state: " << state << endl;
    }
    
    private:
        string channel_;
};

class Demo {
  public:
    Demo() {
        coreService_.reset(createAgoraService());
        if (!coreService_) {
            cout << "core service created failure!" << endl;
            exit(0);
        }

        if (coreService_->initialize(context_)) {
            cout << "core service initialize failure!" << endl;
            exit(0);
        }

        eventHandler_.reset(new RtmEventHandler());
        agora::rtm::IRtmService* p_rs = coreService_->createRtmService();
        rtmService_.reset(p_rs, [](agora::rtm::IRtmService* p) {
            p->release();                                                           
        });                                                                         

        if (!rtmService_) {
            cout << "rtm service created failure!" << endl;
            exit(0);
        }
        string appId = APP_ID;
        if (rtmService_->initialize(appId.c_str(), eventHandler_.get())) {
            cout << "rtm service initialize failure! appid invalid?" << endl;
            exit(0);
        }
    }
    ~Demo() {
        rtmService_->release();
    }

  public:
    bool login() {
        string userID = USERID;
        string appId = APP_ID;
        if (rtmService_->login(appId.c_str(), userID.c_str())) {
            cout << "login failed!" << endl;
            return false;
        }
        cout << "here" << endl;
        return true;
    }

    void logout() {
        rtmService_->logout();
        cout << "log out!" << endl;
    }

    void p2pChat(const std::string& dst) {
        string msg;
            cout << "please input message you want to send, or input \"quit\" "
                 << "to leave p2pChat" << endl;
            getline(std::cin, msg);
            if (msg.compare("quit") == 0) {
                return;
            } else {
                sendMessageToPeer(dst, msg);
            }

    }

    void groupChat(const std::string& channel) {
        string msg;
        channelEvent_.reset(new ChannelEventHandler(channel));
        agora::rtm::IChannel * channelHandler =
            rtmService_->createChannel(channel.c_str(), channelEvent_.get());
        if (!channelHandler) {
            cout << "create channel failed!" << endl;
        }
        channelHandler->join();
        while(true) {
            cout << "please input message you want to send, or input \"quit\" "
                 << " to leave groupChat, or input \"members\" to list members"
                 << endl;
            getline(std::cin, msg);
            if (msg.compare("quit") == 0) {
                channelHandler->leave();
                return;
            } else if (msg.compare("members") == 0) {
                channelHandler->getMembers();
            } else {
                sendMessageToChannel(channelHandler, msg);
            }
        }
    }

    void sendMessageToPeer(std::string peerID, std::string msg) {
        agora::rtm::IMessage* rtmMessage = rtmService_->createMessage();
        //cout << "into sendMessage to peer" << endl;
        rtmMessage->setText(msg.c_str());
        //cout << "set msg" << endl;
        int ret = rtmService_->sendMessageToPeer(peerID.c_str(),
                                        rtmMessage);
        //cout << "get ret" << endl;
        rtmMessage->release();
        //cout << "release success" << endl;
        if (ret) {
            cout << "send message to peer failed! return code: " << ret
                 << endl;
        }
        cout << "end sendmsg function" << endl;
    }

    void sendMessageToChannel(agora::rtm::IChannel * channelHandler,
                            string &msg) {
        agora::rtm::IMessage* rtmMessage = rtmService_->createMessage();
        rtmMessage->setText(msg.c_str());
        channelHandler->sendMessage(rtmMessage);
        rtmMessage->release();
    }

    private:
        std::unique_ptr<agora::base::IAgoraService> coreService_;
        agora::base::AgoraServiceContext context_;
        std::unique_ptr<agora::rtm::IRtmServiceEventHandler> eventHandler_;
        std::unique_ptr<ChannelEventHandler> channelEvent_;
        std::shared_ptr<agora::rtm::IRtmService> rtmService_;
};

void msgSparse(string msg, float* xp, float* yp, float* pitchp, float* yawp, float* rowp) {

}

void sendMsg2Socket(string msg, char* send_buf) {
    float x, y, pitch, yaw, row;
    msgSparse(msg, &x, &y, &pitch, &yaw, &row);
    cout << "x=" << x << ", y=" << y
        <<  ", pitch=" << pitch << ", yaw=" << yaw
        << ", row=" << row << endl;

}

int main(int argc, const char * argv[]) {

    /*

    // socket文件描述符
    int sock_fd;

    // 建立udp socket
    sock_fd = socket(AF_INET, SOCK_DGRAM, 0);
    if(sock_fd < 0)
    {
        perror("socket");
        exit(1);
    }

    // 设置address
    struct sockaddr_in addr_serv;
    int len;
    memset(&addr_serv, 0, sizeof(addr_serv));
    addr_serv.sin_family = AF_INET;
    addr_serv.sin_addr.s_addr = inet_addr(DSET_IP_ADDRESS);
    addr_serv.sin_port = htons(DEST_PORT);
    len = sizeof(addr_serv);

    // send socket init
    int send_num;
    int recv_num;
    char send_buf[BUFFER_LEN];
    char recv_buf[BUFFER_LEN];
*/

    // rtm init
    int count = 1;
    std::vector<std::unique_ptr<Demo>> DemoList;
    std::vector<bool> loginStatus;
    for (int i = 0; i < count; i++) {
        std::unique_ptr<Demo> tmp;
        tmp.reset(new Demo());
        DemoList.push_back(std::move(tmp));
        loginStatus.push_back(false);
    }
    int index = 0;
    while(true) {
        if (!loginStatus[index]) {
            if (!DemoList[index]->login())
                continue;
            loginStatus[index] = true;
            break;
        }
    }
    string dst = DSTID;
    string msg;



    while (true) {
        usleep(25 * MS);
        cout << "begin to p2pchat" << endl;
        DemoList[index]->p2pChat(dst);
        cout << "p2pchat succss" << endl;
       // msg = DemoList[index]->getCurMsg();
      //  cout << "getMsg:" << msg << endl;
        /*
        sendMsg2Socket(msg, send_buf);
        printf("client send: %s\n", send_buf);

        send_num = sendto(sock_fd, send_buf, strlen(send_buf), 0, (struct sockaddr *)&addr_serv, len);

        if(send_num < 0)
        {
            perror("sendto error:");
            exit(1);
        }
*/

    }

    return 0;

/*
// socket recv
    recv_num = recvfrom(sock_fd, recv_buf, sizeof(recv_buf), 0, (struct sockaddr *)&addr_serv, (socklen_t *)&len);

    if(recv_num < 0)
    {
        perror("recvfrom error:");
        exit(1);
    }

    recv_buf[recv_num] = '\0';
    printf("client receive %d bytes: %s\n", recv_num, recv_buf);

    close(sock_fd);



    return 0;
*/
 }



























