import axios from "./request";

async function get(url, data, option = {}) {
  try {
    const { data: resData } = await axios.request(url, {
      method: "GET",
      params: { ...data },
      // axios get 请求参数为：params: { data: {...} }，post 请求参数为：data: {...} 统一为 post 格式
      ...option,
    });
    return {
      data: resData,
      state: true,
    };
  } catch (e) {
    return {
      data: e,
      state: false,
    };
  }
}

async function post(url, data, option = {}) {
  try {
    const { data: resData } = await axios.request(url, {
      method: "POST",
      data,
      ...option,
    });

    return {
      data: resData,
      state: true,
    };
  } catch (e) {
    return {
      data: e,
      state: false,
    };
  }
}

export async function getSalesTopList() {
  return await get("/api/topList");
}

export async function getKWTableData({ currentPage, pageSize }) {
  const res = await get("/api/kwTable", { currentPage, pageSize });
  if (process.env.VUE_APP_ENV === "dev") {
    const {
      state,
      data: { total, list },
    } = res;
    const computedList = list.slice(
      (currentPage - 1) * pageSize,
      pageSize * currentPage
    );
    return {
      state,
      data: {
        total,
        list: computedList,
      },
    };
  }
  return res;
}

export async function getPieChartData() {
  return await get("/api/pieData");
}
