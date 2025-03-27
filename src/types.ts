export type Student = {
  id: number;
  name: string;
  score: number;
};

export type Class = {
  id: number;
  subject: "Science" | "Math" | "English";
  students: Student[];
  totalSeat: number;
  groups: Group[];
};

export type JoinInfo = {
  id: string;
  link: string;
};

export type Group = {
  students: Student[];
};
