const data = [
  {
    legendname: "粉面粥店",
    value: 67,
    percent: "15.40%",
  },
  {
    legendname: "简餐",
    value: 97,
    percent: "23.40%",
  },
  {
    legendname: "水饺",
    value: 92,
    percent: "21.40%",
  },
];

export default function handler(request, response) {
  const { name } = request.query;
  response.status(200).send(data);
}
