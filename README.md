# Rasp2Android for Virtual eyes

## Run 
```shell
sh run.sh
```

## video
- app id
  - b33c94cb4537458a85c6c16cb9129037

## rt\_msg
- app id
  - b33c94cb4537458a85c6c16cb9129037
- udp adress
  - 192.168.7.77:17777
- recv msg
  - `G %f %f %f %f %f %f S %f %f`
  - Gyro msg means the angle of yaw, pitch and row. And the three floats after them is the angular velocity of yaw, pitch and row.
  - Scroll msg means left/right(-1/1) and front/back(-1/1)
- send msg
  - `#e#%f;%f;%f!#w#%f;%f;%f!`
  - angle of yaw, pitch and row 
  - wheel data of x, y, angle z 
 
## Debug
- run.sh debug
