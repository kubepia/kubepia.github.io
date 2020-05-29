# OCP-ignition파일 및 VM생성

:::tip TASK DESCRIPTION
ignition파일은 RHCOS(RedHat Core OS)가 실행될때 참조하는 제반설정정보입니다.  
openshift-install명령을 이용하여 ignition 파일을 생성합니다.  
생성된 파일의 내용을 base64로 암호화하여 VM Node의 속성으로 등록합니다.  
버전별 설치가이드를 참고하십시오.  
- [OCP4.3 install 가이드](https://docs.openshift.com/container-platform/4.3/installing/installing_vsphere/installing-vsphere.html)  
- [OCP4.4 install 가이드](https://docs.openshift.com/container-platform/4.4/installing/installing_vsphere/installing-vsphere.html)  
본 설치매뉴얼은 vmware vSphere상의 설치를 위해 작성되었습니다.  

[[toc]] 
:::

## 사전준비
- **vSphere버전**  
vSphere 6.5상에도 설치가능하지만 vSphere Version 6.7 U2이상을 권장합니다.  

- **RHCOS VM Template**  
2020-05-29일 현재 vmware상에서는 RHCOS4.3.0으로 VM Template을 만드십시오.  
그 이상의 버전으로 만든 VM Template을 이용하면 설치가 되지 않습니다.  
테스트 결과 RHCOS 4.3.0 ova파일로 템플릿을 만들고, openshift-installer 4.4.5로  
설치하니 OCP버전 4.4.5가 잘 설치되었습니다.    
![](./img/2020-05-29-04-45-52.png)

- **System requirements**
문서상의 최소 사양은 아래와 같습니다.  
![](./img/2020-05-25-02-38-00.png)

경험상 CP4App까지 설치하여 운영하기 위한 사양은 아래와 같습니다.  

| Machine   | vCPU | vRAM | Storage |
|:----------|:-----|:-----|:--------|
| Bootstrap | 8    | 16   | 120     |
| Control plane    | 8    | 32   | 120     |
| Compute    | 16   | 32   | 120     |


Master Node는 최소 3개이상, Worker Node는 최소 2개 이상 필요합니다.  

- **User Provisioned Infra 환경 준비**  
아래와 같은 인프라 환경구성이 필요합니다.   
  - Network connections
  - DNS  
  - L/B  
  - DHCP  
  - Configure Ports
참조: [User provisioned infrastructure](https://docs.openshift.com/container-platform/4.3/installing/installing_vsphere/installing-vsphere.html#installation-network-user-infra_installing-vsphere) 

## 설치 프로그램 다운로드
- **Local PC에서 파일 다운로드**  
  - **[Redhat 설치 가이드](https://cloud.redhat.com/openshift/install)**으로 로그인합니다.  
    그리고 설치 인프라 환경을 선택하십시오.  본 매뉴얼에서는 vmware상에 설치합니다.  
    ![](./img/2020-05-25-20-18-04.png)

  - OS에 맞는 설치 openshift-install, Pull secret값, RHCOS, OC CLI를 다운로드 합니다. 
    ![](./img/2020-05-25-20-18-38.png)
  - 특정 버전의 openshift-installer를 다운로드 하려면 아래 주소를 이용하십시오.  
    [Openshift-installer 버전별 Download](https://mirror.openshift.com/pub/openshift-v4/clients/ocp/)  

- **bastion VM으로 복사**  
  Local PC의 다운로드 위치는 '~/Downloads/ocp'이고, basion VM의 target 디렉토리는 '~/tmp'일때  
  아래와 같이 작업하면 됩니다.   
  이전 [sslkey 구성](https://kubepia.github.io/cloudpak/cp4app/install/infra08.html#ssl-key-%EC%83%9D%EC%84%B1)단계에서 Local PC에 대한 작업을 미리 해야 암호없이 파일을 복사할 수 있습니다.  
  ```
  $ cd ~/Downloads/ocp   
  $ scp -P 19022 ./openshift-client-linux.tar.gz kubepia:~/tmp
  $ scp -P 19022 ./openshift-install-linux.tar.gz kubepia:~/tmp
  $ scp -P 19022 ./pull-secret.txt kubepia:~/tmp 
  ```
  - **bastion VM에서 압축해제 및 CLI파일 복사**  
  ```
  $ cd ~/tmp
  $ tar xvf openshift-client-linux.tar.gz
  $ tar xvf openshift-install-linux.tar.gz
  $ cp oc /usr/local/bin && cp kubectl /usr/local/bin && cp openshift-install /usr/local/bin
  ```
  
- **openshift-install, OC가 잘 설치되었는지 확인합니다.**   
![](./img/2020-05-28-16-50-56.png)


## 설치 작업 디렉토리 생성
install-config.yaml과 ignition파일들이 생성될 설치 작업 디렉토리를 생성합니다.  
```
$ mkdir -p /install/config
```

## install-config.yaml 생성
[Sample install-config.yaml](https://docs.openshift.com/container-platform/4.3/installing/installing_vsphere/installing-vsphere.html#installation-vsphere-config-yaml_installing-vsphere)파일을 참조하여 작성합니다. 

```
Sample

apiVersion: v1
baseDomain: darumtech.net 
compute:
- hyperthreading: Enabled   
  name: worker
  replicas: 2 
controlPlane:
  hyperthreading: Enabled   
  name: master
  replicas: 3 
metadata:
  name: cp 
platform:
  vsphere:
    vcenter: your.vcenter.server 
    username: username 
    password: password 
    datacenter: datacenter 
    defaultDatastore: datastore 
fips: false 
pullSecret: '{"auths": ...}' 
sshKey: 'ssh-ed25519 AAAA...' 
```
각 항목 설정방법은 아래와 같습니다.  
| 항목           | 설명            | 예             |
|:--------------|:---------------|:--------------|
| baseDomain    | 기본 도메인       | kubepia.com   |
| compute.replicas | worker node 수 | 2           |
| controlPlane.replicas | master node 수(3이상의 홀수) | 3           |
| metadata.name | 클러스터 이름. [name].[baseDomain]으로 기본 주소 사용됨 | cp |
| platform.vsphere.vcenter | vSphere vCenter hostname 또는 IP | 192.168.0.70 |
| platform.vsphere.username | vSphere의 username | administrator@vsphere.local |
| platform.vsphere.password | vSphere의 password | passw0rd$ |
| platform.vsphere.datacenter | vSphere Datacenter명 | NX-DC |
| platform.vsphere.defaultDatastore | vSphere의 기본 Datastore | VMware-NFS |
| fips | Disk 암호화 사용 여부 | false |
| pullSecret | site별 SSL token값. 위 설치프로그램 다운로드 시 저장한 pullSecret파일 내용을 붙여넣게 합니다. | 생략 |
| sshKey | [SSHKey 구성](https://kubepia.github.io/cloudpak/cp4app/install/infra08.html)시 생성한 public key파일 내용 | 생략 |

**※vCenter 'VMs and Templates' 폴더 구조**   
:::tip install-config.yaml과 매핑하여 폴더 작성  
위에서 지정한 Datacenter명과 metadata.name과 동일하게  
vCenter의 'VMs and templates'의 폴더 명을 맞추십시오.  
이는 OCP설치 시 기본 생성되는 StorageClass 'thin'을 사용할때  
dynamic provisioning을 하기 위함입니다.   
![](./img/2020-05-29-13-34-34.png)

※ vCenter폴더 구조를 install-config.yaml과 맞춰야 하는걸 매뉴얼 작성 후 알았습니다.  
그래서 이후 화면에는 폴더구조가 틀리게 구성되어 있는 이미지가 많습니다.  
:::


**※ pullSecret과 sshKey는 복사-붙여넣기할때 여러번 체크하여 틀린게 없는지 확인하십시오.**   

> defaultDatastore확인 \
![](./img/2020-05-25-20-38-45.png)

![](./img/2020-05-25-20-53-49.png)

:::tip 반드시 install-config.yaml 백업
install-config.yaml파일은 OCP 설치를 시작하면 없어집니다.  
반드시 백업파일을 생성하시기 바랍니다.  
```
$ cp install-config.yaml install-config-org.yaml
```
![](./img/2020-05-25-20-56-29.png)
:::

## install manifest파일 생성 및 수정 
설치 관련 설정 내용을 담고 있는 manifest파일들을 생성합니다.  
이 단계는 특별히 수정할게 없으면 생략해도 됩니다.  
'installation_directory'는 install-config.yaml파일이 있는 디렉토리입니다.  
```
$ openshift-install create manifests --dir=<installation_directory>
```
![](./img/2020-05-25-21-05-20.png)

manifest파일들은 <installation_directory>/manifests디렉토리에 생성됩니다.  
![](./img/2020-05-25-21-06-39.png)

'cluster-scheduler-02-config.yml'파일에서 'mastersSchedulable'의 값을 'false'로 변경합니다.  
Master node에 Pod가 배포되지 않도록 하기 위함입니다.  
![](./img/2020-05-25-21-08-19.png)

## ignition 파일 생성
RHCOS 부팅 시 참조하는 ignition파일들을 생성합니다.  
```
$ openshift-install create ignition-configs --dir=<installation_directory> 

아래와 같은 구조로 파일들이 생성됩니다.  
auth/kubeadmin-password는 kubeadmin사용자의 암호이고,  
auth/kubeconfig는 cluster로그인 설정정보입니다.  
kubeconfig파일은 사용할 Terminal의 <HOME>/.kube/config파일로 복사하면  
cluster에 인증되어 접근할 수 있습니다.   
.
├── auth
│   ├── kubeadmin-password
│   └── kubeconfig
├── bootstrap.ign
├── master.ign
├── metadata.json
└── worker.ign
```

## append-bootstrap.ign파일 생성
각 Node용 VM을 생성할 때 ignition파일의 내용을 base64 encoding하여 셋팅하여야 합니다.  
그런데 bootstrap.ign의 내용이 너무 많아 길이 제한에 걸려  
base64 encoding한 값을 셋팅할 수 없습니다.   
그래서 bootstrap.ign파일을 Web서버에 업로드하고,  
그 주소를 지정한 append-bootstrap.ign파일을 생성하여 셋팅합니다.  

- **bootstrap.ign파일을 Web서버에 복사**  
bootstrap VM에 [Web서버가 설치](https://kubepia.github.io/cloudpak/cp4app/install/infra02.html)되어 있습니다.  
home디렉토리인 /var/www/html하위에 install디렉토리를 만들고 bootstrap.ign파일을 복사합니다.    

```
예시)

[root@bastion config]# mkdir -p /var/www/html/install
[root@bastion config]# cp bootstrap.ign /var/www/html/install
[root@bastion config]# ls -al /var/www/html/install
total 304
drwxr-xr-x. 2 root root     27 May 28 17:03 .
drwxr-xr-x. 3 root root     38 May 28 17:03 ..
-rw-r-----. 1 root root 308269 May 28 17:03 bootstrap.ign

COPY후 mode를 변경하고 curl로 접근을 확인합니다.  
[root@bastion config]# chmod 777 /var/www/html/install/*
[root@bastion config]# curl http://172.168.0.190/install/bootstrap.ign

```

- **append-bootstrap.ign 생성**  
```
{
  "ignition": {
    "config": {
      "append": [
        {
          "source": "<bootstrap_ignition_config_url>", 
          "verification": {}
        }
      ]
    },
    "timeouts": {},
    "version": "2.1.0"
  },
  "networkd": {},
  "passwd": {},
  "storage": {},
  "systemd": {}
}
```

![](./img/2020-05-25-21-20-31.png)

## ignition파일 base64 encoding
base64 encoding한 ignition파일들을 생성합니다.  
```
$ base64 -w0 <installation_directory>/master.ign > <installation_directory>/master.64
$ base64 -w0 <installation_directory>/worker.ign > <installation_directory>/worker.64
$ base64 -w0 <installation_directory>/append-bootstrap.ign > <installation_directory>/append-bootstrap.64

예시)
$ base64 -w0 /install/config/master.ign > /install/config/master.64
$ base64 -w0 /install/config/worker.ign > /install/config/worker.64
$ base64 -w0 /install/config/append-bootstrap.ign > /install/config/append-bootstrap.64

```

![](./img/2020-05-25-21-28-11.png)

## VM Template 작성
각 Node VM을 만들 VM Template을 생성합니다.  
- **RHCOS image인 ova파일을 다운로드 합니다.**  
  - [Redhat 설치페이지](https://cloud.redhat.com/openshift/install)을 로그인  
  - 설치할 IaaS선택. 이 매뉴얼에서는 vmware선택  
  - 'Red Hat Enterprise Linux CoreOS (RHCOS)'의 [Download RHCOS] 버튼 클릭  
  - 'rhcos-[version]-x86_64-vmware.x86_64.ova'클릭하여 다운로드  
  ![](./img/2020-05-25-22-38-31.png) 

- **작업폴더를 생성합니다.**  
  - vSphere Client로그인  
  - 좌측 Tree상단의 'VMs and Templates'를 클릭하고, [install-config.yaml생성](http://localhost:8080/cloudpak/cp4app/install/ocp01.html#install-config-yaml-%EC%83%9D%EC%84%B1)시 지정한 Datacenter와 metadata.name으로 폴더를 구성합니다.  
  
- **VM Template을 작성합니다.**  
  **※ 2020-05-29일 현재 vmware상에서는 RHCOS4.3.0만 제대로 설치됩니다.**  
  - PC에 다운로드한 ova파일을 복사-붙여넣기하여 vcenter vm으로 복사   
  - 'templates'폴더 선택->우측마우스메뉴에서 'Deploy OVF Template'클릭  
  ![](./img/2020-05-25-22-49-12.png)
  - 'Local file'선택하고 ova파일 위치 지정  
  ![](./img/2020-05-25-22-50-42.png)
  - template명과 folder선택  
  ![](./img/2020-05-25-22-53-22.png)
  - Compute resource는 아무거나 선택  
  ![](./img/2020-05-25-22-54-08.png)
  - 선택내용 review  
  ![](./img/2020-05-25-22-55-37.png)
  - Virtual Disk format은 'Thin Provision'선택하고 Storage선택  
  ![](./img/2020-05-25-22-57-31.png)
  - Network은 'VM Network'선택  
  ![](./img/2020-05-25-22-58-28.png)
  - 'Customize template'은 Skip함  
  ![](./img/2020-05-25-22-59-12.png)
  - 'Ready to complete'에서 마지막으로 설정 내용 검토하고 [FINISH]클릭  
  ![](./img/2020-05-25-23-00-36.png)
  - 생성된 VM선택->우측마우스메뉴에서 'Template->Convert to template'클릭  
  ![](./img/2020-05-25-23-02-59.png)

## Master Node VM 생성
Master node VM을 생성합니다.  
- **VM template 선택 -> 우측마우스메뉴에서 'New VM from This Template'클릭**  
![](./img/2020-05-25-23-12-11.png)
- **VM의 이름과 folder를 지정**  
![](./img/2020-05-25-23-15-29.png)
> **VM이름** \
VM이름의 규칙은 없지만 헷갈리지 않도록 [dhcpd.conf파일에 지정](https://kubepia.github.io/cloudpak/cp4app/install/infra06.html#dhcp%EC%84%9C%EB%B2%84-%EC%84%A4%EC%B9%98)한 이름을 참조하여 작명하십시오.  
- **'Compute resource'는 아무거나 지정하면 됨**  
[DRS-Distributed Resources Scheduler](https://kubepia.github.io/cloudpak/cp4app/install/infra01.html#drs%EC%9E%90%EB%8F%99%ED%99%94-%EC%84%A4%EC%A0%95)를 이용하므로 자동으로 IP가 부여됨  
![](./img/2020-05-25-23-28-01.png) 
- **Storage선택**  
![](./img/2020-05-25-23-30-50.png)
- **'Customize this virtual machine's hardware'체크**  
![](./img/2020-05-25-23-31-34.png)
- **CPU/MEM/Disk 지정**  
[System requirements](https://kubepia.github.io/cloudpak/cp4app/install/ocp01.html#%EC%82%AC%EC%A0%84%EC%A4%80%EB%B9%84)를 참조하여 지정하세요.  
메모리 항목을 펼치고 'Reservation'을 동일하게 바꿔 주십시오.  
![](./img/2020-05-25-23-33-25.png)
- **Network MAC Address지정**  
Network Adapter1을 펼치고 MAC Address항목의 'Automatic'을 'Manual'로 변경하십시오.  
MAC Address는 Network VM의 /etc/dhcpd.conf에 정의한 MAC주소를 입력하십시오.  
[dhcpd.conf파일 설정](https://kubepia.github.io/cloudpak/cp4app/install/infra06.html#dhcp%EC%84%9C%EB%B2%84-%EC%84%A4%EC%B9%98)을 참고 하십시오.  
![](./img/2020-05-25-23-39-27.png)
- **ignition내용 셋팅**  
RHCOS부팅시에 참조할 ignition값을 파라미터로 셋팅합니다.  
  - 'VM Options'탭을 클릭하고 'Configuration Parameters'의 [EDIT CONFIGURATION]을 클릭하십시오.  
  ![](./img/2020-05-25-23-43-15.png)
  - [Add Configuration Params]버튼을 클릭하여 파라미터를 추가  
  
  | 파라미터 | 값  |
  |:-------|:---|
  | guestinfo.ignition.config.data | master.64파일 내용 |
  | guestinfo.ignition.config.data.encoding | base64 |
  | disk.EnableUUID | TRUE |
  ![](./img/2020-05-25-23-51-53.png)

> ** 주의 **  
  base64 내용을 'cat'명령어로 볼 때 아래와 같이 ';echo'를 붙이십시오.  
  ```
  $ cat append-bootstrap.64;echo
  ``` 
  ![](./img/2020-05-28-18-29-52.png)

- **설정내용 최종검토**  
최종 검토 후 [FINISH]버튼을 클릭합니다.  
![](./img/2020-05-25-23-52-59.png)

:::tip 모든 Master node VM 생성
VM이름과 MAC Address만 다르게 하여 나머지 Master Node VM들을 생성합니다.
아래와 같이 첫번째 만든 기존 VM을 복사하여 MAC Address만 변경하면 됩니다. 
![](./img/2020-05-28-17-35-54.png)
:::

## Worker Node VM 생성
:::tip Worker node VM 생성
Master node VM생성단계를 참고하여 모든 Worker node VM들을 생성합니다.  
단, 아래 단계에서는 Worker node에 맞게 변경하여야 합니다.  
- VM의 이름과 folder를 지정   
- CPU/MEM/Disk 지정  
- Network MAC Address지정  
- ignition내용 셋팅: worker.64파일 내용으로 셋팅
:::

## Bootstrap Node VM 생성
:::tip Bootstrap node VM 생성
Master node VM생성단계를 참고하여 Bootstrap node VM들을 생성합니다.  
단, 아래 단계에서는 Bootstrap node에 맞게 변경하여야 합니다.  
- VM의 이름과 folder를 지정   
- CPU/MEM/Disk 지정  
- Network MAC Address지정  
- ignition내용 셋팅: append-bootstrap.64파일 내용으로 셋팅
:::

## Snapshot 만들기   
지금까지 작업한 내용을 백업하기 위해 각 VM의 Snapshot을 생성합니다.  
![](./img/2020-05-26-00-04-28.png)

**※ Infra VM들은 중지하고 Snapshot을 생성하셔야 빠르게 snapshot이 만들어집니다.** 

---
<disqus/>
