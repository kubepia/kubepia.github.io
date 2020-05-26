(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{389:function(t,a,e){"use strict";e.r(a);var l=e(17),s=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"markdown-sample"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sample"}},[t._v("#")]),t._v(" Markdown sample")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK DESCRIPTION")]),t._v(" "),e("p",[t._v("Markdown에 대한 예제입니다."),e("br")]),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#block-메시지1"}},[t._v("Block 메시지1")])]),e("li",[e("a",{attrs:{href:"#block-메시지2"}},[t._v("Block 메시지2")])]),e("li",[e("a",{attrs:{href:"#url-link"}},[t._v("URL link")])]),e("li",[e("a",{attrs:{href:"#이미지"}},[t._v("이미지")])]),e("li",[e("a",{attrs:{href:"#source-code"}},[t._v("Source code")])]),e("li",[e("a",{attrs:{href:"#table"}},[t._v("Table")])])])]),e("p")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"block-메시지1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-메시지1"}},[t._v("#")]),t._v(" Block 메시지1")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("CloudPak이란?")]),t._v(" "),e("p",[e("strong",[t._v("CloudPak")]),t._v("은 IBM의 Total cloud platform 제품군입니다.\n아래와 같이 구성되어 있습니다.")]),t._v(" "),e("ul",[e("li",[t._v("CloudPak for Application")]),t._v(" "),e("li",[t._v("CloudPak for Multicloud Management")]),t._v(" "),e("li",[t._v("CloudPak for Integration")]),t._v(" "),e("li",[t._v("CloudPak for Data")]),t._v(" "),e("li",[t._v("CloudPak for Automation")]),t._v(" "),e("li",[t._v("CloudPak for Security")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## Block 메시지1\n::: tip CloudPak이란?\n**CloudPak**은 IBM의 Total cloud platform 제품군입니다.\n아래와 같이 구성되어 있습니다.\n- CloudPak for Application\n- CloudPak for Multicloud Management\n- CloudPak for Integration\n- CloudPak for Data\n- CloudPak for Automation\n- CloudPak for Security\n")])])]),e("h2",{attrs:{id:"block-메시지2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-메시지2"}},[t._v("#")]),t._v(" Block 메시지2")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("저작자 소개")]),e("br"),t._v("\n- 성별: 남 "),e("br"),t._v("\n- 이름: "),e("em",[t._v("이해경")]),t._v(" "),e("br"),t._v("\n- 나이: "),e("em",[t._v("50")]),t._v(" "),e("br"),t._v("\n- 특기: "),e("em",[t._v("놀고먹기")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## Block 메시지2\n> **저작자 소개**\\\n    - 성별: 남 \\\n    - 이름: _이해경_ \\\n    - 나이: _50_ \\\n    - 특기: _놀고먹기_\n")])])]),e("h2",{attrs:{id:"url-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-link"}},[t._v("#")]),t._v(" URL link")]),t._v(" "),e("p",[t._v("참고: "),e("a",{attrs:{href:"http://www.daum.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("다음"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## URL link \n참고: [다음](http://www.daum.net)\n")])])]),e("h2",{attrs:{id:"이미지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이미지"}},[t._v("#")]),t._v(" 이미지")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://localhost:8080/assets/img/kubepia.png",alt:"kubepia"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## 이미지 \n![kubepia](http://localhost:8080/assets/img/kubepia.png)\n")])])]),e("h2",{attrs:{id:"source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[t._v("#")]),t._v(" Source code")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('language: node_js\nnode_js:\n  - "12"\ninstall:\n  - npm install\nscript:\n  - npm run build\n\ndeploy:\n  provider: pages\n  skip_cleanup: true\n  github_token: $GIT_TOKEN\n  local_dir: docs/.vuepress/dist\n  target-branch: master\n  on:\n    branch: dev\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('※ 사용 시 [```]에서 대괄호는 제거해야 함\n## Source code\n[```] \nlanguage: node_js\nnode_js:\n  - "12"\ninstall:\n  - npm install\nscript:\n  - npm run build\n\ndeploy:\n  provider: pages\n  skip_cleanup: true\n  github_token: $GIT_TOKEN\n  local_dir: docs/.vuepress/dist\n  target-branch: master\n  on:\n    branch: dev\n[```]\n')])])]),e("h2",{attrs:{id:"table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Task")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Infra node 구성")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("bastion, network, storage, gateway VM을 생성하고, Web, DNS, DHCP, NFS, haproxy, IPTables서버를 설치함")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("OCP 설치")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("OCP master / worker node를 설치함")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CP4App 설치")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Common Service와 CP4App을 설치함")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("| No | Task | Description |\n|:---|:--------------------------|:-----------------------------------|\n| 1 | Infra node 구성 | bastion, network, storage, gateway VM을 생성하고, Web, DNS, DHCP, NFS, haproxy, IPTables서버를 설치함 |\n| 2 | OCP 설치 | OCP master / worker node를 설치함 |\n| 3 | CP4App 설치 | Common Service와 CP4App을 설치함 |\n")])])]),e("hr"),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#block-메시지1"}},[t._v("Block 메시지1")])]),e("li",[e("a",{attrs:{href:"#block-메시지2"}},[t._v("Block 메시지2")])]),e("li",[e("a",{attrs:{href:"#url-link"}},[t._v("URL link")])]),e("li",[e("a",{attrs:{href:"#이미지"}},[t._v("이미지")])]),e("li",[e("a",{attrs:{href:"#source-code"}},[t._v("Source code")])]),e("li",[e("a",{attrs:{href:"#table"}},[t._v("Table")])])])]),e("p"),t._v(" "),e("hr"),t._v(" "),e("disqus")],1)}),[],!1,null,null,null);a.default=s.exports}}]);