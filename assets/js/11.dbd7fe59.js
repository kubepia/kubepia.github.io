(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{326:function(s,t,a){s.exports=a.p+"assets/img/2020-05-24-23-44-11.956f84ad.png"},327:function(s,t,a){s.exports=a.p+"assets/img/2020-05-24-23-50-21.2230470e.png"},328:function(s,t,a){s.exports=a.p+"assets/img/2020-05-25-00-05-23.6581365f.png"},329:function(s,t,a){s.exports=a.p+"assets/img/2020-05-25-00-08-13.ac77116a.png"},330:function(s,t,a){s.exports=a.p+"assets/img/2020-05-25-00-13-26.0984f635.png"},331:function(s,t,a){s.exports=a.p+"assets/img/2020-05-25-00-20-55.fd49f4d2.png"},332:function(s,t,a){s.exports=a.p+"assets/img/2020-05-25-00-25-34.41bab557.png"},443:function(s,t,a){"use strict";a.r(t);var r=a(17),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"infra-servers-sslkey-구성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-sslkey-구성"}},[s._v("#")]),s._v(" Infra Servers-SSLKey 구성")]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("TASK DESCRIPTION")]),s._v(" "),r("p",[s._v("SSL Key를 생성합니다."),r("br"),s._v("\n각 VM을 ssh로 쉽게 접근하게 하기 위해 SSL public key를 각 VM에 복사합니다.")]),s._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#ssl-key-생성"}},[s._v("SSL Key 생성")])]),r("li",[r("a",{attrs:{href:"#public-ssl-key-복사"}},[s._v("Public SSL Key 복사")])]),r("li",[r("a",{attrs:{href:"#config파일-생성"}},[s._v("Config파일 생성")])]),r("li",[r("a",{attrs:{href:"#테스트"}},[s._v("테스트")])])])]),r("p")]),s._v(" "),r("h2",{attrs:{id:"ssl-key-생성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-key-생성"}},[s._v("#")]),s._v(" SSL Key 생성")]),s._v(" "),r("p",[s._v("Terminal 또는 ssh명령으로 bastion VM을 접근합니다."),r("br"),s._v("\nTest용 SSL Key를 생성합니다.")]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("$ ssh-keygen -b 4096 -t rsa\n")])])]),r("p",[r("img",{attrs:{src:a(326),alt:""}})]),s._v(" "),r("p",[s._v("현재 user의 HOME디렉토리 하위에 '.ssh'라는 디렉토리가 생깁니다."),r("br"),s._v("\n그 디렉토리에 private key파일인 id_rsa와 public key파일인 id_rsa.pub가 생성됩니다.")]),s._v(" "),r("p",[r("img",{attrs:{src:a(327),alt:""}})]),s._v(" "),r("h2",{attrs:{id:"public-ssl-key-복사"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#public-ssl-key-복사"}},[s._v("#")]),s._v(" Public SSL Key 복사")]),s._v(" "),r("p",[s._v("ssh로 접근할 각 VM에 public ssl key파일을 복사합니다.")]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("$ ssh-copy-id -i ~/.ssh/id_rsa.pub root@<대상 VM IP>\n")])])]),r("p",[r("img",{attrs:{src:a(328),alt:""}})]),s._v(" "),r("blockquote",[r("p",[r("strong",[s._v("참고")]),s._v(" "),r("br"),s._v("\n대상 VM node에는 .ssh/authorized_keys라는 파일로 복사됩니다."),r("br"),s._v(" "),r("img",{attrs:{src:a(329),alt:""}})])]),s._v(" "),r("blockquote",[r("p",[s._v("TIP"),r("br"),s._v("\n다른 Terminal에서 현재 작업중인 bastion VM도 암호 없이 접근하려면"),r("br"),s._v("\n위 public key파일 복사를 bastion VM도 해야 합니다.")])]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("$ ssh-copy-id -i ~/.ssh/id_rsa.pub root@172.168.0.190\n$ ls -al \n합계 20\ndrwx------. 2 root root   94  5월 28 16:23 .\ndr-xr-x---. 6 root root  210  5월 28 16:10 ..\n-rw-------. 1 root root  738  5월 28 16:23 authorized_keys\n-rw-r--r--. 1 root root  255  5월 28 16:12 config\n-rw-------. 1 root root 3243  5월 28 16:10 id_rsa\n-rw-r--r--. 1 root root  738  5월 28 16:10 id_rsa.pub\n-rw-r--r--. 1 root root  700  5월 28 16:23 known_hosts\n\n위와 같이 'authorized_keys'파일이 생겨야 다른 Terminal에서  \n암호없이 이 VM을 접근할 수 있습니다.   \n")])])]),r("h2",{attrs:{id:"config파일-생성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#config파일-생성"}},[s._v("#")]),s._v(" Config파일 생성")]),s._v(" "),r("p",[s._v("각 VM의 정보를 담고 있는 Config파일을 생성합니다.")]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("Host <VM alias>\n    HostName <VM IP>\n    Port <SSH PORT>\n    User <User ID>\n    IdentityFile <Private SSL Key파일 경로>\n")])])]),r("p",[s._v("예제)")]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("Host gateway\n    HostName 172.168.0.187\n    User root\n    IdentityFile ~/.ssh/id_rsa\nHost network\n    HostName 172.168.0.189\n    User root\n    IdentityFile ~/.ssh/id_rsa\nHost storage\n    HostName 172.168.0.188\n    User root\n    IdentityFile ~/.ssh/id_rsa\n")])])]),r("p",[r("img",{attrs:{src:a(330),alt:""}})]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("Local Mac에서 Config설정")]),s._v(" "),r("p",[s._v("Mac에서 bastion서버를 쉽게 접근하기 위해"),r("br"),s._v("\n아래 예와같이 Local Mac의 ~/.ssh/config파일을 생성합니다."),r("br"),s._v("\n미리 private key파일은(~/.ssh/keys/seromi_rsa)다운로드 해야 합니다.")]),s._v(" "),r("p",[s._v("예제)")]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("$ mkdir -p ~/.ssh/keys\n$ cd ~/.ssh/keys \n$ scp -P 19022 root@61.78.152.243:~/.ssh/id_rsa .\n$ cd ~/.ssh\n$ vi config \n\nHost seromi\n    HostName 61.78.152.243\n    Port 19022\n    User root\n    IdentityFile ~/.ssh/keys/seromi_rsa\n\n")])])])]),s._v(" "),r("h2",{attrs:{id:"테스트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#테스트"}},[s._v("#")]),s._v(" 테스트")]),s._v(" "),r("ul",[r("li",[r("p",[r("strong",[s._v("bastion VM에서 테스트")]),s._v("\nssh나 scp명령 사용 시 이제는 암호를 묻지 않고 바로 접근이 됩니다."),r("br"),s._v(" "),r("img",{attrs:{src:a(331),alt:""}})])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("Mac에서 테스트")]),s._v("\nMac에 config파일을 만들었다면, 아래와 같이 ssh로 bastion서버 접근이 되는지 테스트 합니다."),r("br"),s._v(" "),r("img",{attrs:{src:a(332),alt:""}})])])]),s._v(" "),r("hr"),s._v(" "),r("disqus")],1)}),[],!1,null,null,null);t.default=e.exports}}]);