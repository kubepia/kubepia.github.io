(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{228:function(t,a,e){t.exports=e.p+"assets/img/infra02-01.60c55d79.png"},268:function(t,a,e){"use strict";e.r(a);var s=e(17),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"infra-node-web서버-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#infra-node-web서버-설치"}},[t._v("#")]),t._v(" Infra Node-Web서버 설치")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("apache web server설치")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ yum install -y httpd\n")])])]),s("p",[s("img",{attrs:{src:e(228),alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("시작프로그램으로 등록")]),s("br"),t._v("\nVM시작 시 자동으로 시작되도록 등록합니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ systemctl enable httpd\n")])])]),s("ul",[s("li",[s("p",[s("strong",[t._v("apache web server설정")]),s("br"),t._v("\n기본 설정을 그대로 사용해도 됩니다."),s("br"),t._v("\n설정을 바꾸시려면 /etc/httpd/conf/httpd.conf파일을 변경하십시오.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("apache web server 시작")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ systemctl start httpd\n")])])]),s("ul",[s("li",[s("strong",[t._v("html root디렉토리 테스트")]),s("br"),t._v("\nhtml root디렉토리는 /var/www/html입니다."),s("br"),t._v("\n이 디렉토리에 파일을 하나 만들고 제대로 접근되는지 테스트합니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ cd /var/www/html\n$ echo "hello httpd" > README.md\n$ curl http://172.168.0.190/README.md\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);