# Infra Servers-SSLKey 구성

:::tip TASK DESCRIPTION
SSL Key를 생성합니다.  
각 VM을 ssh로 쉽게 접근하게 하기 위해 SSL public key를 각 VM에 복사합니다.  
 
[[toc]] 
:::

## SSL Key 생성
Terminal 또는 ssh명령으로 bastion VM을 접근합니다.  
Test용 SSL Key를 생성합니다.   
```
$ ssh-keygen -b 4096 -t rsa
```
![](./img/2020-05-24-23-44-11.png)

현재 user의 HOME디렉토리 하위에 '.ssh'라는 디렉토리가 생깁니다.  
그 디렉토리에 private key파일인 id_rsa와 public key파일인 id_rsa.pub가 생성됩니다.  

![](./img/2020-05-24-23-50-21.png)

## Public SSL Key 복사
ssh로 접근할 각 VM에 public ssl key파일을 복사합니다.  
```
$ ssh-copy-id -i ~/.ssh/id_rsa.pub root@<대상 VM IP>
```
![](./img/2020-05-25-00-05-23.png)

> **참고** \
대상 VM node에는 .ssh/authorized_keys라는 파일로 복사됩니다.\
![](./img/2020-05-25-00-08-13.png) 

## Config파일 생성
각 VM의 정보를 담고 있는 Config파일을 생성합니다.  
```
Host <VM alias>
    HostName <VM IP>
    Port <SSH PORT>
    User <User ID>
    IdentityFile <Private SSL Key파일 경로>
```
예제)  
![](./img/2020-05-25-00-13-26.png)

:::tip Local Mac에서 Config설정
Mac에서 bastion서버를 쉽게 접근하기 위해  
아래 예와같이 Local Mac의 ~/.ssh/config파일을 생성합니다.  
미리 private key파일은(~/.ssh/keys/seromi_rsa)다운로드 해야 합니다.   
```
Host seromi
    HostName 61.78.152.243
    Port 19022
    User root
    IdentityFile ~/.ssh/keys/seromi_rsa
```
:::

## 테스트
- **bastion VM에서 테스트**
ssh나 scp명령 사용 시 이제는 암호를 묻지 않고 바로 접근이 됩니다.   
![](./img/2020-05-25-00-20-55.png)

- **Mac에서 테스트**
Mac에 config파일을 만들었다면, 아래와 같이 ssh로 bastion서버 접근이 되는지 테스트 합니다.  
![](./img/2020-05-25-00-25-34.png)

