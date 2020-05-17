let BASEDIR_CP4APP_INSTALL="/cloudpak/cp4app/install";

module.exports = {
	base: "/",
	title: "Kubepia Documents",
	description: "Technical guidelines about kubernetes",
	// dest: "./docs",
	plugins: ["@vuepress/back-to-top"],
	markdown: {},
	head: [
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/assets/favicons/apple-touch-icon.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/assets/favicons/favicon-32x32.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/assets/favicons/favicon-16x16.png"
			}
		],
		[
			"link",
			{
				rel: "manifest",
				href: "/assets/favicons/site.webmanifest"
			}
		]
	],
	themeConfig: {
		logo: "/assets/img/kubepia.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "DevOps", link: "/devops/overview" },
			{ text: "K8S", link: "/k8s/" },
			{ text: "OCP4.X", link: "/ocp/overview" },
			{ text: "CloudPak", link: "/cloudpak/overview" },
			{ text: "Architecture", link: "/architecture/" },
			{ text: "About US", link: "/aboutus/iamnogada" }
		],
		sidebar: {
			"/devops/": [
				{
					title: "Devops",
					// path: "/devops/", // optional, which should be a absolute path.
					// collapsable: false, // optional, defaults to true
					sidebarDepth: 1, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/devops/overview"
						},
						{
							title: "CICD",
							path: "/devops/cicd"
						},
						{
							title: "Deploy Strategy",
							path: "/devops/strategy"
						}
					]
				}
			],
			"/ocp/": [
				{
					title: "Openshift4.x",
					// path: "/devops/", // optional, which should be a absolute path.
					// collapsable: false, // optional, defaults to true
					sidebarDepth: 1, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/ocp/overview"
						},
						{
							title: "Install-UPI",
							path: "/ocp/install-upi"
						}
					]
				}
			],	

			"/cloudpak/": [
				{
					title: "CloudPak",
					sidebarDepth: 3, // optional, defaults to 1
					path: "/cloudpak/overview",
					children: [
						{
							title: "CP4App",
							path: "/cloudpak/cp4app/overview",
							children: [
								{
									title: "Install",
									path: BASEDIR_CP4APP_INSTALL+"/install",
									children: [
										{
											title: "Infra Node-VM 생성",
											path: BASEDIR_CP4APP_INSTALL+"/infra01"
										},
										{
											title: "Infra Node-Web서버 설치",
											path: BASEDIR_CP4APP_INSTALL+"/infra02"
										},
										{
											title: "Infra Node-VM Network 설정",
											path: BASEDIR_CP4APP_INSTALL+"/infra03"
										},
										{
											title: "Infra Node-DNS서버 설치",
											path: BASEDIR_CP4APP_INSTALL+"/infra04"
										},
										{
											title: "Infra Node-HAProxy서버 설치",
											path: BASEDIR_CP4APP_INSTALL+"/infra05"
										},										
										{
											title: "Infra Node-DHCP서버 설치",
											path: BASEDIR_CP4APP_INSTALL+"/infra06"
										},
										{
											title: "Infra Node-NFS서버 설치",
											path: BASEDIR_CP4APP_INSTALL+"/infra07"
										},
										{
											title: "Infra Node-SSLKey 구성",
											path: BASEDIR_CP4APP_INSTALL+"/infra08"
										},
										{
											title: "Infra Node-IPTables 설치",
											path: BASEDIR_CP4APP_INSTALL+"/infra09"
										}
									]
								}
							]
						},
						{
							title: "CP4MM",
							path: "/cloudpak/cp4mm/overview"
						}
					]
				}
			],
			"/aboutus/": [
				{
					title: "About US",
					// path: "/devops/", // optional, which should be a absolute path.
					collapsable: false, // optional, defaults to true
					sidebarDepth: 1, // optional, defaults to 1
					children: [
						{
							title: "iamnogada",
							path: "/aboutus/iamnogada"
						},
						{
							title: "이해경(Lee HaeKyung)",
							path: "/aboutus/hiondal"
						},
						{
							title: "jwyoon-darum",
							path: "/aboutus/jwyoon"
						},
						{
							title: "kiseokahn",
							path: "/aboutus/kiseokahn"
						},
						{
							title: "kkphil83",
							path: "/aboutus/iamnogada"
						},
						{
							title: "SunnySunKim",
							path: "/aboutus/iamnogada"
						},
						{
							title: "yoohwasuk",
							path: "/aboutus/iamnogada"
						}
					]
				}
			]
		}
		// sidebar: [
		// 	{
		// 		title: "Devops", // required
		// 		path: "/devops/", // optional, which should be a absolute path.
		// 		collapsable: true, // optional, defaults to true
		// 		sidebarDepth: 1, // optional, defaults to 1
		// 		children: ["/a", "/b"]
		// 	},
		// 	{
		// 		title: "K8S", // required
		// 		path: "/k8s/", // optional, which should be a absolute path.
		// 		collapsable: true, // optional, defaults to true
		// 		sidebarDepth: 1, // optional, defaults to 1
		// 		children: ["/a", "/b"]
		// 	}
		// ]
	}
};
