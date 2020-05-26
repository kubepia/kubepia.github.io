(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{315:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-11-22.5bdcf8d0.png"},316:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-16-42.46b727d5.png"},317:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-19-40.84fc12f3.png"},318:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-20-39.2410d006.png"},319:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-26-54.85c71579.png"},320:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-28-10.68f5dbe3.png"},321:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-33-34.01d8825a.png"},322:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-38-40.eab863e5.png"},323:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-46-55.c7ff85ed.png"},324:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-47-13.4edb84e9.png"},325:function(e,t,a){e.exports=a.p+"assets/img/2020-05-26-00-48-58.762bf86b.png"},379:function(e,t,a){"use strict";a.r(t);var s=a(17),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ocp-ocp-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ocp-ocp-설치"}},[e._v("#")]),e._v(" OCP-OCP 설치")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TASK DESCRIPTION")]),e._v(" "),s("p",[e._v("OCP를 설치합니다."),s("br"),e._v("\n※ "),s("strong",[e._v("중요: OCP설치 후 24시간이상 실행 필요")]),s("br"),e._v("\nOCP를 최초 설치할때는 내부 TLS통신을 위해 임시 key파일을 사용합니다."),s("br"),e._v("\n이 TLS Key파일은 설치 후 24시간내에 자동으로 갱신됩니다."),s("br"),e._v("\n따라서 24시간동안은 Master/Worker Node를 정지시키면 안됩니다."),s("br"),e._v("\n(참고: 잠깐 내렸다 올리는 건 괜찮습니다.)")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#bootstrap-master-node-vm-부팅"}},[e._v("bootstrap, Master node VM 부팅")])]),s("li",[s("a",{attrs:{href:"#bootstrap-console-log-보기"}},[e._v("bootstrap console log 보기")])]),s("li",[s("a",{attrs:{href:"#설치완료-여부-확인"}},[e._v("설치완료 여부 확인")])]),s("li",[s("a",{attrs:{href:"#master-node-준비여부-확인"}},[e._v("Master node 준비여부 확인")])]),s("li",[s("a",{attrs:{href:"#worker-node-vm-부팅"}},[e._v("Worker Node VM 부팅")])]),s("li",[s("a",{attrs:{href:"#worker-node-승인"}},[e._v("Worker node 승인")])]),s("li",[s("a",{attrs:{href:"#최종-확인"}},[e._v("최종 확인")])])])]),s("p")]),e._v(" "),s("h2",{attrs:{id:"bootstrap-master-node-vm-부팅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-master-node-vm-부팅"}},[e._v("#")]),e._v(" bootstrap, Master node VM 부팅")]),e._v(" "),s("p",[e._v("VM을 부팅시키면 ignition설정에 의해 설치가 자동으로 시작됩니다."),s("br"),e._v("\nbootstrap VM부터 먼저 시작합니다."),s("br"),e._v("\n조금 이따가 Master VM들을 부팅합니다."),s("br"),e._v("\nWorker VM들도 같이 부팅해도 되나, 실패할수도 있으므로 Master node가 정상적으로 설치된 후에 시작하십시오."),s("br"),e._v(" "),s("img",{attrs:{src:a(315),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"bootstrap-console-log-보기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-console-log-보기"}},[e._v("#")]),e._v(" bootstrap console log 보기")]),e._v(" "),s("p",[e._v("bootstrap으로 접근하여 설치 로그를 봅니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("RHCOS를 사용하는 VM들은 'core'라는 user로 로그인해야 합니다.  \n$ ssh core@<bootstrap IP>\n$ journalctl -b -f -u bootkube.service\n")])])]),s("p",[s("img",{attrs:{src:a(316),alt:""}})]),e._v(" "),s("p",[e._v("로그인 후 안내 메시지에 나오는 journalctl명령을 실행합니다."),s("br"),e._v(" "),s("img",{attrs:{src:a(317),alt:""}})]),e._v(" "),s("p",[e._v("처음에는 에러 메시지가 매우 많이 나옵니다."),s("br"),e._v(" "),s("img",{attrs:{src:a(318),alt:""}})]),e._v(" "),s("p",[e._v("계속 기다리면 에러 메시지가 없어지고 설치가 되는것을 확인할 수 있습니다."),s("br"),e._v(" "),s("img",{attrs:{src:a(319),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"설치완료-여부-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치완료-여부-확인"}},[e._v("#")]),e._v(" 설치완료 여부 확인")]),e._v(" "),s("p",[e._v("설치는 약 15~20여분정도 소요됩니다."),s("br"),e._v("\n설치완료 여부는 아래 명령으로 확인할 수 있습니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ openshift-install --dir=<installation_directory> wait-for bootstrap-complete --log-level=info\n")])])]),s("p",[s("img",{attrs:{src:a(320),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"master-node-준비여부-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#master-node-준비여부-확인"}},[e._v("#")]),e._v(" Master node 준비여부 확인")]),e._v(" "),s("p",[e._v("kubeconfig파일을 [HOME]/.kube/config로 복사한 후 node의 상태를 확인합니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ mkdir ~/.kube\n$ cp <intallation_directory>/auth/kubeconfig ~/.kube/config\n$ oc get nodes\n")])])]),s("p",[s("img",{attrs:{src:a(321),alt:""}})]),e._v(" "),s("p",[s("img",{attrs:{src:a(322),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"worker-node-vm-부팅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-node-vm-부팅"}},[e._v("#")]),e._v(" Worker Node VM 부팅")]),e._v(" "),s("p",[e._v("Worker node VM들을 부팅합니다.")]),e._v(" "),s("h2",{attrs:{id:"worker-node-승인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-node-승인"}},[e._v("#")]),e._v(" Worker node 승인")]),e._v(" "),s("p",[e._v("install-config.yaml에 worker node수를 지정하면 최초 설치시에는 자동으로 worker node가 추가됩니다."),s("br"),e._v("\n추가된 Worker node들을 cluster에 join시키기 위해서는 CSR(Certificate Signing Requests)를 승인해야 합니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Worker node들의 상태가 'Not Ready'로 보임   \n$ oc get nodes\n\nCSR승인대기 중인 node 리스트 보기  \n$ oc get csr\n\nCSR승인\n$ oc adm certificate approve <csr_name> \n\n모든 CSR승인\n$ oc get csr -o go-template='{{range .items}}{{if not .status}}{{.metadata.name}}{{\"\\n\"}}{{end}}{{end}}' | xargs oc adm certificate approve\n")])])]),s("p",[s("img",{attrs:{src:a(323),alt:""}})]),e._v(" "),s("p",[s("img",{attrs:{src:a(324),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"최종-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#최종-확인"}},[e._v("#")]),e._v(" 최종 확인")]),e._v(" "),s("p",[e._v("node들의 상태를 확인합니다."),s("br"),e._v(" "),s("img",{attrs:{src:a(325),alt:""}})]),e._v(" "),s("p",[e._v("아래 리스트가 OCP의 Cluster Component들입니다."),s("br"),e._v("\n이 기본 Component들은 Cluster Operator로 설치됩니다."),s("br"),e._v("\n모든 Component의 Avaiable상태가 True가 될때까지 기다립니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ watch -n5 oc get clusteroperators\n※ clusteroperators는 약어인 co를 사용해도 됩니다.  \n\nNAME                                 VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE\nauthentication                       4.3.0     True        False         False      69s\ncloud-credential                     4.3.0     True        False         False      12m\ncluster-autoscaler                   4.3.0     True        False         False      11m\nconsole                              4.3.0     True        False         False      46s\ndns                                  4.3.0     True        False         False      11m\nimage-registry                       4.3.0     True        False         False      5m26s\ningress                              4.3.0     True        False         False      5m36s\nkube-apiserver                       4.3.0     True        False         False      8m53s\nkube-controller-manager              4.3.0     True        False         False      7m24s\nkube-scheduler                       4.3.0     True        False         False      12m\nmachine-api                          4.3.0     True        False         False      12m\nmachine-config                       4.3.0     True        False         False      7m36s\nmarketplace                          4.3.0     True        False         False      7m54m\nmonitoring                           4.3.0     True        False         False      7h54s\nnetwork                              4.3.0     True        False         False      5m9s\nnode-tuning                          4.3.0     True        False         False      11m\nopenshift-apiserver                  4.3.0     True        False         False      11m\nopenshift-controller-manager         4.3.0     True        False         False      5m943s\nopenshift-samples                    4.3.0     True        False         False      3m55s\noperator-lifecycle-manager           4.3.0     True        False         False      11m\noperator-lifecycle-manager-catalog   4.3.0     True        False         False      11m\nservice-ca                           4.3.0     True        False         False      11m\nservice-catalog-apiserver            4.3.0     True        False         False      5m26s\nservice-catalog-controller-manager   4.3.0     True        False         False      5m25s\nstorage                              4.3.0     True        False         False      5m30s\n")])])]),s("p",[e._v("OCP Web console로 로그인합니다.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("항목")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("설명")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("예")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("주소")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("https://console-openshift-console.apps.[cluster name].[base domain]")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("https://console-openshift-console.apps.hcp.kubepia.com")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("username")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("kubeadmin")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("-")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("password")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("bastion VM의 [install directory]/config/auth/kubeadmin-password파일 참조")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("생략")])])])]),e._v(" "),s("hr"),e._v(" "),s("disqus")],1)}),[],!1,null,null,null);t.default=r.exports}}]);