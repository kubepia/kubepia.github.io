# OCP & CloudPak for Application 설치 매뉴얼 

:::tip Disclaimer & Special Thanks 
이 설치 매뉴얼은 kubepia 멤버분들과 정보 공유를 위해 만들어졌습니다.  
본 매뉴얼은 다른 분들과 자유롭게 공유하셔도 됩니다.  
단, 비공식적인 가이드이므로 내용의 오기로 인한 어떠한 결과에 대해서도  
IBM에 책임을 물으시면 안됩니다.  

설치 매뉴얼 작성에 지대한 도움을 주신 한승일실장님과 김미선차장님에게  
특별한 감사를 보냅니다.  
저는 이분들이 무수한 시행착오로 얻어낸 설치과정을 정리만 했을뿐입니다.   
:::

설치를 시작하려면 필수적으로 H/W와 **Redhat subscription**이 필요합니다.  
정식 Redhat subscription은 발급에 2주정도 걸리므로 미리 준비하시기 바랍니다.  

## Infra Servers 구성
- [VM 생성](https://kubepia.github.io/cloudpak/cp4app/install/infra01.html)
- [Web서버 설치](https://kubepia.github.io/cloudpak/cp4app/install/infra02.html)
- [VM Network 설정](https://kubepia.github.io/cloudpak/cp4app/install/infra03.html)
- [DNS 서버 설치](https://kubepia.github.io/cloudpak/cp4app/install/infra04.html)
- [HAProxy 설치](https://kubepia.github.io/cloudpak/cp4app/install/infra05.html)
- [DHCP 설치](https://kubepia.github.io/cloudpak/cp4app/install/infra06.html)
- [NFS서버 설치](https://kubepia.github.io/cloudpak/cp4app/install/infra07.html)
- [SSH Key 구성](https://kubepia.github.io/cloudpak/cp4app/install/infra08.html)
- [iptables 설치](https://kubepia.github.io/cloudpak/cp4app/install/infra09.html)

## OCP 설치
- [ignition파일 및 VM생성](https://kubepia.github.io/cloudpak/cp4app/install/ocp01.html)
- [OCP 설치](https://kubepia.github.io/cloudpak/cp4app/install/ocp02.html)
- [Local Image Registry 구성](https://kubepia.github.io/cloudpak/cp4app/install/ocp03.html)
- [NFS Dynamic provisioning](https://kubepia.github.io/cloudpak/cp4app/install/ocp04.html)
- [IdP 추가](https://kubepia.github.io/cloudpak/cp4app/install/ocp05.html)


## CP4App 설치
- [Common Service 설치](https://kubepia.github.io/cloudpak/cp4app/install/cp4app01.html)
- [CP4App 설치](https://kubepia.github.io/cloudpak/cp4app/install/cp4app02.html)

---
<disqus/>


