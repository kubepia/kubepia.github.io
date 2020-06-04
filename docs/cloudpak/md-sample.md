# Markdown sample
---
:::tip TASK DESCRIPTION
Markdown에 대한 예제입니다.  
각 markdown 예제 하단에 source sample이 있습니다.   
[[toc]]
:::
---

## Block 메시지1
::: tip CloudPak이란?
**CloudPak**은 IBM의 Total cloud platform 제품군입니다.
아래와 같이 구성되어 있습니다.
- CloudPak for Application
- CloudPak for Multicloud Management
- CloudPak for Integration
- CloudPak for Data
- CloudPak for Automation
- CloudPak for Security
:::
```
## Block 메시지1
::: tip CloudPak이란?
**CloudPak**은 IBM의 Total cloud platform 제품군입니다.
아래와 같이 구성되어 있습니다.
- CloudPak for Application
- CloudPak for Multicloud Management
- CloudPak for Integration
- CloudPak for Data
- CloudPak for Automation
- CloudPak for Security
```

## Block 메시지2
> **저작자 소개**\
    - 성별: 남 \
    - 이름: _이해경_ \
    - 나이: _50_ \
    - 특기: _놀고먹기_
```
## Block 메시지2
> **저작자 소개**\
    - 성별: 남 \
    - 이름: _이해경_ \
    - 나이: _50_ \
    - 특기: _놀고먹기_
```

## URL link 
참고: [다음](http://www.daum.net)
```
## URL link 
참고: [다음](http://www.daum.net)
```

## 이미지 
![kubepia](https://kubepia.github.io/assets/img/kubepia.png)
```
## 이미지 
![kubepia](https://kubepia.github.io/assets/img/kubepia.png)
```

## Source code
``` 
language: node_js
node_js:
  - "12"
install:
  - npm install
script:
  - npm run build

deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GIT_TOKEN
  local_dir: docs/.vuepress/dist
  target-branch: master
  on:
    branch: dev
```
```
※ 사용 시 [```]에서 대괄호는 제거해야 함
## Source code
[```] 
language: node_js
node_js:
  - "12"
install:
  - npm install
script:
  - npm run build

deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GIT_TOKEN
  local_dir: docs/.vuepress/dist
  target-branch: master
  on:
    branch: dev
[```]
```

## Table
| No | Task | Description |
|:---|:--------------------------|:-----------------------------------|
| 1 | Infra node 구성 | bastion, network, storage, gateway VM을 생성하고, Web, DNS, DHCP, NFS, haproxy, IPTables서버를 설치함 |
| 2 | OCP 설치 | OCP master / worker node를 설치함 |
| 3 | CP4App 설치 | Common Service와 CP4App을 설치함 |
```
| No | Task | Description |
|:---|:--------------------------|:-----------------------------------|
| 1 | Infra node 구성 | bastion, network, storage, gateway VM을 생성하고, Web, DNS, DHCP, NFS, haproxy, IPTables서버를 설치함 |
| 2 | OCP 설치 | OCP master / worker node를 설치함 |
| 3 | CP4App 설치 | Common Service와 CP4App을 설치함 |
```
---
[[toc]]

---
<disqus/>
