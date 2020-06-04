(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{432:function(t,s,a){t.exports=a.p+"assets/img/infra01-DRS01.0e71c8e4.png"},433:function(t,s,a){t.exports=a.p+"assets/img/infra01-DRS02.d6eb1c71.png"},434:function(t,s,a){t.exports=a.p+"assets/img/infra01-architecture.b20e3e73.png"},435:function(t,s,a){t.exports=a.p+"assets/img/infra01-01.27f1ce9d.png"},436:function(t,s,a){t.exports=a.p+"assets/img/infra01-02.cd4ae143.png"},437:function(t,s,a){t.exports=a.p+"assets/img/infra01-03.d0e91d50.png"},438:function(t,s,a){t.exports=a.p+"assets/img/infra01-04.cf10bf1f.png"},439:function(t,s,a){t.exports=a.p+"assets/img/infra01-05.a3103c53.png"},440:function(t,s,a){t.exports=a.p+"assets/img/infra01-06.f3310492.png"},441:function(t,s,a){t.exports=a.p+"assets/img/infra01-07.934286d3.png"},442:function(t,s,a){t.exports=a.p+"assets/img/infra01-08.96132550.png"},443:function(t,s,a){t.exports=a.p+"assets/img/infra01-09.04bb5bd3.png"},444:function(t,s,a){t.exports=a.p+"assets/img/infra01-10.ec42d7b8.png"},445:function(t,s,a){t.exports=a.p+"assets/img/infra01-11.5ad400f9.png"},446:function(t,s,a){t.exports=a.p+"assets/img/infra01-12.ff6013be.png"},447:function(t,s,a){t.exports=a.p+"assets/img/infra01-13.e0453364.png"},448:function(t,s,a){t.exports=a.p+"assets/img/infra01-14.d3489c06.png"},449:function(t,s,a){t.exports=a.p+"assets/img/infra01-15.7eabfc59.png"},450:function(t,s,a){t.exports=a.p+"assets/img/infra01-16.5a9ae5c5.png"},596:function(t,s,a){"use strict";a.r(s);var r=a(25),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"infra-servers-vm-생성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-vm-생성"}},[t._v("#")]),t._v(" Infra Servers-VM 생성")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),r("p",[t._v("내외부연결(bastion), 네트워크, 스토리지, NAT서버 설치를 위한 VM을 생성합니다.\n")]),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#vm-템플릿-작성"}},[t._v("VM 템플릿 작성")])]),r("li",[r("a",{attrs:{href:"#drs자동화-설정"}},[t._v("DRS자동화 설정")])]),r("li",[r("a",{attrs:{href:"#vm-생성"}},[t._v("VM 생성")])])])]),r("p")]),t._v(" "),r("h2",{attrs:{id:"vm-템플릿-작성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-템플릿-작성"}},[t._v("#")]),t._v(" VM 템플릿 작성")]),t._v(" "),r("p",[t._v("VM을 생성하기 위한 RHEL7 VM템플릿을 먼저 작성합니다.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://happycloud-lee.tistory.com/121",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create a RHEL 7 VM template for VMware vSphere"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"drs자동화-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drs자동화-설정"}},[t._v("#")]),t._v(" DRS자동화 설정")]),t._v(" "),r("p",[t._v("Distributed Resource Scheduler는 자동으로 가상머신을 ESXi Host에 분산 배치시켜 주는 기술입니다."),r("br"),t._v("\nVM생성을 쉽게 하기 위하여 이 기능을 enable시킵니다."),r("br"),t._v("\nDRS가 enable되면 VM생성 시 IP를 지정할 필요가 없습니다."),r("br"),t._v("\n가장 적합한 Host에 배치되면서 IP가 할당 됩니다."),r("br"),t._v(" "),r("img",{attrs:{src:a(432),alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(433),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"vm-생성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-생성"}},[t._v("#")]),t._v(" VM 생성")]),t._v(" "),r("p",[t._v("Infra node 구성을 위한 VM은 bastion, network, storage, gateway(=iptables)입니다.\n"),r("img",{attrs:{src:a(434),alt:""}})]),t._v(" "),r("p",[t._v("또한 위 그림과 같이 각 VM node에는 아래와 같은 S/W가 설치됩니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("VM")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("설치 S/W")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("bastion")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Web 서버")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("network")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("dns, dhcp, haproxy")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("storage")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("nfs")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("gateway")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("iptables")])])])]),t._v(" "),r("p",[t._v("4개의 VM node를 아래와 같이 생성합니다.")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("VMWare vCenter 로그인")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("VM Template 선택 및 새 VM생성 시작")]),t._v(" "),r("img",{attrs:{src:a(435),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("VM name입력 및 위치 지정")]),t._v(" "),r("img",{attrs:{src:a(436),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("IP지정")]),r("br"),t._v("\nDRS(Distributed Resource Schedule)가 enable되어 있으므로 아무IP나 선택합니다.\n"),r("img",{attrs:{src:a(437),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Storage지정")]),r("br"),t._v("\n미리 구성한 vCenter의 Storage를 선택합니다.\n"),r("img",{attrs:{src:a(438),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("옵션지정")]),r("br"),t._v("\nVM template에 이미 적절한 옵션이 지정되어 있으므로 skip해도 됩니다."),r("br"),t._v("\nCPU/Mem 조정이 필요하면 'Customize this virtual machine's hardware'를 체크하고 조정하십시오.\n"),r("img",{attrs:{src:a(439),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("최종 검토 및 생성")]),r("br"),t._v("\n최종으로 지정한 내용을 검토하고 이상 없으면 [FINISH]버튼을 클릭하십시오."),r("br"),t._v(" "),r("img",{attrs:{src:a(440),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("VM시작 & Web console 접근")]),r("br"),t._v("\n하단 진행bar에서 VM생성이 완료된것을 확인하고, VM을 시작합니다."),r("br"),t._v("\n시작 후에 'Launch Web Console'을 클릭합니다."),r("br"),t._v(" "),r("img",{attrs:{src:a(441),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Public IP지정")]),r("br"),t._v("\nDRS에 의해 IP가 자동 지정되었겠지만 미리 정한 IP로 변경합니다.\nVM Template에 정의된 root 암호로 로그인 한 후, 아래를 수행합니다.")])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ cd /etc/sysconfig/network-scripts\n$ vi ifcfg-ens192\n")])])]),r("p",[r("img",{attrs:{src:a(442),alt:""}})]),t._v(" "),r("p",[t._v("IPADDR값을 변경합니다."),r("br"),t._v(" "),r("img",{attrs:{src:a(443),alt:""}})]),t._v(" "),r("p",[t._v("network서비스를 재시작하여 변경IP를 반영합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ systemctl restart network\n")])])]),r("p",[r("img",{attrs:{src:a(444),alt:""}})]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("Terminal에서 VM접근")]),r("br"),t._v(" "),r("img",{attrs:{src:a(445),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("hostname 변경")])])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ hostnamectl set-hostname bastion\n")])])]),r("p",[r("img",{attrs:{src:a(446),alt:""}})]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("network, storage, gateway VM 생성")]),r("br"),t._v("\nbastion VM생성 순서를 참조하여 VM들을 생성합니다."),r("br"),t._v(" "),r("img",{attrs:{src:a(447),alt:""}}),t._v(" "),r("img",{attrs:{src:a(448),alt:""}}),t._v(" "),r("img",{attrs:{src:a(449),alt:""}})])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("redhat subscription 등록")]),r("br"),t._v("\n이 작업은 OS로 RHEL을 사용하는 경우에만 필요합니다."),r("br"),t._v("\n즉, centos를 사용하는 경우는 불필요합니다."),r("br"),t._v("\nyum install을 위해서는 redhat subscription을 먼저 등록해야 합니다."),r("br"),t._v("\n각 VM node에서 미리 등록하여 주십시오."),r("br"),t._v("\nredhat subscription등록 방법은 가이드메일을 참조하세요.")])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("전체 subscription 추가  \n$ subscription-manager register --username [username] --password [password] --auto-attach\n\nsubscription별 추가: list에서 Pool ID확인하여 추가함    \n$ subscription-manager register --username [username] --password [password]\n$ subscription-manager list --available\n$ subscription-manager attach --pool=<POOL ID>\n\n참고: subscription refresh  \n$ subscription-manager refresh\n")])])]),r("p",[r("img",{attrs:{src:a(450),alt:""}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("방화벽 중지")]),r("br"),t._v("\n필요한 포트 오픈을 해줘야 하는데 테스트 환경이라면 방화벽을 내려서 모든 포트를 허용합니다."),r("br"),t._v("\n실제 운영환경에서는 방화벽에서 포트 오픈을 해줘야 합니다."),r("br"),t._v("\n각 VM에서 아래 명령으로 방화벽을 중지합니다.")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ systemctl stop firewalld\n$ systemctl disable firewalld \n")])])]),r("hr"),t._v(" "),r("disqus")],1)}),[],!1,null,null,null);s.default=e.exports}}]);