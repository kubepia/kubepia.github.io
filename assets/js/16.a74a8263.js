(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{310:function(r,e,a){r.exports=a.p+"assets/img/infra05-01.2f747aff.png"},311:function(r,e,a){r.exports=a.p+"assets/img/infra05-03.bd365861.png"},312:function(r,e,a){r.exports=a.p+"assets/img/infra05-04.88bccafa.png"},313:function(r,e,a){r.exports=a.p+"assets/img/infra05-05.8d7d8ea7.png"},438:function(r,e,a){"use strict";a.r(e);var t=a(17),s=Object(t.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"infra-servers-haproxy서버-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-haproxy서버-설치"}},[r._v("#")]),r._v(" Infra Servers-HAProxy서버 설치")]),r._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[r._v("TASK DESCRIPTION")]),r._v(" "),t("p",[r._v("Network VM에 HAProxy서버를 설치합니다.\nHAProxy는 S/W적인 Load balancer이며 L/B대상은 api server와 user service들입니다."),t("br"),r._v("\n물리적인 L4/L7장비로 Load balancing한다면 필요 없습니다."),t("br")]),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#haproxy서버-설치"}},[r._v("HAProxy서버 설치")])]),t("li",[t("a",{attrs:{href:"#l-b-설정"}},[r._v("L/B 설정")])]),t("li",[t("a",{attrs:{href:"#haproxy서버-시작"}},[r._v("HAProxy서버 시작")])]),t("li",[t("a",{attrs:{href:"#haproxy서버로-포트-forwarding"}},[r._v("haproxy서버로 포트 forwarding")])])])]),t("p")]),r._v(" "),t("h2",{attrs:{id:"haproxy서버-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버-설치"}},[r._v("#")]),r._v(" HAProxy서버 설치")]),r._v(" "),t("p",[r._v("Terminal 또는 ssh명령으로 Network VM을 접근합니다.")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("$ yum install -y haproxy.x86_64\n")])])]),t("p",[t("img",{attrs:{src:a(310),alt:""}})]),r._v(" "),t("h2",{attrs:{id:"l-b-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#l-b-설정"}},[r._v("#")]),r._v(" L/B 설정")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("$ cd /etc/haproxy\n$ vi haproxy.cfg\n")])])]),t("ul",[t("li",[t("p",[r._v("api server에 대한 6443, 22623포트 L/B설정을 합니다."),t("br"),r._v(" "),t("img",{attrs:{src:a(311),alt:""}})])]),r._v(" "),t("li",[t("p",[r._v("user services에 대한 80, 443포트 L/B설정을 합니다."),t("br"),r._v("\nL/B node는 ingress controller 서비스가 수행되고 있는 worker node에 대해서만 설정하면 됩니다."),t("br"),r._v(" "),t("img",{attrs:{src:a(312),alt:""}})])]),r._v(" "),t("li",[t("p",[r._v("아래 sample파일을 참조하여 셋팅합니다.")]),r._v(" "),t("ul",[t("li",[r._v("기존 기본 haproxy.cfg에서 'maxconn ...'하위의 내용을 지웁니다.")]),r._v(" "),t("li",[r._v("아래 sample의 'listen stats ..'부터 복사하여 추가합니다.")]),r._v(" "),t("li",[r._v("IP를 적절하게 변경합니다.")])])])]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("SAMPLE\n\n...\ndefaults\n    ...\n    maxconn                 3000\n\nlisten stats\n    bind :9000\n    mode http\n    stats enable\n    stats uri /\n    monitor-uri /healthz\n\nfrontend openshift-api-server\n    bind *:6443\n    default_backend openshift-api-server\n    mode tcp\n    option tcplog\n\nbackend openshift-api-server\n    balance source\n    mode tcp\n    server bootstrap 172.168.0.180:6443 check\n    server master-0 172.168.0.186:6443 check\n    server master-1 172.168.0.185:6443 check\n    server master-2 172.168.0.184:6443 check\n\nfrontend machine-config-server\n    bind *:22623\n    default_backend machine-config-server\n    mode tcp\n    option tcplog\n\nbackend machine-config-server\n    balance source\n    mode tcp\n    server bootstrap 172.168.0.180:22623 check\n    server master-0 172.168.0.186:22623 check\n    server master-1 172.168.0.185:22623 check\n    server master-2 172.168.0.184:22623 check\n\nfrontend ingress-http\n    bind *:80\n    default_backend ingress-http\n    mode tcp\n    option tcplog\n\nbackend ingress-http\n    balance source\n    mode tcp\n    server worker-1 172.168.0.183:80 check\n    server worker-2 172.168.0.182:80 check\n\nfrontend ingress-https\n    bind *:443\n    default_backend ingress-https\n    mode tcp\n    option tcplog\n\nbackend ingress-https\n    balance source\n    mode tcp\n    server worker-1 172.168.0.183:443 check\n    server worker-2 172.168.0.182:443 check\n\n")])])]),t("h2",{attrs:{id:"haproxy서버-시작"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버-시작"}},[r._v("#")]),r._v(" HAProxy서버 시작")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("HAProxy서버를 부팅시 자동 시작하도록 등록\n$ systemctl enable haproxy\n\nHAProxy서버 시작\n$ systemctl start haproxy\n\n상태확인\n$ systemctl status haproxy\n")])])]),t("p",[t("img",{attrs:{src:a(313),alt:""}})]),r._v(" "),t("h2",{attrs:{id:"haproxy서버로-포트-forwarding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버로-포트-forwarding"}},[r._v("#")]),r._v(" haproxy서버로 포트 forwarding")]),r._v(" "),t("p",[r._v("클러스터 외부에 있는 유선네트워크장치 또는 무선공유기(iptime)에서 6443, 22623, 80, 443포트에 대해"),t("br"),r._v("\nhaproxy서버로 포트 forward설정을 합니다.")]),r._v(" "),t("hr"),r._v(" "),t("disqus")],1)}),[],!1,null,null,null);e.default=s.exports}}]);