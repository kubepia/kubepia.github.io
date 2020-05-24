(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{228:function(t,s,a){t.exports=a.p+"assets/img/infra02-01.60c55d79.png"},292:function(t,s,a){"use strict";a.r(s);var e=a(17),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"infra-servers-web서버-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#infra-servers-web서버-설치"}},[t._v("#")]),t._v(" Infra Servers-Web서버 설치")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),e("p",[t._v("설치파일을 업로드/다운로드할 Web서버를 설치합니다.\n")]),e("div",{staticClass:"table-of-contents"},[e("ul")]),e("p")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("apache web server설치")]),e("br"),t._v("\nbastion VM에서 수행합니다.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ yum install -y httpd\n")])])]),e("p",[e("img",{attrs:{src:a(228),alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("시작프로그램으로 등록")]),e("br"),t._v("\nVM시작 시 자동으로 시작되도록 등록합니다.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ systemctl enable httpd\n")])])]),e("ul",[e("li",[e("p",[e("strong",[t._v("apache web server설정")]),e("br"),t._v("\n기본 설정을 그대로 사용해도 됩니다."),e("br"),t._v("\n설정을 바꾸시려면 /etc/httpd/conf/httpd.conf파일을 변경하십시오.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("apache web server 시작")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ systemctl start httpd\n")])])]),e("ul",[e("li",[e("strong",[t._v("html root디렉토리 테스트")]),e("br"),t._v("\nhtml root디렉토리는 /var/www/html입니다."),e("br"),t._v("\n이 디렉토리에 파일을 하나 만들고 제대로 접근되는지 테스트합니다.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ cd /var/www/html\n$ echo "hello httpd" > README.md\n$ curl http://172.168.0.190/README.md\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);