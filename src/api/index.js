import axios from "./request";

async function get(url, data, option = {}) {
  try {
    const { data: resData } = await axios.request(url, {
      method: "GET",
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
