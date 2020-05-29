(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{407:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-11-56-03.6661daf5.png"},408:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-12-01-51.f39b8a03.png"},409:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-12-02-15.b4d9e9ec.png"},410:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-12-02-49.f80de4ff.png"},411:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-12-03-04.648b3293.png"},412:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-12-03-19.37b6f7b8.png"},413:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-12-05-23.cf155b87.png"},414:function(t,a,e){t.exports=e.p+"assets/img/2020-03-06-12-11-17.0f0a0a28.png"},457:function(t,a,e){"use strict";e.r(a);var s=e(17),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"deploy-strategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-strategy"}},[t._v("#")]),t._v(" Deploy Strategy")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("Configuration : Ingress <-> Service <-> Deployment  상호 연관 관계")]),t._v(" "),s("li",[t._v("[Key]:[Value]  형태로 자유롭게 선언하여, 자원 선택시 Filter로 사용됨")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(407),alt:""}})]),t._v(" "),s("hr"),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#recreate"}},[t._v("Recreate")])]),s("li",[s("a",{attrs:{href:"#ramped"}},[t._v("Ramped")])]),s("li",[s("a",{attrs:{href:"#blue-green"}},[t._v("Blue/Green")])]),s("li",[s("a",{attrs:{href:"#canary"}},[t._v("Canary")])]),s("li",[s("a",{attrs:{href:"#request-mapping"}},[t._v("Request Mapping")])]),s("li",[s("a",{attrs:{href:"#summary"}},[t._v("Summary")])])])]),s("p"),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"recreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recreate"}},[t._v("#")]),t._v(" Recreate")]),t._v(" "),s("blockquote",[s("p",[t._v("Application을 중단하고, 새로운 Application을 배포함.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Easy to setup")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("High impact on the user's request. downtime exists")])])])]),t._v(" "),s("p",[t._v("Example of yaml(manifest.yaml)")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Recreate\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Example of command")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kubectl apply -f ./manifest.yaml\n")])])]),s("h2",{attrs:{id:"ramped"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ramped"}},[t._v("#")]),t._v(" Ramped")]),t._v(" "),s("blockquote",[s("p",[t._v("(aka) : incremental, rolling update\n신규버전의 Application Instance 점진적으로 배포하고, 기존 배포된 버전의 Instance 수를 줄여 가는 배포 방식\nKubernetes의 History관리를 통해  Rollback 쉽게 처리 할 수 있음")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Easy to setup")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Take time for rollout/rollback")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("No downtime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No control over traffic")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Keep handling ongoing rebalancing of data")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("p",[t._v("Example of yaml(manifest.yaml)")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RollingUpdate\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rollngUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSurge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2       ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# how many instances(pod) to add at a time")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxUnavailable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0 ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unavailable number of instances(pod) ")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# can be unavailable during the rolling update")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Example of command")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kubectl apply -f ./manifest.yaml\n")])])]),s("p",[t._v("Traffice\n"),s("img",{attrs:{src:e(408),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"blue-green"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blue-green"}},[t._v("#")]),t._v(" Blue/Green")]),t._v(" "),s("blockquote",[s("p",[t._v("(aka) : red/black\n신규버전의 Application Instance 배포하고, 기존 Instance에 연결되는 Routing 정보를 신규 Instance로 변경."),s("br"),t._v("\n서비스 변경이 완려되면 기존 Instane는 삭제처리함.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Instant update")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Expensive, need double the resources")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Good for frontend")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Should proper test of the entire platform before releasing")])])])]),t._v(" "),s("p",[t._v("Example of yaml(manifest-v2.yaml)")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Match both the app and the version")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When switch traffic, update the label version with v2.0.0 for version 1.0.0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1.0.0\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Example of command")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('kubectl apply -f ./manifest-v2.yaml\nkubectl patch service my-app -p \\\n   \'{"spec": {"selector": {"version": "v2.0.0"}}}\'\nkubectl delete -f manifest-v1.yaml\n')])])]),s("p",[t._v("Traffic\n"),s("img",{attrs:{src:e(409),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"canary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canary"}},[t._v("#")]),t._v(" Canary")]),t._v(" "),s("blockquote",[s("p",[t._v("Ramped 배포 방식과 유사하나, Instance 일부를 선배포하고, 검증 이후에\n잔여 instance 모두를 배포하는 방식\n선배포 검증에 실패할 경우 기존 Instance로 Rollback 처리함.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Verison released for a subset of users")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Slow")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Convenient for error rate and performance")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Sticky sesisons might be required")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Fast rollback")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("need traffic control required like "),s("em",[t._v("istio")]),t._v(" or "),s("em",[t._v("linkerd")])])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e(410),alt:""}})])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e(411),alt:""}})])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e(412),alt:""}})])])])]),t._v(" "),s("p",[t._v("Traffic\n"),s("img",{attrs:{src:e(413),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"request-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-mapping"}},[t._v("#")]),t._v(" Request Mapping")]),t._v(" "),s("blockquote",[s("p",[t._v("Canary 배포와 같이 여러종류의 version을 배포하고, 요청되는 http의 header 정보를 활용하여 version을 선책해서 처리하는 방식."),s("br"),t._v("\nA/B Test와 같이 Production 환경에서 실사용자 대상으로 기능 또는 마케팅을 검증하고 선별적인 서비스를 제공하기 위한 배포 기술임.\\")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("조건")]),t._v(" "),s("p",[t._v("A/B Test를 위해서는 service controll을 위한 service mesh(istio, kong etc) 기능을 추가로 설치해야함")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(414),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("ul",[s("li",[t._v("recreate if downtime is not a problem")]),t._v(" "),s("li",[t._v("recreate and ramped doesn’t require any extra step (kubectl apply is enough)")]),t._v(" "),s("li",[t._v("ramped and blue/green deployment are usually a good fit and easy to use")]),t._v(" "),s("li",[t._v("blue/green is a good fit for front-end that load versioned assets from the same server")]),t._v(" "),s("li",[t._v("blue/green and shadow can be expensive")]),t._v(" "),s("li",[t._v("canary and a/b testing should be used if little confidence on the quality of the release")]),t._v(" "),s("li",[t._v("canary, a/b testing and shadow might require additional cluster component")])]),t._v(" "),s("hr"),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#recreate"}},[t._v("Recreate")])]),s("li",[s("a",{attrs:{href:"#ramped"}},[t._v("Ramped")])]),s("li",[s("a",{attrs:{href:"#blue-green"}},[t._v("Blue/Green")])]),s("li",[s("a",{attrs:{href:"#canary"}},[t._v("Canary")])]),s("li",[s("a",{attrs:{href:"#request-mapping"}},[t._v("Request Mapping")])]),s("li",[s("a",{attrs:{href:"#summary"}},[t._v("Summary")])])])]),t._v(" "),s("disqus"),s("p")],1)}),[],!1,null,null,null);a.default=n.exports}}]);