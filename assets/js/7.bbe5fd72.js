(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{333:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-00-40-51.e52e0092.png"},334:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-00-45-57.90440b38.png"},335:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-00-47-28.f8eafc4b.png"},336:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-00-59-02.69bdd1ac.png"},337:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-01-04-17.f6720c35.png"},338:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-01-10-45.873e9bb0.png"},339:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-01-11-18.f969d33f.png"},340:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-01-13-51.c769d530.png"},341:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-01-20-52.f79f358d.png"},342:function(t,s,a){t.exports=a.p+"assets/img/2020-05-25-01-18-14.d9b5f297.png"},443:function(t,s,a){"use strict";a.r(s);var e=a(17),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"infra-servers-iptables-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-iptables-설치"}},[t._v("#")]),t._v(" Infra Servers-iptables 설치")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),e("p",[t._v("iptables는 private IP만 부여된 VM(storage, network, master, worker등)들이 외부 public network에 접근하기 위한 gateway역할을 합니다."),e("br"),t._v("\n기술적으로는 DNAT(Destination Network Address Translation)역할을 수행하는것입니다."),e("br"),t._v("\n예를 들면 172.168.0.* VM들의 gateway인 172.168.0.1로 요청이 들어오면 Public Gateway인 192.168.0.2로 주소를 변환하여 전달하여 외부로 traffic이 나갔다 들어올 수 있도록 합니다."),e("br"),t._v("\n참고로 외부 요청을 내부로 전달하기 위한 NAT는 SNAT(Source NAT)이라고 하며, 클러스터 외부의 네트워크 장비(예: 무선공유기 iptime)에 설정합니다.")]),t._v(" "),e("p",[t._v("아래는 iptables설치 및 작업순서 명령어들입니다."),e("br"),t._v(" "),e("img",{attrs:{src:a(333),alt:""}})]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#iptables서버-설치"}},[t._v("iptables서버 설치")])]),e("li",[e("a",{attrs:{href:"#iptables-설정-초기화"}},[t._v("iptables 설정 초기화")])]),e("li",[e("a",{attrs:{href:"#private-public-ip의-요청-accept설정"}},[t._v("private/public ip의 요청 Accept설정")])]),e("li",[e("a",{attrs:{href:"#dnat-설정"}},[t._v("DNAT 설정")])]),e("li",[e("a",{attrs:{href:"#설정-확인"}},[t._v("설정 확인")])]),e("li",[e("a",{attrs:{href:"#ip-forward-활성화"}},[t._v("ip forward 활성화")])]),e("li",[e("a",{attrs:{href:"#iptables-설정-저장-및-시작"}},[t._v("iptables 설정 저장 및 시작")])])])]),e("p")]),t._v(" "),e("h2",{attrs:{id:"iptables서버-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables서버-설치"}},[t._v("#")]),t._v(" iptables서버 설치")]),t._v(" "),e("p",[t._v("gateway VM을 접근합니다."),e("br"),t._v("\nssl key설정을 하였으므 ssh gateway명령으로 바로 접근할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ ssh gateway\n$ yum install -y iptables-services\n")])])]),e("p",[e("img",{attrs:{src:a(334),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"iptables-설정-초기화"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables-설정-초기화"}},[t._v("#")]),t._v(" iptables 설정 초기화")]),t._v(" "),e("p",[t._v("기존 설정이 있으면 초기화합니다.  -F는 Flush파라미터입니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ iptables -F\n$ iptables -t nat -F\n")])])]),e("p",[e("img",{attrs:{src:a(335),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"private-public-ip의-요청-accept설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-public-ip의-요청-accept설정"}},[t._v("#")]),t._v(" private/public ip의 요청 Accept설정")]),t._v(" "),e("p",[t._v("ens224는 private ip, ens192는 public ip로 부터의 요청을 의미합니다."),e("br"),t._v("\nprivate/public ip으로부터의 요청을 허용하고 forward설정을 추가합니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ iptables -A FORWARD -o ens224 -j ACCEPT\n$ iptables -A FORWARD -o ens192 -j ACCEPT\n")])])]),e("p",[e("img",{attrs:{src:a(336),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"dnat-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dnat-설정"}},[t._v("#")]),t._v(" DNAT 설정")]),t._v(" "),e("p",[t._v("Public Gateway로 라우팅을 위한 NAT(Network Address Translation)설정을 합니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ iptables -t nat -A POSTROUTING -o ens192 -j MASQUERADE\n")])])]),e("p",[e("img",{attrs:{src:a(337),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"설정-확인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정-확인"}},[t._v("#")]),t._v(" 설정 확인")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ iptables -t nat -L -n --line-number\n$ iptables -L -n --line-number\n")])])]),e("p",[e("img",{attrs:{src:a(338),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(339),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"ip-forward-활성화"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip-forward-활성화"}},[t._v("#")]),t._v(" ip forward 활성화")]),t._v(" "),e("p",[t._v("ip forward설정을 enable시킵니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ echo "1" > /proc/sys/net/ipv4/ip_forward\n')])])]),e("p",[e("img",{attrs:{src:a(340),alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("ip forward 영구설정")]),t._v(" "),e("p",[t._v("위 proc에 설정한것은 VM이 재시작되면 사라집니다."),e("br"),t._v("\n영구적으로 설정하려면 sysctl명령으로 해야 합니다."),e("br"),t._v("\nip forward는 기본적으로 활성화되어 있으므로 아래와 같이 확인만 해 봅니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ sysctl -a | grep ip_forward\n")])])]),e("p",[e("img",{attrs:{src:a(341),alt:""}})])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("※ systemctl과 sysctl")]),t._v(" "),e("br"),t._v("\nsystemctl은 daemon서비스들에 대한 설정만 control합니다."),e("br"),t._v("\nsysctl은 system서비스들에 대한 설정을 control합니다. "),e("br"),t._v(" "),e("strong",[t._v("VM Template을 만들때 sysctl로 system서비스들에 대한 설정을 미리 지정하는것이 좋습니다.")])])]),t._v(" "),e("h2",{attrs:{id:"iptables-설정-저장-및-시작"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables-설정-저장-및-시작"}},[t._v("#")]),t._v(" iptables 설정 저장 및 시작")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ service iptables save\n$ systemctl enable iptables\n$ systemctl start iptables\n")])])]),e("p",[e("img",{attrs:{src:a(342),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("이상으로 Infra Servers설치를 완료하였습니다.")]),t._v(" "),e("strong",[t._v("이제 OCP설치를 진행하십시오.")])]),t._v(" "),e("hr"),t._v(" "),e("disqus")],1)}),[],!1,null,null,null);s.default=r.exports}}]);