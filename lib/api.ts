import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export const sendInterest = async (data: any) => {
  return api.post("/interest", data);
};
