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
			{ text: "Architecture", link: "/architecture/" },
			{ text: "About US", link: "/aboutus/" }
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
							title: "hiondal",
							path: "/aboutus/hiondal"
						},
						{
							title: "jwyoon-darum",
							path: "/aboutus/jwyoon-darum"
						},
						{
							title: "kiseokahn",
							path: "/aboutus/kiseokahn"
						},
						{
							title: "kkphil83",
							path: "/aboutus/kkphil83"
						},
						{
							title: "SunnySunKim",
							path: "/aboutus/SunnySunKim"
						},
						{
							title: "yoohwasuk",
							path: "/aboutus/yoohwasuk"
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
