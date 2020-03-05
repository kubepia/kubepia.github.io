module.exports = {
	base: "/",
	title: "Kubepia Documents",
	description: "Technical guidelines about kubernetes",
	dest: "./docs",
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
			{ text: "Devops", link: "/devops/" },
			{ text: "K8S", link: "/k8s/" },
			{ text: "Architecture", link: "/architecture/" }
		],
		sidebar: {
			"/devops/": [
				{
					title: "Devops", // required
					// path: "/devops/", // optional, which should be a absolute path.
					collapsable: false, // optional, defaults to true
					sidebarDepth: 1, // optional, defaults to 1
					children: [
						{
							title: "step01",
							path: "/devops/step01"
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
