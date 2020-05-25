# Infra Servers-DHCP서버 설치

:::tip TASK DESCRIPTION
Network VM에 DHCP서버를 설치합니다.  
DHCP는 bootstrap, master, worker node의 MAC주소와 IP를 고정하기 위해 사용됩니다.    
[[toc]] 
:::

## DHCP서버 설치
Terminal 또는 ssh명령으로 Network VM을 접근합니다. 

```
$ yum install -y dhcp*
```
![](./img/infra06-01.png)

## DHCP설정
```
$ cd /etc/dhcp
$ vi dhcpd.conf
```
![](./img/infra06-02.png)

- router IP, DNS IP, base domain을 지정합니다.  
- bootstrap, master, worker node의 MAC주소와 IP를 지정합니다.   
![](./img/infra06-03.png)

:::tip ETHERNET ADAPTOR HARDWARE ADDRESS REQUIREMENTS
반드시 아래 범위의 MAC Address를 지정해야 합니다.  
00:05:69:00:00:00 to 00:05:69:FF:FF:FF  
00:0c:29:00:00:00 to 00:0c:29:FF:FF:FF  
00:1c:14:00:00:00 to 00:1c:14:FF:FF:FF  
00:50:56:00:00:00 to 00:50:56:FF:FF:FF  
:::

## DHCP서버 시작
```
DHCP서버를 부팅시 자동 시작하도록 등록
$ systemctl enable dhcpd

DHCP서버 시작
$ systemctl start dhcpd

상태확인
$ systemctl status dhcpd
```
![](./img/infra06-04.png)