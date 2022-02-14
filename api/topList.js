export default function handler(request, response) {
  const { name } = request.query;
  const data = [
    {
      id: "001",
      name: "肯德基",
      money: "323234",
    },
    {
      id: "002",
      name: "麦当劳",
      money: "123415",
    },
    {
      id: "003",
      name: "海底捞",
      money: "123464",
    },
    {
      id: "004",
      name: "吖哺吖哺",
      money: "124675",
    },
    {
      id: "005",
      name: "汉堡王",
      money: "134374",
    },
    {
      id: "006",
      name: "大盘鸡",
      money: "125677",
    },
    {
      id: "007",
      name: "火锅",
      money: "135241",
    },
  ];
  response.status(200).send(data);
}
