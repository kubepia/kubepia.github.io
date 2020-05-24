(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{243:function(a,r,t){a.exports=t.p+"assets/img/infra05-01.2f747aff.png"},244:function(a,r,t){a.exports=t.p+"assets/img/infra05-03.bd365861.png"},245:function(a,r,t){a.exports=t.p+"assets/img/infra05-04.88bccafa.png"},246:function(a,r,t){a.exports=t.p+"assets/img/infra05-05.8d7d8ea7.png"},312:function(a,r,t){"use strict";t.r(r);var s=t(17),e=Object(s.a)({},(function(){var a=this,r=a.$createElement,s=a._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"infra-servers-haproxy서버-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-haproxy서버-설치"}},[a._v("#")]),a._v(" Infra Servers-HAProxy서버 설치")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TASK DESCRIPTION")]),a._v(" "),s("p",[a._v("Network VM에 HAProxy서버를 설치합니다.\nHAProxy는 S/W적인 Load balancer이며 L/B대상은 api server와 user service들입니다."),s("br"),a._v("\n물리적인 L4/L7장비로 Load balancing한다면 필요 없습니다."),s("br")]),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#haproxy서버-설치"}},[a._v("HAProxy서버 설치")])]),s("li",[s("a",{attrs:{href:"#l-b-설정"}},[a._v("L/B 설정")])]),s("li",[s("a",{attrs:{href:"#haproxy서버-시작"}},[a._v("HAProxy서버 시작")])]),s("li",[s("a",{attrs:{href:"#haproxy서버로-포트-forwarding"}},[a._v("haproxy서버로 포트 forwarding")])])])]),s("p")]),a._v(" "),s("h2",{attrs:{id:"haproxy서버-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버-설치"}},[a._v("#")]),a._v(" HAProxy서버 설치")]),a._v(" "),s("p",[a._v("Terminal 또는 ssh명령으로 Network VM을 접근합니다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ yum install -y haproxy.x86_64\n")])])]),s("p",[s("img",{attrs:{src:t(243),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"l-b-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#l-b-설정"}},[a._v("#")]),a._v(" L/B 설정")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cd /etc/haproxy\n$ vi haproxy.conf\n")])])]),s("ul",[s("li",[s("p",[a._v("api server에 대한 6443, 22623포트 L/B설정을 합니다."),s("br"),a._v(" "),s("img",{attrs:{src:t(244),alt:""}})])]),a._v(" "),s("li",[s("p",[a._v("user services에 대한 80, 443포트 L/B설정을 합니다."),s("br"),a._v("\nL/B node는 ingress controller 서비스가 수행되고 있는 worker node에 대해서만 설정하면 됩니다."),s("br"),a._v(" "),s("img",{attrs:{src:t(245),alt:""}})])])]),a._v(" "),s("h2",{attrs:{id:"haproxy서버-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버-시작"}},[a._v("#")]),a._v(" HAProxy서버 시작")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("HAProxy서버를 부팅시 자동 시작하도록 등록\n$ systemctl enable haproxy\n\nHAProxy서버 시작\n$ systemctl start haproxy\n\n상태확인\n$ systemctl status haproxy\n")])])]),s("p",[s("img",{attrs:{src:t(246),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"haproxy서버로-포트-forwarding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haproxy서버로-포트-forwarding"}},[a._v("#")]),a._v(" haproxy서버로 포트 forwarding")]),a._v(" "),s("p",[a._v("클러스터 외부에 있는 유선네트워크장치 또는 무선공유기(iptime)에서 6443, 22623, 80, 443포트에 대해"),s("br"),a._v("\nhaproxy서버로 포트 forward설정을 합니다.")])])}),[],!1,null,null,null);r.default=e.exports}}]);