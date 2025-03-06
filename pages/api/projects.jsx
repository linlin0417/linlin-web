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
    }
  ];
  res.status(200).json(data);
};
