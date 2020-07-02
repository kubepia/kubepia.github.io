(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{579:function(t,a,s){t.exports=s.p+"assets/img/2020-04-01-16-21-53.b2ec7ad2.png"},580:function(t,a,s){t.exports=s.p+"assets/img/2020-04-01-16-25-01.4fce3264.png"},581:function(t,a,s){t.exports=s.p+"assets/img/2020-04-01-16-25-44.19e6c4ce.png"},582:function(t,a,s){t.exports=s.p+"assets/img/2020-04-01-16-26-48.2d02f18d.png"},583:function(t,a,s){t.exports=s.p+"assets/img/2020-04-01-16-28-29.4d9530fb.png"},584:function(t,a,s){t.exports=s.p+"assets/img/2020-04-01-16-29-21.69bb09ff.png"},585:function(t,a,s){t.exports=s.p+"assets/img/2020-04-01-16-31-22.919b19ab.png"},623:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"install-upi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-upi"}},[t._v("#")]),t._v(" Install-UPI")]),t._v(" "),e("h2",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),e("ul",[e("li",[t._v("Get subscription (login 필요) from "),e("a",{attrs:{href:"https://cloud.redhat.com/openshift/install/vsphere/user-provisioned",target:"_blank",rel:"noopener noreferrer"}},[t._v("redhat"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Get quay.io pull secret from "),e("a",{attrs:{href:"https://cloud.redhat.com/openshift/install/vsphere/user-provisioned",target:"_blank",rel:"noopener noreferrer"}},[t._v("redhat"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("ssh key 생성 : ssh-keygen -t rsa -b 4096 -N '' -C [kubepia]")]),t._v(" "),e("li",[t._v("download : openshift-installer, RHCOS")]),t._v(" "),e("li",[t._v("동일한 Subnet으로 필요한 VM 구성 후 필요 소프트웨어 설치/설정 : DNS, Web, HAProxy, DHCP")])]),t._v(" "),e("h2",{attrs:{id:"setup-web-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-web-server"}},[t._v("#")]),t._v(" Setup Web server")]),t._v(" "),e("blockquote",[e("p",[t._v("Use bastion server\nInstall httpd or nginx")])]),t._v(" "),e("h2",{attrs:{id:"manifest-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manifest-생성"}},[t._v("#")]),t._v(" manifest 생성")]),t._v(" "),e("h3",{attrs:{id:"create-file-install-config-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-file-install-config-yaml"}},[t._v("#")]),t._v(" create file : install-config.yaml")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseDomain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" darumtech.net\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("compute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hyperthreading")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Enabled\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" worker\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controlPlane")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hyperthreading")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Enabled\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hcp\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("platform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vsphere")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.0.70\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" administrator@vsphere.local\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("password for vshpere"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datacenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of data center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultDatastore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name of data store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fips")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),e("h3",{attrs:{id:"ignition-file-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ignition-file-생성"}},[t._v("#")]),t._v(" ignition file 생성")]),t._v(" "),e("ul",[e("li",[t._v("backup install-config.yaml")]),t._v(" "),e("li",[t._v("mkdir install path : /install/config"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openshift-install create ignition-configs --dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/install/config\n")])])])]),t._v(" "),e("li",[t._v("generated : auth  bootstrap.ign  install-config.yaml.org  master.ign  metadata.json  worker.ign")]),t._v(" "),e("li",[t._v("create append for bootstrap : append-boostrap.ign"),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignition"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"append"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://[webserver url]/install/bootstrap.ign"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"verification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeouts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.1.0"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"networkd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"passwd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"systemd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("copy to web server(/[webroot]/install) : append-bootstrap.ign  bootstrap.ign  master.ign  worker.ign")]),t._v(" "),e("li",[t._v("encode for vmware configuration : append-bootstrap.64, master.64, worker.64"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("i")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" append-bootstrap master worker\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n base64 -w0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(".ign "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(".64\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"vm-생성-vshpere"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vm-생성-vshpere"}},[t._v("#")]),t._v(" vm 생성(vshpere)")]),t._v(" "),e("h3",{attrs:{id:"template-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#template-생성"}},[t._v("#")]),t._v(" Template 생성")]),t._v(" "),e("blockquote",[e("p",[t._v("Use Thin Provision\nUse downloaded RHCOS*.ova")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(579),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"bootsrap-vm-from-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bootsrap-vm-from-template"}},[t._v("#")]),t._v(" Bootsrap VM from Template")]),t._v(" "),e("ol",[e("li",[t._v("폴더 선택\n"),e("img",{attrs:{src:s(580),alt:""}})]),t._v(" "),e("li",[t._v("Resource 설정\n"),e("img",{attrs:{src:s(581),alt:""}}),t._v(" "),e("img",{attrs:{src:s(582),alt:""}})]),t._v(" "),e("li",[t._v("HW 설정 : DHCP 에서 설정된 MAC 주소를 지정해야함\n"),e("img",{attrs:{src:s(583),alt:""}})]),t._v(" "),e("li",[t._v("VM Option\n"),e("img",{attrs:{src:s(584),alt:""}}),t._v(" "),e("ol",[e("li",[t._v("Parameter 추가 : guestinfo.ignition.config\n"),e("ul",[e("li",[t._v("bootstrap: append-bootstrap.64 파일 내용")]),t._v(" "),e("li",[t._v("master : master.64 파일내용")]),t._v(" "),e("li",[t._v("worker : worker.64 파일내용")])])]),t._v(" "),e("li",[t._v("Parameter 추가 : guestinfo.ignition.config.data.encoding\n"),e("blockquote",[e("p",[t._v("base64")])])]),t._v(" "),e("li",[t._v("Parameter 추가 : disk.EnableUUID\n"),e("blockquote",[e("p",[t._v("TRUE\n"),e("img",{attrs:{src:s(585),alt:""}})])])])])]),t._v(" "),e("li",[t._v("master 3대, worker 반복")])]),t._v(" "),e("h3",{attrs:{id:"cluster-생성-확인-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-생성-확인-방법"}},[t._v("#")]),t._v(" Cluster 생성 확인 방법")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openshift-install --dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/install/config wait-for bootstrap-complete --log-level"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debug\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);