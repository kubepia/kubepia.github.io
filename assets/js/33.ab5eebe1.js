(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{386:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ocp-idp-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ocp-idp-추가"}},[s._v("#")]),s._v(" OCP-IdP 추가")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TASK DESCRIPTION")]),s._v(" "),a("p",[s._v("계정제공자(IdP-Identity Provider)를 추가합니다"),a("br"),s._v("\n본 매뉴얼에서는 htpasswd와 keycloak을 설명합니다.")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#htpasswd-추가"}},[s._v("htpasswd 추가")])]),a("li",[a("a",{attrs:{href:"#keycloak-추가"}},[s._v("keycloak 추가")])])])]),a("p")]),s._v(" "),a("h2",{attrs:{id:"htpasswd-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htpasswd-추가"}},[s._v("#")]),s._v(" htpasswd 추가")]),s._v(" "),a("p",[s._v("htpasswd는 OCP자체적으로 계정을 추가할 수 있는 방법입니다.")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("계정 등록 파일 생성")])])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ yum install -y httpd-tools  \n$ which htpasswd  \n$ htpasswd -c -B -b <파일명> <user_name> <password>  \n계정 추가시에는 -c옵션 주면 안됨   \n예) \n[root@bastion idp]# htpasswd -c -B -b users.htpasswd hklee passw0rd \\\nAdding password for user hklee \\\n[root@bastion idp]# htpasswd -B -b users.htpasswd sihan passw0rd \\\nAdding password for user sihan \\\n[root@bastion idp]# htpasswd -B -b users.htpasswd shlee passw0rd \\\nAdding password for user shlee \\\n[root@bastion idp]# cat users.htpasswd \\\nhklee:$2y$05$1ZSl07frbmRvwY2Uxuz.Cu38bTh.UMR8wAD1/i5YTOuym0yhX8F4S \\\nsihan:$2y$05$VF9BcY4pSPTy7uParHwZt.Qaf5agVto5EduZXmuPGwFxOyqdNRPqu \\\nshlee:$2y$05$Lx9qrVCFnC1weCMkOkj/jOA6kOkM49CjhnQrOOVFHmyrwhHz0b2Ta \\\n")])])]),a("ul",[a("li",[a("p",[a("strong",[s._v("IdP추가")])]),s._v(" "),a("ul",[a("li",[s._v("OCP webconsole로그인: 최초에는 kubeadmin으로 로그인")]),s._v(" "),a("li",[s._v("Administration->Cluster-Settings클릭")]),s._v(" "),a("li",[s._v("Global configuration탭 클릭하고 oAuth 클릭")]),s._v(" "),a("li",[s._v("IdP추가: htpasswd 선택하고 위에서 생성한 파일 지정")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("rolebinding")]),a("br"),s._v("\n추가한 user에게 권한을 binding 합니다.")]),s._v(" "),a("ul",[a("li",[s._v("OCP web console > user management > Role bindings")]),s._v(" "),a("li",[s._v("create role binding")])])])]),s._v(" "),a("h2",{attrs:{id:"keycloak-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keycloak-추가"}},[s._v("#")]),s._v(" keycloak 추가")]),s._v(" "),a("p",[s._v("TODO")]),s._v(" "),a("hr"),s._v(" "),a("disqus")],1)}),[],!1,null,null,null);t.default=r.exports}}]);