import { Class, JoinInfo } from "../types";

export const students = [
  { id: 1, name: "Philip", score: 0 },
  { id: 2, name: "Darrell", score: 0 },
  { id: 3, name: "Guest", score: 0 },
  { id: 4, name: "Cody", score: 0 },
  { id: 10, name: "Esther", score: 0 },
  { id: 12, name: "Gloria", score: 0 },
  { id: 14, name: "Lee", score: 0 },
  { id: 16, name: "Ann", score: 0 },
  { id: 17, name: "Jacob", score: 0 },
  { id: 18, name: "Calvin", score: 0 },
  { id: 20, name: "Joe", score: 0 },
];

export const mockClassRoom: Class = {
  id: 302,
  subject: "Science",
  students,
  totalSeat: 20,
  groups: [
    [
      { id: 1, name: "Philip", score: 0 },
      { id: 2, name: "Darrell", score: 0 },
      { id: 3, name: "Guest", score: 0 },
    ],
    [
      { id: 10, name: "Esther", score: 0 },
      { id: 12, name: "Gloria", score: 0 },
      { id: 14, name: "Lee", score: 0 },
      { id: 16, name: "Ann", score: 0 },
    ],
  ],
};

export const mockJoinInfo: JoinInfo = {
  id: "X58E9647",
  url: "https://www.classswift.viewsonic.io/",
};
