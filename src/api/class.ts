import { mockClassRoom } from "./mockData";
import { Class } from "../types";

export const fetchClass = async (): Promise<Class> => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1001);
    const shouldFail = false; // toggle to test error api call

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch classroom data."));
      } else {
        resolve(mockClassRoom);
      }
    }, delay);
  });
};
