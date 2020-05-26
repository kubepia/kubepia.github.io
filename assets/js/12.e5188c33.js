(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{167:function(t,r,a){t.exports=a.p+"assets/img/infra03-07.5da6093c.png"},301:function(t,r,a){t.exports=a.p+"assets/img/infra03-01.ab5a9337.png"},302:function(t,r,a){t.exports=a.p+"assets/img/infra03-02.44df9abe.png"},303:function(t,r,a){t.exports=a.p+"assets/img/infra03-03.72e6e33d.png"},304:function(t,r,a){t.exports=a.p+"assets/img/infra03-04.cd62df2c.png"},305:function(t,r,a){t.exports=a.p+"assets/img/infra03-05.c6cdfad5.png"},306:function(t,r,a){t.exports=a.p+"assets/img/infra03-06.db9cf01f.png"},441:function(t,r,a){"use strict";a.r(r);var s=a(17),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"infra-servers-vm-network-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-vm-network-설정"}},[t._v("#")]),t._v(" Infra Servers-VM Network 설정")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),s("p",[t._v("Infra VM의 네트워크를 설정합니다.\n")]),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#private-network-adapter-추가"}},[t._v("Private Network adapter 추가")])]),s("li",[s("a",{attrs:{href:"#private-ip-셋팅"}},[t._v("Private IP 셋팅")])])])]),s("p")]),t._v(" "),s("p",[t._v("각 VM의 Private IP(172.168.0.*)를 지정합니다."),s("br"),t._v("\n아래 작업을 각 VM에서 수행하십시오.")]),t._v(" "),s("h2",{attrs:{id:"private-network-adapter-추가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private-network-adapter-추가"}},[t._v("#")]),t._v(" Private Network adapter 추가")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Edit Setting클릭")]),s("br"),t._v(" "),s("img",{attrs:{src:a(301),alt:""}})])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Network adapter추가")]),s("br"),t._v(" "),s("img",{attrs:{src:a(302),alt:""}}),t._v(" "),s("img",{attrs:{src:a(303),alt:""}}),t._v(" "),s("img",{attrs:{src:a(304),alt:""}})])])]),t._v(" "),s("h2",{attrs:{id:"private-ip-셋팅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private-ip-셋팅"}},[t._v("#")]),t._v(" Private IP 셋팅")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("private ip용 설정파일 생성")]),s("br"),t._v("\n추가한 network adpater를 위한 설정파일을 생성합니다."),s("br"),t._v("\n파일명은 ifcfg-ens224로 만드셔야 합니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cd /etc/sysconfig/network-scripts\n$ cp ifcfg-ens192 ifcfg-ens224\n")])])]),s("p",[s("img",{attrs:{src:a(305),alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("private IP셋팅")]),s("br"),t._v("\nifcfg-ens224파일에 private IP를 셋팅합니다."),s("br"),t._v("\n※ "),s("strong",[t._v("GATEWAY설정은 반드시 삭제")]),t._v("해야 합니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ vi ifcfg-ens224\n")])])]),s("p",[s("img",{attrs:{src:a(167),alt:""}})]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("DNS서버 셋팅")]),s("br"),t._v("\nifcfg-ens192와 ifcfg-ens224파일에 DNS서버를 추가합니다."),s("br"),t._v("\nDNS서버는 network VM에 설치할 예정이므로, network VM의 private IP를 지정합니다."),s("br"),t._v("\n2차 DNS는 public DNS를 지정합니다.\n"),s("img",{attrs:{src:a(306),alt:""}}),t._v(" "),s("img",{attrs:{src:a(167),alt:""}})])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("network 서비스 재시작")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ systemctl restart network\n")])])]),s("hr"),t._v(" "),s("disqus")],1)}),[],!1,null,null,null);r.default=e.exports}}]);