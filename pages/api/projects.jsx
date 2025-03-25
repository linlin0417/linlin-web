export default async (req, res) => {
	const data = [
		{
			id: 1,
			image: "https://avatars.githubusercontent.com/u/200042892?s=200&v=4",
			name: "程式碼分享",
			description: "",
			link: "https://github.com/Tdr-gaming-studio",
		},
		{
			id: 2,
			image: "https://avatars.githubusercontent.com/u/158514867?v=4",
			name: "社交帳號",
			description: "我是一名基礎程式開發者，這我的相關網站",
			link: "https://linktr.ee/LinlinSaya",
		},
		{
			id: 3,
			image: "https://github.com/Tdr-gaming-studio/gitaenobot/blob/v2/docs/img/GItaENObot.png?raw=true",
			name: "GitaENObot開源版(v2)",
			description: "一個開源的Discordbot - 可以簡單的提供基本服務",
			link: "https://github.com/Tdr-gaming-studio/gitaenobot/tree/v2",
		},
		{
			id: 4,
			image: "https://github.com/Tdr-gaming-studio/gitaenobot/blob/v2/docs/img/GItaENObot.png?raw=true",
			name: "GitaENObot開源版(v3)",
			description: "一個開源的Discordbot - 具有多項功能",
			link: "https://github.com/Tdr-gaming-studio/gitaenobot/tree/v3",
		},
		{
			id: 5,
			image: "https://github.com/Tdr-gaming-studio/gitaenobot/blob/v2/docs/img/GItaENObot.png?raw=true",
			name: "tdr簡易資訊計畫api",
			description: "可以用於快速獲得資訊的api",
			link: "https://botapiserver.vercel.app/",
		}
	];
	res.status(200).json(data);
};
