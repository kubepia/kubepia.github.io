(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{392:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-11-47-21.c8fe03d7.png"},393:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-11-53-44.14bac14e.png"},394:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-12-02-19.fb2b52b8.png"},395:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-14-28-18.070cfccd.png"},396:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-15-43-32.54a1feb2.png"},397:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-15-42-13.363e68a3.png"},398:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-15-47-24.a61f6bcc.png"},399:function(e,a,s){e.exports=s.p+"assets/img/2020-05-26-15-50-09.0162c841.png"},447:function(e,a,s){"use strict";s.r(a);var t=s(17),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ocp-local-image-registry-구성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ocp-local-image-registry-구성"}},[e._v("#")]),e._v(" OCP-Local Image Registry 구성")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TASK DESCRIPTION")]),e._v(" "),t("p",[e._v("OCP는 각 Cluster마다 Local Image Registry가 필요합니다."),t("br"),e._v("\nLocal Image Registry구성이 안되면 OCP자체의 CI/CD를 사용할수가 없습니다.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#기본-image-registry-pod-삭제"}},[e._v("기본 image registry Pod 삭제")])]),t("li",[t("a",{attrs:{href:"#storageclass-생성"}},[e._v("StorageClass 생성")])]),t("li",[t("a",{attrs:{href:"#pv-pvc-생성"}},[e._v("PV/PVC 생성")])]),t("li",[t("a",{attrs:{href:"#image-registry-pod생성"}},[e._v("image registry POD생성")])])])]),t("p")]),e._v(" "),t("h2",{attrs:{id:"기본-image-registry-pod-삭제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본-image-registry-pod-삭제"}},[e._v("#")]),e._v(" 기본 image registry Pod 삭제")]),e._v(" "),t("p",[e._v("Local image registry는 image-registry라는 cluster operator로 설치됩니다."),t("br"),e._v(" "),t("img",{attrs:{src:s(392),alt:""}})]),e._v(" "),t("p",[e._v("최초 설치 시 Image registry Pod는 내부 임시 volume을 이용하여 실행되어 있습니다."),t("br"),e._v("\n그러나 이 Pod는 사용할수가 없기 때문에 삭제하고 재구성하여야 합니다.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("실행중인 Pod가 있는지 확인합니다.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get pod -n openshift-image-registry\n")])])]),t("p",[t("img",{attrs:{src:s(393),alt:""}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("image-registry operator의 설정을 편집하여 Pod를 삭제합니다.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc edit configs.imageregistry.operator.openshift.io\n")])])]),t("p",[e._v("managementState값을 Managed로 바꾸고 저장합니다."),t("br"),e._v("\n그리고, 다시 들어와서 Removed로 바꾸고 저장합니다."),t("br"),e._v("\nRemoved로 바꾸면 Pod가 삭제되는대 기본값이 Removed이기 때문에 값을 한번 변경하여 삭제하는것입니다."),t("br"),e._v(" "),t("img",{attrs:{src:s(394),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"storageclass-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storageclass-생성"}},[e._v("#")]),e._v(" StorageClass 생성")]),e._v(" "),t("p",[e._v("vmware의 기본 Storageclass인 thin의 accessMode는 ReadWriteOnce만 지원합니다."),t("br"),e._v(" "),t("img",{attrs:{src:s(395),alt:""}})]),e._v(" "),t("p",[e._v("local image registry용 PV는 ReadWriteMany가 필요하기 때문에"),t("br"),e._v("\n이를 지원하는 storageclass를 만들어야 합니다."),t("br"),e._v("\nreclaimPolicy가 Delete인 storageclass와 Retain인 storageclass를 만듭니다.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("reclaimPolicy: Delete")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ vi sc-nfs-delete.yaml\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\n  name: nfs-delete\nprovisioner: kubernetes.io/no-provisioner\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n\n$ oc apply -f sc-nfs-delete.yaml\n')])])]),t("ul",[t("li",[t("strong",[e._v("reclaimPolicy: Delete")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ vi sc-nfs-retain.yaml\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  #annotations:\n    #storageclass.kubernetes.io/is-default-class: "true"\n  name: nfs-retain\nprovisioner: kubernetes.io/no-provisioner\nreclaimPolicy: Retain\nvolumeBindingMode: WaitForFirstConsumer\n\n$ oc apply -f sc-nfs-retain.yaml\n')])])]),t("h2",{attrs:{id:"pv-pvc-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pv-pvc-생성"}},[e._v("#")]),e._v(" PV/PVC 생성")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("중요")]),e._v(" "),t("p",[t("strong",[e._v("no_wdelay")]),t("br"),e._v("\nOCP Local Image Registry용 PV디렉토리는 이 옵션을 지정해야"),t("br"),e._v("\n복수개의 Image Registry Pod를 배포할 수 있습니다."),t("br"),e._v("\nStorage VM에서 exports파일 내용 확인하고 no_wdelay옵션이 없으면 추가하십시오.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cat /etc/exports\n/nfs/imgreg *(rw,sync,no_wdelay,no_root_squash,insecure,fsid=0)\n$ exportfs -rv\nexporting *:/mnt/data\n")])])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("PV생성")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ vi image-registry-pv.yaml \n\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: image-registry-pv\nspec:\n  accessModes:\n    ReadWriteMany\n    capacity:\n      storage: 100Gi\n  nfs:\n    path: <nfs volume directory>\n    server: <nfs server ip>\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: nfs-retain\n\n$ oc apply -f image-registry-pv.yaml -n openshift-image-registry\n")])])]),t("ul",[t("li",[t("strong",[e._v("PVC생성")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ vi image-registry-pvc.yaml\n\napiVersion: "v1"\nkind: "PersistentVolumeClaim"\nmetadata:\n  name: "image-registry-pvc"\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 100Gi\n  storageClassName: nfs-retain\n  volumeMode: Filesystem\n\n$ oc apply -f image-registry-pvc.yaml -n openshift-image-registry\n$ oc get pvc -n openshift-image-registry\n')])])]),t("h2",{attrs:{id:"image-registry-pod생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-registry-pod생성"}},[e._v("#")]),e._v(" image registry POD생성")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("imageregistry config 변경")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("storage.pvc이름 셋팅  \n$ oc edit configs.imageregistry.operator.openshift.io -o yaml  \n...  \nstorage:  \n  pvc:  \n    claim: image-registry-pvc  \n...  \n\n\nmanagementState를 Managed로 변경  \n")])])]),t("p",[t("img",{attrs:{src:s(396),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:s(397),alt:""}})]),e._v(" "),t("p",[e._v("image-registry cluster-operator의 상태를 확인합니다.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ watch oc get co image-registry\n")])])]),t("p",[t("img",{attrs:{src:s(398),alt:""}})]),e._v(" "),t("p",[e._v("Available이 True로 변경될때까지 기다립니다."),t("br"),e._v(" "),t("img",{attrs:{src:s(399),alt:""}})]),e._v(" "),t("p",[e._v("Pod가 정상적으로 실행되는지 확인합니다.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get po -n openshift-image-registry\n")])])]),t("hr"),e._v(" "),t("disqus")],1)}),[],!1,null,null,null);a.default=r.exports}}]);