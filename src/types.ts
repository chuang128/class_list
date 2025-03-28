import { ReactNode } from "react";

export type Student = {
  id: number;
  name: string;
  score: number;
};

export type GroupOfStudents =
  | []
  | [Student]
  | [Student, Student]
  | [Student, Student, Student]
  | [Student, Student, Student, Student]
  | [Student, Student, Student, Student, Student];

export type Class = {
  id: number;
  subject: "Science" | "Math" | "English";
  students: Student[];
  totalSeat: number;
  groups: GroupOfStudents[]; // each group can only contain up to 5 students
};

export type JoinInfo = {
  id: string;
  link: string;
};

export type TabKey = "student" | "group"; // expandable and scalable for future tabs

export type TabItem = {
  key: TabKey;
  label: string;
  render: () => ReactNode;
};
