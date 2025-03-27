import { mockClassRoom } from "./mockData";
import { Class } from "../types";

export const fetchClassroom = async (): Promise<Class> => {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 1001); // Random delay between 0 and 1000 ms
    setTimeout(() => resolve(mockClassRoom), delay);
  });
};
