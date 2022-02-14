const data = {
  total: 10,
  list: [
    {
      id: "001",
      order: 1,
      kw: "北京",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "002",
      order: 2,
      kw: "上海",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "003",
      order: 3,
      kw: "广东",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "004",
      order: 4,
      kw: "深圳",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "005",
      order: 5,
      kw: "杭州",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "006",
      order: 6,
      kw: "广州",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "007",
      order: 7,
      kw: "重庆",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "008",
      order: 8,
      kw: "香港",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "009",
      order: 9,
      kw: "澳门",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
    {
      id: "010",
      order: 10,
      kw: "台湾",
      totalSearch: 8741,
      userSearch: 123,
      click: "98.00%",
    },
  ],
};

export default function handler(request, response) {
  const { currentPage, pageSize } = request.query || {};

  const computedList = data.list.slice(
    (currentPage - 1) * pageSize,
    pageSize * currentPage
  );

  response.status(200).send({ total: data.total, list: computedList });
}
