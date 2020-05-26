# OCP-IdP 추가

:::tip TASK DESCRIPTION
계정제공자(IdP-Identity Provider)를 추가합니다  
본 매뉴얼에서는 htpasswd와 keycloak을 설명합니다.   

[[toc]] 
:::

## htpasswd 추가 
htpasswd는 OCP자체적으로 계정을 추가할 수 있는 방법입니다.  

- **계정 등록 파일 생성**  
```
$ yum install -y httpd-tools  
$ which htpasswd  
$ htpasswd -c -B -b <파일명> <user_name> <password>  
계정 추가시에는 -c옵션 주면 안됨   
예) 
[root@bastion idp]# htpasswd -c -B -b users.htpasswd hklee passw0rd \
Adding password for user hklee \
[root@bastion idp]# htpasswd -B -b users.htpasswd sihan passw0rd \
Adding password for user sihan \
[root@bastion idp]# htpasswd -B -b users.htpasswd shlee passw0rd \
Adding password for user shlee \
[root@bastion idp]# cat users.htpasswd \
hklee:$2y$05$1ZSl07frbmRvwY2Uxuz.Cu38bTh.UMR8wAD1/i5YTOuym0yhX8F4S \
sihan:$2y$05$VF9BcY4pSPTy7uParHwZt.Qaf5agVto5EduZXmuPGwFxOyqdNRPqu \
shlee:$2y$05$Lx9qrVCFnC1weCMkOkj/jOA6kOkM49CjhnQrOOVFHmyrwhHz0b2Ta \
```

- **IdP추가**  
  - OCP webconsole로그인: 최초에는 kubeadmin으로 로그인  
  - Administration->Cluster-Settings클릭  
  - Global configuration탭 클릭하고 oAuth 클릭  
  - IdP추가: htpasswd 선택하고 위에서 생성한 파일 지정    

- **rolebinding**  
추가한 user에게 권한을 binding 합니다.  
  - OCP web console > user management > Role bindings
  - create role binding 

## keycloak 추가
TODO  

---
<disqus/>
