(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{300:function(t,n,e){t.exports=e.p+"assets/img/infra03-01.ab5a9337.png"},301:function(t,n,e){t.exports=e.p+"assets/img/infra03-02.44df9abe.png"},302:function(t,n,e){t.exports=e.p+"assets/img/infra03-03.72e6e33d.png"},303:function(t,n,e){t.exports=e.p+"assets/img/infra03-04.cd62df2c.png"},436:function(t,n,e){"use strict";e.r(n);var a=e(17),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"infra-servers-vm-network-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-vm-network-설정"}},[t._v("#")]),t._v(" Infra Servers-VM Network 설정")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),a("p",[t._v("Infra VM의 네트워크를 설정합니다.\n")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#private-network-adapter-추가"}},[t._v("Private Network adapter 추가")])]),a("li",[a("a",{attrs:{href:"#private-ip-셋팅"}},[t._v("Private IP 셋팅")])])])]),a("p")]),t._v(" "),a("p",[t._v("각 VM의 Private IP(172.168.0.*)를 지정합니다."),a("br"),t._v("\n아래 작업을 각 VM에서 수행하십시오.")]),t._v(" "),a("h2",{attrs:{id:"private-network-adapter-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-network-adapter-추가"}},[t._v("#")]),t._v(" Private Network adapter 추가")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Edit Setting클릭")]),a("br"),t._v(" "),a("img",{attrs:{src:e(300),alt:""}})])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Network adapter추가")]),a("br"),t._v(" "),a("img",{attrs:{src:e(301),alt:""}}),t._v(" "),a("img",{attrs:{src:e(302),alt:""}}),t._v(" "),a("img",{attrs:{src:e(303),alt:""}})])])]),t._v(" "),a("h2",{attrs:{id:"private-ip-셋팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-ip-셋팅"}},[t._v("#")]),t._v(" Private IP 셋팅")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("private ip용 설정파일 생성")]),a("br"),t._v("\n추가한 network adpater를 위한 설정파일을 생성합니다."),a("br"),t._v("\n파일명은 ifcfg-ens224로 만드셔야 합니다.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /etc/sysconfig/network-scripts\n$ cp ifcfg-ens192 ifcfg-ens224\n")])])]),a("ul",[a("li",[a("strong",[t._v("private IP셋팅")]),a("br"),t._v("\nifcfg-ens224파일에 private IP를 셋팅합니다."),a("br"),t._v("\n※ "),a("strong",[t._v("GATEWAY설정은 반드시 삭제")]),t._v("해야 합니다.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ vi ifcfg-ens224\n\n가이드 :\n- NAME, DEVICE, IPADDR를 변경\n- DNS1은 앞으로 추가할 DNS 서버 IP로 지정\n- 기존 DNS1은 DNS2로 변제. DNS2는 public DNS로 셋팅. 8.8.8.8은 google public DNS임.\n- 반드시 GATEWAY는 삭제  \n\nTYPE=Ethernet\nPROXY_METHOD=none\nBROWSER_ONLY=no\nBOOTPROTO=none\nDEFROUTE=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable-privacy\nNAME=ens224\nUUID=a58ea52a-b041-4474-892a-ad40df598c57\nDEVICE=ens224\nONBOOT=yes\nIPADDR=172.168.0.190\nPREFIX=24\nDNS1=172.168.0.189\nDNS2=8.8.8.8\nIPV6_PRIVACY=no\n")])])]),a("ul",[a("li",[a("strong",[t._v("DNS서버 셋팅")]),a("br"),t._v("\nifcfg-ens192에 DNS서버를 추가합니다."),a("br"),t._v("\nDNS서버는 network VM에 설치할 예정이므로, network VM의 private IP를 지정합니다."),a("br"),t._v("\n2차 DNS는 public DNS를 지정합니다.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SAMPLE \n----------\n\nTYPE=Ethernet\nPROXY_METHOD=none\nBROWSER_ONLY=no\nBOOTPROTO=none\nDEFROUTE=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable-privacy\nNAME=ens192\nUUID=a58ea52a-b041-4474-892a-ad40df598c57\nDEVICE=ens192\nONBOOT=yes\nIPADDR=192.168.0.190\nPREFIX=24\nGATEWAY=192.168.0.2\nDNS1=172.168.0.189\nDNS2=8.8.8.8\nIPV6_PRIVACY=no\n")])])]),a("ul",[a("li",[a("strong",[t._v("network 서비스 재시작")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ systemctl restart network\n")])])]),a("hr"),t._v(" "),a("disqus")],1)}),[],!1,null,null,null);n.default=s.exports}}]);