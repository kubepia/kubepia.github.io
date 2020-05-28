(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{309:function(r,e,t){r.exports=t.p+"assets/img/infra05-01.2f747aff.png"},310:function(r,e,t){r.exports=t.p+"assets/img/infra05-03.bd365861.png"},311:function(r,e,t){r.exports=t.p+"assets/img/infra05-04.88bccafa.png"},312:function(r,e,t){r.exports=t.p+"assets/img/infra05-05.8d7d8ea7.png"},438:function(r,e,t){"use strict";t.r(e);var a=t(17),s=Object(a.a)({},(function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"infra-servers-haproxy서버-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-haproxy서버-설치"}},[r._v("#")]),r._v(" Infra Servers-HAProxy서버 설치")]),r._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[r._v("TASK DESCRIPTION")]),r._v(" "),a("p",[r._v("Network VM에 HAProxy서버를 설치합니다.\nHAProxy는 S/W적인 Load balancer이며 L/B대상은 api server와 user service들입니다."),a("br"),r._v("\n물리적인 L4/L7장비로 Load balancing한다면 필요 없습니다."),a("br")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#haproxy서버-설치"}},[r._v("HAProxy서버 설치")])]),a("li",[a("a",{attrs:{href:"#l-b-설정"}},[r._v("L/B 설정")])]),a("li",[a("a",{attrs:{href:"#haproxy서버-시작"}},[r._v("HAProxy서버 시작")])]),a("li",[a("a",{attrs:{href:"#haproxy서버로-포트-forwarding"}},[r._v("haproxy서버로 포트 forwarding")])])])]),a("p")]),r._v(" "),a("h2",{attrs:{id:"haproxy서버-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버-설치"}},[r._v("#")]),r._v(" HAProxy서버 설치")]),r._v(" "),a("p",[r._v("Terminal 또는 ssh명령으로 Network VM을 접근합니다.")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("$ yum install -y haproxy.x86_64\n")])])]),a("p",[a("img",{attrs:{src:t(309),alt:""}})]),r._v(" "),a("h2",{attrs:{id:"l-b-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#l-b-설정"}},[r._v("#")]),r._v(" L/B 설정")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("$ cd /etc/haproxy\n$ vi haproxy.conf\n")])])]),a("ul",[a("li",[a("p",[r._v("api server에 대한 6443, 22623포트 L/B설정을 합니다."),a("br"),r._v(" "),a("img",{attrs:{src:t(310),alt:""}})])]),r._v(" "),a("li",[a("p",[r._v("user services에 대한 80, 443포트 L/B설정을 합니다."),a("br"),r._v("\nL/B node는 ingress controller 서비스가 수행되고 있는 worker node에 대해서만 설정하면 됩니다."),a("br"),r._v(" "),a("img",{attrs:{src:t(311),alt:""}})])])]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("SAMPLE\n\nlisten stats\n bind :9000\n mode http\n stats enable\n stats uri /\n monitor-uri /healthz\nfrontend openshift-api-server\n bind *:6443\n default_backend openshift-api-server\n mode tcp\n option tcplog\nbackend openshift-api-server\n balance source\nmode tcp\n server bootstrap 172.168.0.180:6443 check\n server master-0 172.168.0.186:6443 check\n server master-1 172.168.0.185:6443 check\n server master-2 172.168.0.184:6443 check\nfrontend machine-config-server\nbind *:22623\n default_backend machine-config-server\n mode tcp\n option tcplog\nbackend machine-config-server\n balance source\n mode tcp\n server bootstrap 172.168.0.180:22623 check\n server master-0 172.168.0.186:22623 check\n server master-1 172.168.0.185:22623 check\n server master-2 172.168.0.184:22623 check\nfrontend ingress-http\n bind *:80\n default_backend ingress-http\n mode tcp\n option tcplog\nbackend ingress-http\n balance source\n mode tcp\n server worker-1 172.168.0.183:80 check\n server worker-2 172.168.0.182:80 check\nfrontend ingress-https\n bind *:443\n default_backend ingress-https\n mode tcp\n option tcplog\nbackend ingress-https\n balance source\n mode tcp\n server worker-1 172.168.0.183:443 check\n server worker-2 172.168.0.182:443 check\n")])])]),a("h2",{attrs:{id:"haproxy서버-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버-시작"}},[r._v("#")]),r._v(" HAProxy서버 시작")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("HAProxy서버를 부팅시 자동 시작하도록 등록\n$ systemctl enable haproxy\n\nHAProxy서버 시작\n$ systemctl start haproxy\n\n상태확인\n$ systemctl status haproxy\n")])])]),a("p",[a("img",{attrs:{src:t(312),alt:""}})]),r._v(" "),a("h2",{attrs:{id:"haproxy서버로-포트-forwarding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버로-포트-forwarding"}},[r._v("#")]),r._v(" haproxy서버로 포트 forwarding")]),r._v(" "),a("p",[r._v("클러스터 외부에 있는 유선네트워크장치 또는 무선공유기(iptime)에서 6443, 22623, 80, 443포트에 대해"),a("br"),r._v("\nhaproxy서버로 포트 forward설정을 합니다.")]),r._v(" "),a("hr"),r._v(" "),a("disqus")],1)}),[],!1,null,null,null);e.default=s.exports}}]);