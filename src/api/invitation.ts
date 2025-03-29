import { mockJoinInfo } from "./mockData";
import { JoinInfo } from "../types";

export const fetchJoinInfo = async (): Promise<JoinInfo> => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 500);
    const shouldFail = false;

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch invitation data."));
      } else {
        resolve(mockJoinInfo);
      }
    }, delay);
  });
};
