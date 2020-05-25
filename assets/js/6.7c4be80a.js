(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{235:function(t,e,a){t.exports=a.p+"assets/img/infra04-01.4943e9bc.png"},236:function(t,e,a){t.exports=a.p+"assets/img/infra04-05.75713ca9.png"},237:function(t,e,a){t.exports=a.p+"assets/img/infra04-10.5f2243ef.png"},238:function(t,e,a){t.exports=a.p+"assets/img/infra04-14.cf81513a.png"},239:function(t,e,a){t.exports=a.p+"assets/img/infra04-15.23358507.png"},240:function(t,e,a){t.exports=a.p+"assets/img/infra04-18.5bf86ef3.png"},241:function(t,e,a){t.exports=a.p+"assets/img/infra04-16.fb7bd18b.png"},242:function(t,e,a){t.exports=a.p+"assets/img/infra04-17.69899aca.png"},343:function(t,e,a){"use strict";a.r(e);var s=a(17),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"infra-servers-dns서버-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-dns서버-설치"}},[t._v("#")]),t._v(" Infra Servers-DNS서버 설치")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),s("p",[t._v("Network VM에 DNS서버를 설치합니다.\n")]),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#dns서버-설치"}},[t._v("DNS서버 설치")])]),s("li",[s("a",{attrs:{href:"#named-conf의-dns옵션-수정"}},[t._v("named.conf의 DNS옵션 수정")])]),s("li",[s("a",{attrs:{href:"#named-rfc1912-zones파일에-dns설정파일-정의"}},[t._v("named.rfc1912.zones파일에 DNS설정파일 정의")])]),s("li",[s("a",{attrs:{href:"#foward-dns-설정"}},[t._v("Foward DNS 설정")])]),s("li",[s("a",{attrs:{href:"#reverse-dns-설정"}},[t._v("Reverse DNS 설정")])]),s("li",[s("a",{attrs:{href:"#dns서버-시작"}},[t._v("DNS서버 시작")])]),s("li",[s("a",{attrs:{href:"#dns설정-검증"}},[t._v("DNS설정 검증")])])])]),s("p")]),t._v(" "),s("h2",{attrs:{id:"dns서버-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns서버-설치"}},[t._v("#")]),t._v(" DNS서버 설치")]),t._v(" "),s("p",[t._v("Terminal 또는 ssh명령으로 Network VM을 접근합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ yum install -y bind-utils bind\n")])])]),s("p",[s("img",{attrs:{src:a(235),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"named-conf의-dns옵션-수정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#named-conf의-dns옵션-수정"}},[t._v("#")]),t._v(" named.conf의 DNS옵션 수정")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cd /etc\n$ vi named.conf \n")])])]),s("p",[t._v("아래와 같이 option을 수정합니다."),s("br"),t._v(" "),s("img",{attrs:{src:a(236),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"named-rfc1912-zones파일에-dns설정파일-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#named-rfc1912-zones파일에-dns설정파일-정의"}},[t._v("#")]),t._v(" named.rfc1912.zones파일에 DNS설정파일 정의")]),t._v(" "),s("p",[t._v("named.rfc1912.zones파일은 named.conf파일에서 include문으로 선언된 파일입니다."),s("br"),t._v("\nDNS의 제반 설정 파일 위치를 지정합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cd /etc\n$ vi named.rfc1912.zones\n")])])]),s("p",[t._v("아래 예와 같이 Forward DNS와 Reverse DNS 설정파일을 지정합니다.")]),t._v(" "),s("ul",[s("li",[t._v("Forard DNS: name to IP resolving(분석)")]),t._v(" "),s("li",[t._v("Reverse DNS: IP to name resolving. 이름은 <IP대역대 역방향>.in-addr.arpa(예:0.168.172.in-addr.arpa)입니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(237),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"foward-dns-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foward-dns-설정"}},[t._v("#")]),t._v(" Foward DNS 설정")]),t._v(" "),s("p",[t._v("Forward DNS설정파일을 작성합니다. DNS설정파일은 /var/named에 생성합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cd /var/named\n$ vi <Forard DNS 설정파일>\n")])])]),s("p",[t._v("아래 표와 같이 각 목적별 주소의 IP를 지정해야 합니다.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("목적")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("예")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("base domain")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("cp.darumetch.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("api server")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("api.cp.darumtech.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("api server 연결")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("api-int.cp.darumetech.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("applications 주소")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("*.apps.cp.darumtech.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("설치용 임시서버")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("bootstrap.cp.darumetech.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("master nodes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("master-*.cp.darumetch.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("worker nodes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("worker-*.cp.darumetch.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("etcd servers")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("etcd-*.cp.darumetch.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("etcd간 통신 주소")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("_etcd-server-ssl._tcp.cp.darumtech.net")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DNS서버 주소")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ns")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Web서버 주소")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("www")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(238),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"reverse-dns-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reverse-dns-설정"}},[t._v("#")]),t._v(" Reverse DNS 설정")]),t._v(" "),s("p",[t._v("Reverse DNS설정파일을 작성합니다. DNS설정파일은 /var/named에 생성합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cd /var/named\n$ vi <Reverse DNS 설정파일>\n")])])]),s("p",[t._v("아래 표와 같이 각 마지막 IP값에 대한 주소를 지정해야 합니다."),s("br"),t._v("\n참고로 앞 3개 IP(예:172.168.0)는 named.rfc1912.zones파일에서 지정하였습니다.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("목적")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("예")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("base domain")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("189")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("api server")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("189")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("api server 연결")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("189")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("설치용 임시서버")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("180")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("master nodes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("186, 185, 184")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("worker nodes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("183, 182")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(239),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"dns서버-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns서버-시작"}},[t._v("#")]),t._v(" DNS서버 시작")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DNS서버를 부팅시 자동 시작하도록 등록\n$ systemctl enable named\n\nDNS서버 시작\n$ systemctl start named\n\n상태확인\n$ systemctl status named\n")])])]),s("p",[s("img",{attrs:{src:a(240),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"dns설정-검증"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns설정-검증"}},[t._v("#")]),t._v(" DNS설정 검증")]),t._v(" "),s("p",[t._v("bastion, network, storage, gateway VM에서 VM설정을 확인합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ nslookup\n")])])]),s("ul",[s("li",[t._v("nslookup명령 실행 후 server명령으로 DNS서버 설정 확인")]),t._v(" "),s("li",[t._v("IP로 name resolving 테스트")]),t._v(" "),s("li",[t._v("name으로 IP resolving 테스트"),s("br"),t._v(" "),s("img",{attrs:{src:a(241),alt:""}})])]),t._v(" "),s("p",[t._v("모든 설정 주소에 대해 확인합니다."),s("br"),t._v(" "),s("img",{attrs:{src:a(242),alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);