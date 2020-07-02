(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{398:function(e,n,s){e.exports=s.p+"assets/img/2020-05-26-15-56-10.d0367d1f.png"},399:function(e,n,s){e.exports=s.p+"assets/img/2020-05-26-16-30-11.28c76a7f.png"},400:function(e,n,s){e.exports=s.p+"assets/img/2020-05-29-05-42-09.27d955fa.png"},448:function(e,n,s){"use strict";s.r(n);var a=s(17),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ocp-nfs-dynamic-provisioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ocp-nfs-dynamic-provisioning"}},[e._v("#")]),e._v(" OCP-NFS Dynamic provisioning")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TASK DESCRIPTION")]),e._v(" "),a("p",[e._v("PV Binding이 자동으로 되도록 NFS Dynamic provisioning 설정을 합니다."),a("br"),e._v("\nNFS dynamic provisioning을 하기 위한 nfs-provisioner Pod를 배포합니다."),a("br"),e._v(" "),a("a",{attrs:{href:"https://github.com/kubernetes-incubator/external-storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("github의 external-storage"),a("OutboundLink")],1),e._v("를 참조하십시오.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#git-설치"}},[e._v("git 설치")])]),a("li",[a("a",{attrs:{href:"#nfs-provisioner용-namespace-생성"}},[e._v("nfs provisioner용 namespace 생성")])]),a("li",[a("a",{attrs:{href:"#nfs-provisioner-다운로드"}},[e._v("nfs-provisioner 다운로드")])]),a("li",[a("a",{attrs:{href:"#service-account-생성-및-권한-설정"}},[e._v("Service Account 생성 및 권한 설정")])]),a("li",[a("a",{attrs:{href:"#storageclass-생성"}},[e._v("storageclass 생성")])]),a("li",[a("a",{attrs:{href:"#nfs-provisioner-pod-배포"}},[e._v("nfs-provisioner Pod 배포")])]),a("li",[a("a",{attrs:{href:"#테스트"}},[e._v("테스트")])])])]),a("p")]),e._v(" "),a("h2",{attrs:{id:"git-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-설치"}},[e._v("#")]),e._v(" git 설치")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum install -y git \n")])])]),a("h2",{attrs:{id:"nfs-provisioner용-namespace-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfs-provisioner용-namespace-생성"}},[e._v("#")]),e._v(" nfs provisioner용 namespace 생성")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc new-project nfs\n")])])]),a("p",[a("img",{attrs:{src:s(398),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"nfs-provisioner-다운로드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfs-provisioner-다운로드"}},[e._v("#")]),e._v(" nfs-provisioner 다운로드")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ mkdir -p /nfsprovider\n$ cd /nfsprovider\n$ git clone https://github.com/kubernetes-incubator/external-storage.git\n$ cd external-storage/nfs-client/\n")])])]),a("h2",{attrs:{id:"service-account-생성-및-권한-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-account-생성-및-권한-설정"}},[e._v("#")]),e._v(" Service Account 생성 및 권한 설정")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("현재 namespace를 nfs로 변경  \n$ oc project nfs  \n\nrbac.yaml내의 namespace를 모두 ‘nfs’로 변경하고 적용함    \n$ NAMESPACE=`oc project -q`\n$ sed -i'' \"s/namespace:.*/namespace: $NAMESPACE/g\" ./deploy/rbac.yaml  \n$ oc apply -f deploy/rbac.yaml\n\nservice account 'nfs-client-provisioner'에게 hostmount-anyuid SCC적용  \n$ oc adm policy add-scc-to-user hostmount-anyuid -z nfs-client-provisioner\n")])])]),a("p",[a("strong",[e._v("rbac.yaml")]),a("br"),e._v("\nService Account 'nfs-client-provisioner'을 만들고 필요한 role을 binding합니다.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: nfs-client-provisioner\n  # replace with namespace where provisioner is deployed\n  namespace: nfs\n---\nkind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: nfs-client-provisioner-runner\nrules:\n  - apiGroups: [""]\n    resources: ["persistentvolumes"]\n    verbs: ["get", "list", "watch", "create", "delete"]\n  - apiGroups: [""]\n    resources: ["persistentvolumeclaims"]\n    verbs: ["get", "list", "watch", "update"]\n  - apiGroups: ["storage.k8s.io"]\n    resources: ["storageclasses"]\n    verbs: ["get", "list", "watch"]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["create", "update", "patch"]\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: run-nfs-client-provisioner\nsubjects:\n  - kind: ServiceAccount\n    name: nfs-client-provisioner\n    # replace with namespace where provisioner is deployed\n    namespace: nfs\nroleRef:\n  kind: ClusterRole\n  name: nfs-client-provisioner-runner\n  apiGroup: rbac.authorization.k8s.io\n---\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: leader-locking-nfs-client-provisioner\n  # replace with namespace where provisioner is deployed\n  namespace: nfs\nrules:\n  - apiGroups: [""]\n    resources: ["endpoints"]\n    verbs: ["get", "list", "watch", "create", "update", "patch"]\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: leader-locking-nfs-client-provisioner\n  # replace with namespace where provisioner is deployed\n  namespace: nfs\nsubjects:\n  - kind: ServiceAccount\n    name: nfs-client-provisioner\n    # replace with namespace where provisioner is deployed\n    namespace: nfs\nroleRef:\n  kind: Role\n  name: leader-locking-nfs-client-provisioner\n  apiGroup: rbac.authorization.k8s.io\n')])])]),a("h2",{attrs:{id:"storageclass-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storageclass-생성"}},[e._v("#")]),e._v(" storageclass 생성")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://kubepia.github.io/cloudpak/cp4app/install/ocp03.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCP Local Image Registry 구성"),a("OutboundLink")],1),e._v("시 생성한 nfs-delete, nfs-retain외에 더 필요한 storage class가 있으면 생성합니다.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('storageclass YAML sample \n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  #annotations:\n    #storageclass.kubernetes.io/is-default-class: "true"\n  name: nfs-standard\nprovisioner: kubernetes.io/no-provisioner\nreclaimPolicy: Retain\nvolumeBindingMode: WaitForFirstConsumer\n')])])]),a("p",[e._v("​")]),e._v(" "),a("h2",{attrs:{id:"nfs-provisioner-pod-배포"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfs-provisioner-pod-배포"}},[e._v("#")]),e._v(" nfs-provisioner Pod 배포")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("NFS서버 및 디렉토리 수정, namespace를 ‘nfs’로 변경")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sed -i'' \"s/namespace:.*/namespace: $NAMESPACE/g\" ./deploy/deployment.yaml  \n")])])]),a("ul",[a("li",[a("strong",[e._v("deployment.yaml수정")]),a("br"),e._v("\n아래 항목을 적절하게 수정합니다.\n"),a("ul",[a("li",[e._v("env.PROVISIONER_NAME: storage class에 지정한 provisioner name과 동일하게 변경")]),e._v(" "),a("li",[e._v("env.NFS_SERVER, volumes.nfs.server: nfs server의 IP")]),e._v(" "),a("li",[e._v("env.NFS_PATH, volumes.nfs.path: nfs server에 미리 만든 자동으로 volume이 생성될 상위 디렉토리"),a("br"),e._v("\nnfs_path디렉토리 하위에 자동으로 PVC별 디렉토리가 생성됩니다.")])])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("중요")]),a("br"),e._v("\nStorageClass생성 시 Provioner를 'kubernetes.io/no-provisioner'로 주면,"),a("br"),e._v("\nDynamic provisoning이 안됩니다.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SAMPLE\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nfs-client-provisioner\n  labels:\n    app: nfs-client-provisioner\n  # replace with namespace where provisioner is deployed\n  namespace: nfs\nspec:\n  replicas: 1\n  strategy:\n    type: Recreate\n  selector:\n    matchLabels:\n      app: nfs-client-provisioner\n  template:\n    metadata:\n      labels:\n        app: nfs-client-provisioner\n    spec:\n      serviceAccountName: nfs-client-provisioner\n      containers:\n        - name: nfs-client-provisioner\n          image: quay.io/external_storage/nfs-client-provisioner:latest\n          volumeMounts:\n            - name: nfs-client-root\n              mountPath: /persistentvolumes\n          env:\n            - name: PROVISIONER_NAME\n              value: standard\n            - name: NFS_SERVER\n              value: 10.40.89.158\n            - name: NFS_PATH\n              value: /nfs/data\n      volumes:\n        - name: nfs-client-root\n          nfs:\n            server: 10.40.89.158\n            path: /nfs/data\n")])])]),a("ul",[a("li",[a("strong",[e._v("Pod 생성")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc apply -f ./deploy/deployment.yaml ​\n")])])]),a("h2",{attrs:{id:"테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테스트"}},[e._v("#")]),e._v(" 테스트")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("테스트용 PVC생성")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ vi test-claim.yaml\n\napiVersion: "v1"\nkind: "PersistentVolumeClaim"\nmetadata:\n  name: "test-claim"\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 1Gi\n  storageClassName: nfs-delete\n  volumeMode: Filesystem\n\n$ oc apply -f ./deploy/test-claim.yaml\n$ oc get pvc\n')])])]),a("p",[a("img",{attrs:{src:s(399),alt:""}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("테스트용 Pod생성")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ vi test-pod.yaml \n\nkind: Pod\napiVersion: v1\nmetadata:\n  name: test-pod\nspec:\n  containers:\n  - name: test-pod\n    image: gcr.io/google_containers/busybox:1.24\n    command:\n      - "/bin/sh"\n    args:\n      - "-c"\n      - "touch /mnt/SUCCESS && exit 0 || exit 1"\n    volumeMounts:\n      - name: nfs-pvc\n        mountPath: "/mnt"\n  restartPolicy: "Never"\n  volumes:\n    - name: nfs-pvc\n      persistentVolumeClaim:\n        claimName: test-claim\n\n\n$ oc apply -f test-pod.yaml\n')])])]),a("ul",[a("li",[a("strong",[e._v("mount 확인")]),e._v(" "),a("ul",[a("li",[e._v("nfs server의 nfs path로 이동")]),e._v(" "),a("li",[e._v("pvc명으로 자동 생성된 디렉토리 확인")]),e._v(" "),a("li",[e._v("디렉토리 하위에 SUCCESS파일 있는지 확인\n​    "),a("img",{attrs:{src:s(400),alt:""}})])])])]),e._v(" "),a("hr"),e._v(" "),a("disqus")],1)}),[],!1,null,null,null);n.default=t.exports}}]);