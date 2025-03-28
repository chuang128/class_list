import { mockJoinInfo } from "./mockData";
import { JoinInfo } from "../types";

export const fetchJoinInfo = async (): Promise<JoinInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockJoinInfo), 300);
  });
};
