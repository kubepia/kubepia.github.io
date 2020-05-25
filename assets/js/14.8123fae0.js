(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{247:function(t,s,a){t.exports=a.p+"assets/img/infra06-01.73e7c203.png"},248:function(t,s,a){t.exports=a.p+"assets/img/infra06-02.7544bacb.png"},249:function(t,s,a){t.exports=a.p+"assets/img/infra06-03.d2dd4945.png"},250:function(t,s,a){t.exports=a.p+"assets/img/infra06-04.8b88f53c.png"},367:function(t,s,a){"use strict";a.r(s);var r=a(17),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"infra-servers-dhcp서버-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-dhcp서버-설치"}},[t._v("#")]),t._v(" Infra Servers-DHCP서버 설치")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),r("p",[t._v("Network VM에 DHCP서버를 설치합니다."),r("br"),t._v("\nDHCP는 bootstrap, master, worker node의 MAC주소와 IP를 고정하기 위해 사용됩니다."),r("br")]),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#dhcp서버-설치"}},[t._v("DHCP서버 설치")])]),r("li",[r("a",{attrs:{href:"#dhcp설정"}},[t._v("DHCP설정")])]),r("li",[r("a",{attrs:{href:"#dhcp서버-시작"}},[t._v("DHCP서버 시작")])])])]),r("p")]),t._v(" "),r("h2",{attrs:{id:"dhcp서버-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dhcp서버-설치"}},[t._v("#")]),t._v(" DHCP서버 설치")]),t._v(" "),r("p",[t._v("Terminal 또는 ssh명령으로 Network VM을 접근합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ yum install -y dhcp*\n")])])]),r("p",[r("img",{attrs:{src:a(247),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"dhcp설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dhcp설정"}},[t._v("#")]),t._v(" DHCP설정")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ cd /etc/dhcp\n$ vi dhcpd.conf\n")])])]),r("p",[r("img",{attrs:{src:a(248),alt:""}})]),t._v(" "),r("ul",[r("li",[t._v("router IP, DNS IP, base domain을 지정합니다.")]),t._v(" "),r("li",[t._v("bootstrap, master, worker node의 MAC주소와 IP를 지정합니다."),r("br"),t._v(" "),r("img",{attrs:{src:a(249),alt:""}})])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("ETHERNET ADAPTOR HARDWARE ADDRESS REQUIREMENTS")]),t._v(" "),r("p",[t._v("반드시 아래 범위의 MAC Address를 지정해야 합니다."),r("br"),t._v("\n00:05:69:00:00:00 to 00:05:69:FF:FF:FF"),r("br"),t._v("\n00:0c:29:00:00:00 to 00:0c:29:FF:FF:FF"),r("br"),t._v("\n00:1c:14:00:00:00 to 00:1c:14:FF:FF:FF"),r("br"),t._v("\n00:50:56:00:00:00 to 00:50:56:FF:FF:FF")])]),t._v(" "),r("h2",{attrs:{id:"dhcp서버-시작"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dhcp서버-시작"}},[t._v("#")]),t._v(" DHCP서버 시작")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("DHCP서버를 부팅시 자동 시작하도록 등록\n$ systemctl enable dhcpd\n\nDHCP서버 시작\n$ systemctl start dhcpd\n\n상태확인\n$ systemctl status dhcpd\n")])])]),r("p",[r("img",{attrs:{src:a(250),alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);