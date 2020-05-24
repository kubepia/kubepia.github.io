(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{251:function(t,s,a){t.exports=a.p+"assets/img/infra07-01.4bfca2ac.png"},252:function(t,s,a){t.exports=a.p+"assets/img/infra07-02.64cf4793.png"},253:function(t,s,a){t.exports=a.p+"assets/img/infra07-05.ce46f8c0.png"},254:function(t,s,a){t.exports=a.p+"assets/img/infra07-06.170bf965.png"},255:function(t,s,a){t.exports=a.p+"assets/img/infra07-08.4f30bb33.png"},256:function(t,s,a){t.exports=a.p+"assets/img/infra07-09.3cd0473d.png"},257:function(t,s,a){t.exports=a.p+"assets/img/infra07-10.5fed2b44.png"},258:function(t,s,a){t.exports=a.p+"assets/img/infra07-11.60e035aa.png"},318:function(t,s,a){"use strict";a.r(s);var r=a(17),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"infra-servers-nfs서버-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-nfs서버-설치"}},[t._v("#")]),t._v(" Infra Servers-NFS서버 설치")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),r("p",[t._v("Storage VM에 NFS서버를 설치합니다."),r("br"),t._v("\nNFS서버는 File storage유형의 PV(Permanant Volume)를 제공합니다."),r("br")]),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#nfs서버-설치"}},[t._v("NFS서버 설치")])]),r("li",[r("a",{attrs:{href:"#nfs서버-설정"}},[t._v("NFS서버 설정")])]),r("li",[r("a",{attrs:{href:"#nfs서버-시작"}},[t._v("NFS서버 시작")])]),r("li",[r("a",{attrs:{href:"#volume-mount-테스트"}},[t._v("volume mount 테스트")])])])]),r("p")]),t._v(" "),r("h2",{attrs:{id:"nfs서버-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nfs서버-설치"}},[t._v("#")]),t._v(" NFS서버 설치")]),t._v(" "),r("p",[t._v("Terminal 또는 ssh명령으로 Storage VM을 접근합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ yum install -y nfs-utils\n")])])]),r("p",[r("img",{attrs:{src:a(251),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"nfs서버-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nfs서버-설정"}},[t._v("#")]),t._v(" NFS서버 설정")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("volume directory를 생성합니다.")]),r("br"),t._v("\nstorage가 어디에 mount되었는지 확인한 후 그 디렉토리에 생성합니다."),r("br"),t._v(" "),r("img",{attrs:{src:a(252),alt:""}}),t._v("\n아래는 생성예제입니다."),r("br"),t._v("\ndata디렉토리는 사용자 서비스용이고, imgreg는 local image registry용입니다.")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ mkdir -p /nfs/data\n$ mkdir -p /nfs/imgreg\n$ chmod -R 777 /nfs\n")])])]),r("p",[r("img",{attrs:{src:a(253),alt:""}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("/etc/exports파일에 volume directory를 추가합니다.")]),r("br"),t._v(" "),r("img",{attrs:{src:a(254),alt:""}})])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("참고")]),r("br"),t._v("\n각 디렉토리의 옵션은 아래와 같습니다."),r("br"),t._v("\n- ro : 읽기 전용"),r("br"),t._v("\n- rw : 읽기 및 쓰기 가능\\"),r("br"),t._v("\n- no_root_squash : 클라이언트쪽 root도 서버쪽 root와 같은권한 가짐\\"),r("br"),t._v("\n- no_all_squash : root이외 모든사용자에대해 UID가 같으면 같은 권한을가짐\\"),r("br"),t._v("\n- sync : 서버와 클라이언트사이에 sync를 맞춤\\"),r("br"),t._v("\n- insecure : 인증안되도 접속허가\\"),r("br"),t._v("\n- fsid: file storage id")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("**중요**")]),t._v(" "),r("p",[t._v("fsid를 동일한 번호로 지정하면 먼저 지정된 디렉토리에 무조건 PV가 생성됩니다."),r("br"),t._v("\nfsid를 다른 번호로 지정하거나 아예 fsid를 지정하지 마십시오.")])]),t._v(" "),r("h2",{attrs:{id:"nfs서버-시작"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nfs서버-시작"}},[t._v("#")]),t._v(" NFS서버 시작")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("NFS서버를 부팅시 자동 시작하도록 등록\n$ systemctl enable nfs-server\n\nNFS서버 시작\n$ systemctl start nfs-server\n\n상태확인\n$ systemctl status nfs-server\n")])])]),r("h2",{attrs:{id:"volume-mount-테스트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#volume-mount-테스트"}},[t._v("#")]),t._v(" volume mount 테스트")]),t._v(" "),r("p",[t._v("다른 VM에서 volume mount가 제대로 되는지 테스트합니다.")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("nfs-utils 설치")])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ yum install -y nfs-utils\n")])])]),r("ul",[r("li",[r("strong",[t._v("volume directory 조회")])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ showmount -e <NFS서버 IP>\n")])])]),r("p",[r("img",{attrs:{src:a(255),alt:""}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("mount test")])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ mkdir <temp directory>\n$ mount -t nfs -o sync <NFS서버 IP>:<Volume Directory> <temp directory>\n$ df -h \n")])])]),r("p",[r("img",{attrs:{src:a(256),alt:""}})]),t._v(" "),r("p",[t._v("제대로 되었으면 unmount하고 임시 디렉토리는 삭제합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ umount <temp directory>\n$ rm -rf <temp directory>\n")])])]),r("p",[r("img",{attrs:{src:a(257),alt:""}}),t._v(" "),r("img",{attrs:{src:a(258),alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);