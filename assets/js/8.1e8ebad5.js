(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{533:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-16-42.46b727d5.png"},534:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-20-39.2410d006.png"},535:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-26-54.85c71579.png"},536:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-11-22.5bdcf8d0.png"},537:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-28-10.68f5dbe3.png"},538:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-33-34.01d8825a.png"},539:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-38-40.eab863e5.png"},540:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-46-55.c7ff85ed.png"},541:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-47-13.4edb84e9.png"},542:function(t,e,s){t.exports=s.p+"assets/img/2020-05-26-00-48-58.762bf86b.png"},607:function(t,e,s){"use strict";s.r(e);var a=s(25),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ocp-ocp-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ocp-ocp-설치"}},[t._v("#")]),t._v(" OCP-OCP 설치")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),a("p",[t._v("OCP를 설치합니다."),a("br"),t._v("\n※ "),a("strong",[t._v("중요: OCP설치 후 24시간이상 실행 필요")]),a("br"),t._v("\nOCP를 최초 설치할때는 내부 TLS통신을 위해 임시 key파일을 사용합니다."),a("br"),t._v("\n이 TLS Key파일은 설치 후 24시간내에 자동으로 갱신됩니다."),a("br"),t._v("\n따라서 24시간동안은 Master/Worker Node를 정지시키면 안됩니다."),a("br"),t._v("\n(참고: 잠깐 내렸다 올리는 건 괜찮습니다.)")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#bootstrap-master-node-vm-부팅"}},[t._v("bootstrap, Master node VM 부팅")])]),a("li",[a("a",{attrs:{href:"#설치완료-여부-확인"}},[t._v("설치완료 여부 확인")])]),a("li",[a("a",{attrs:{href:"#master-node-준비여부-확인"}},[t._v("Master node 준비여부 확인")])]),a("li",[a("a",{attrs:{href:"#worker-node-vm-부팅"}},[t._v("Worker Node VM 부팅")])]),a("li",[a("a",{attrs:{href:"#worker-node-승인"}},[t._v("Worker node 승인")])]),a("li",[a("a",{attrs:{href:"#최종-확인"}},[t._v("최종 확인")])])])]),a("p")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("설치 시 "),a("a",{attrs:{href:"https://happycloud-lee.tistory.com/119",target:"_blank",rel:"noopener noreferrer"}},[t._v("screen: 가상터미널을 이용한 백그라운드 명령 실행"),a("OutboundLink")],1),t._v("을 이용하여 보십시오."),a("br"),t._v("\n실수나 네트워크 단절로 Terminal이 끊어져도 안전하게 설치를 진행할 수 있습니다.")])]),t._v(" "),a("h2",{attrs:{id:"bootstrap-master-node-vm-부팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-master-node-vm-부팅"}},[t._v("#")]),t._v(" bootstrap, Master node VM 부팅")]),t._v(" "),a("p",[t._v("VM을 부팅시키면 ignition설정에 의해 설치가 자동으로 시작됩니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("bootstrap VM부터 먼저 시작합니다.")])])]),t._v(" "),a("p",[t._v("bootstrap의 로그를 보고 정상적으로 올라오면 Master VM들을 부팅합니다."),a("br"),t._v("\nbootstrap으로 접근하여 설치 로그를 봅니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RHCOS를 사용하는 VM들은 'core'라는 user로 로그인해야 합니다.  \n$ ssh core@<bootstrap IP>\n$ journalctl -b -f\n")])])]),a("p",[a("img",{attrs:{src:s(533),alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Master Node 실행")]),a("br"),t._v("\nbootstrap에 ip가 할당되면 ssh로 접근이 됩니다."),a("br"),t._v("\nssh로 bootstrap로그인이 되면 master node들을 시작합니다.")])]),t._v(" "),a("p",[t._v("bootstrap의 journalctl -b -f로 보면,"),a("br"),t._v("\n처음에는 에러 메시지가 매우 많이 나옵니다."),a("br"),t._v(" "),a("img",{attrs:{src:s(534),alt:""}})]),t._v(" "),a("p",[t._v("계속 기다리면 에러 메시지가 없어지고 설치가 되는것을 확인할 수 있습니다."),a("br"),t._v(" "),a("img",{attrs:{src:s(535),alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Troubleshooting")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("에러:'emergency.service: Failed to set up standard input: Inappropriate ioctl for device'")]),a("br"),t._v("\nignition 내용이 틀린 경우 발생합니다."),a("br"),t._v("\nbase64 내용 처음 또는 끝에 이상한 글자가 있는지 확인해 보십시오."),a("br"),t._v("\n만약 ignition data가 틀렸다면 VM을 지우고 다시 만들면서"),a("br"),t._v("\n정상적인 ignition data를 넣으셔야 합니다."),a("br"),t._v("\n최초 부팅 전 Snapshot이 있다면 그걸 복원하고,"),a("br"),t._v("\n맞는 ignition data를 넣으십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("에러: ssh core@[Node IP]로 인증이 안될 때")]),a("br"),t._v("\nweb console에 'Login:'까지 나오고 IP도 정상할당 되었는데"),a("br"),t._v("\nbastion에서 ssh core@[node ip]로 인증이 안되는 경우입니다."),a("br"),t._v("\ninstall-config.yaml에 지정한 sshKey값이 틀렸습니다."),a("br"),t._v("\nbastion의 ~/.ssh/id_rsa.pub의 내용과 install-config.yaml백업본의 내용을 비교하십시오."),a("br"),t._v("\n이 경우는 "),a("a",{attrs:{href:"https://kubepia.github.io/cloudpak/cp4app/install/ocp01.html#install-config-yaml-%EC%83%9D%EC%84%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("install-config.yaml파일 생성"),a("OutboundLink")],1),t._v("단계로 돌아가셔서 다시 시작하십시오.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("에러: quay.io에서 image pulling을 못할때")])]),t._v(" "),a("ul",[a("li",[t._v("bootstrap만 실행하고, master vm을 시작하지 않으면 발생합니다."),a("br"),t._v("\nMaster VM을 모두 시작하십시오.")]),t._v(" "),a("li",[t._v("ssh로 bootstrap을 로그인한 후 'journalctl -b -f'로 로그를 봤을 때"),a("br"),t._v("\nquay.io, cloud.openshift.com등을 못찾는 경우 원인은"),a("br"),t._v("\nbootstrap에서 외부 인터넷으로 통신이 안되는 경우입니다."),a("br"),t._v("\ncluster의 master/worker node는 gateway VM에 설치된 iptables를 통해 외부와 통신하게 됩니다."),a("br"),t._v("\n그런데 gateway가 연결이 안되기 때문에 외부와의 통신이 안되는 것입니다."),a("br"),t._v(" "),a("a",{attrs:{href:"https://kubepia.github.io/cloudpak/cp4app/install/infra03.html#private-ip-%EC%85%8B%ED%8C%85",target:"_blank",rel:"noopener noreferrer"}},[t._v("Infra VM Private IP설정"),a("OutboundLink")],1),t._v("을 참조하여 gateway VM의 ip를 수정하십시오."),a("br"),t._v("\n수정후에는 'systemctl restart network'을 반드시 수행하십시오.")]),t._v(" "),a("li",[t._v("위 문제 해결 후에도 image pulling이 안되는 경우"),a("br"),t._v("\ninstall-config.yaml에 지정한 pullSecret값이 권한이 없는 token값입니다."),a("br"),t._v("\ninfra VM에서 subscription-manager로 등록한 user의 pullSecret으로 변경하십시오."),a("br"),t._v("\n이 경우는 "),a("a",{attrs:{href:"https://kubepia.github.io/cloudpak/cp4app/install/ocp01.html#install-config-yaml-%EC%83%9D%EC%84%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("install-config.yaml파일 생성"),a("OutboundLink")],1),t._v("단계로 돌아가셔서 다시 시작하십시오.")])])])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Worker Node 실행")]),a("br"),t._v("\nWorker VM들은 Master node의 상태가 Ready가 된 후에 시작하십시오."),a("br"),t._v(" "),a("img",{attrs:{src:s(536),alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"설치완료-여부-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치완료-여부-확인"}},[t._v("#")]),t._v(" 설치완료 여부 확인")]),t._v(" "),a("p",[t._v("설치는 네트워크 상황에 따라 약 20~30여분정도 소요됩니다."),a("br"),t._v("\n설치완료 여부는 아래 명령으로 확인할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ openshift-install --dir=<installation_directory> wait-for bootstrap-complete --log-level=info\n")])])]),a("p",[a("img",{attrs:{src:s(537),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"master-node-준비여부-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-node-준비여부-확인"}},[t._v("#")]),t._v(" Master node 준비여부 확인")]),t._v(" "),a("p",[t._v("kubeconfig파일을 [HOME]/.kube/config로 복사한 후 node의 상태를 확인합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ mkdir ~/.kube\n$ cp <intallation_directory>/auth/kubeconfig ~/.kube/config\n$ oc get nodes\n")])])]),a("p",[a("img",{attrs:{src:s(538),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(539),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"worker-node-vm-부팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker-node-vm-부팅"}},[t._v("#")]),t._v(" Worker Node VM 부팅")]),t._v(" "),a("p",[t._v("Worker node VM들을 부팅합니다.")]),t._v(" "),a("h2",{attrs:{id:"worker-node-승인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker-node-승인"}},[t._v("#")]),t._v(" Worker node 승인")]),t._v(" "),a("p",[t._v("Worker node들을 cluster에 join시키기 위해서는 CSR(Certificate Signing Requests)을 승인해야 합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Worker node들의 상태가 'Not Ready'로 보임   \n$ oc get nodes\n\nCSR승인대기 중인 node 리스트 보기  \n$ oc get csr\n![](./img/2020-05-29-03-50-25.png)\n\nCSR승인\n$ oc adm certificate approve <csr_name> \n\n모든 CSR승인\n$ oc get csr -o go-template='{{range .items}}{{if not .status}}{{.metadata.name}}{{\"\\n\"}}{{end}}{{end}}' | xargs oc adm certificate approve\n")])])]),a("p",[a("img",{attrs:{src:s(540),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(541),alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("'watch oc get co'명령을 실행하고, Cluster Operator들의 Available이"),a("br"),t._v("\n모두 True가 될때까지 가끔 'oc get csr'명령을 실행하여 대기중인 CSR리스트를 확인합니다."),a("br"),t._v("\n대기중인 CSR이 있으면 모든 CSR승인 명령으로 승인합니다.")]),t._v(" "),a("li",[t._v("ssh로 master, worker도 암호 없이 들어갈 수 있도록 설정합니다."),a("br"),t._v("\nbastion서버의 ~/.ssh/config파일에 node정보를 추가합니다.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("예시)\n\nHost gateway\n    HostName 172.168.0.187\n    User root\n    IdentityFile ~/.ssh/id_rsa\nHost network\n    HostName 172.168.0.189\n    User root\n    IdentityFile ~/.ssh/id_rsa\nHost storage\n    HostName 172.168.0.188\n    User root\n    IdentityFile ~/.ssh/id_rsa\nHost bootstrap\n    HostName 172.168.0.180\n    User core\n    IdentityFile ~/.ssh/id_rsa\nHost master-0\n    HostName 172.168.0.186\n    User core\n    IdentityFile ~/.ssh/id_rsa\nHost master-1\n    HostName 172.168.0.185\n    User core\n    IdentityFile ~/.ssh/id_rsa\nHost master-2\n    HostName 172.168.0.184\n    User core\n    IdentityFile ~/.ssh/id_rsa\nHost worker-1\n    HostName 172.168.0.183\n    User core\n    IdentityFile ~/.ssh/id_rsa\nHost worker-2\n    HostName 172.168.0.182\n    User core\n    IdentityFile ~/.ssh/id_rsa\n")])])]),a("p",[t._v("※ ABOUT ~/.ssh/known_hosts파일"),a("br"),t._v("\nssh로 VM로그인이 성공하면 이 파일에 대상 VM정보가 등록됩니다."),a("br"),t._v("\n만약 어떤 VM을 재작성하거나 sshkey를 다시 만들었다면 이 파일을 먼저 지우시고,"),a("br"),t._v("\n접근하셔야 정상적으로 인증이 됩니다.")])]),t._v(" "),a("h2",{attrs:{id:"최종-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#최종-확인"}},[t._v("#")]),t._v(" 최종 확인")]),t._v(" "),a("p",[t._v("node들의 상태를 확인합니다."),a("br"),t._v(" "),a("img",{attrs:{src:s(542),alt:""}})]),t._v(" "),a("p",[t._v("아래 리스트가 OCP의 Cluster Component들입니다."),a("br"),t._v("\n이 기본 Component들은 Cluster Operator로 설치됩니다."),a("br"),t._v("\n모든 Component의 Avaiable상태가 True가 될때까지 기다립니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ watch -n5 oc get clusteroperators\n※ clusteroperators는 약어인 co를 사용해도 됩니다.  \n\nNAME                                 VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE\nauthentication                       4.3.0     True        False         False      69s\ncloud-credential                     4.3.0     True        False         False      12m\ncluster-autoscaler                   4.3.0     True        False         False      11m\nconsole                              4.3.0     True        False         False      46s\ndns                                  4.3.0     True        False         False      11m\nimage-registry                       4.3.0     True        False         False      5m26s\ningress                              4.3.0     True        False         False      5m36s\nkube-apiserver                       4.3.0     True        False         False      8m53s\nkube-controller-manager              4.3.0     True        False         False      7m24s\nkube-scheduler                       4.3.0     True        False         False      12m\nmachine-api                          4.3.0     True        False         False      12m\nmachine-config                       4.3.0     True        False         False      7m36s\nmarketplace                          4.3.0     True        False         False      7m54m\nmonitoring                           4.3.0     True        False         False      7h54s\nnetwork                              4.3.0     True        False         False      5m9s\nnode-tuning                          4.3.0     True        False         False      11m\nopenshift-apiserver                  4.3.0     True        False         False      11m\nopenshift-controller-manager         4.3.0     True        False         False      5m943s\nopenshift-samples                    4.3.0     True        False         False      3m55s\noperator-lifecycle-manager           4.3.0     True        False         False      11m\noperator-lifecycle-manager-catalog   4.3.0     True        False         False      11m\nservice-ca                           4.3.0     True        False         False      11m\nservice-catalog-apiserver            4.3.0     True        False         False      5m26s\nservice-catalog-controller-manager   4.3.0     True        False         False      5m25s\nstorage                              4.3.0     True        False         False      5m30s\n")])])]),a("p",[t._v("OCP Web console로 로그인합니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("항목")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("설명")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("예")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("주소")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("https://console-openshift-console.apps.[cluster name].[base domain]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("https://console-openshift-console.apps.hcp.kubepia.com")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("username")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("kubeadmin")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bastion VM의 [install directory]/config/auth/kubeadmin-password파일 참조")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("생략")])])])]),t._v(" "),a("hr"),t._v(" "),a("disqus")],1)}),[],!1,null,null,null);e.default=r.exports}}]);