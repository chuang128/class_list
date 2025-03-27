import { ReactNode } from "react";
import { Class } from "../../types";
import ClassRoom from "../ClassRoom";
import Group from "../Group";

export type TabKey = "student" | "group"; // expandable and scalable for future tabs

export type Tab = {
  key: TabKey;
  label: string;
  render: (props: {
    classRoom: Class;
    handleScoreIncrement: (id: number) => void;
    handleScoreDecrement: (id: number) => void;
  }) => ReactNode;
};

export const TabList: Tab[] = [
  {
    key: "student",
    label: "Student List",
    render: ({ classRoom, handleScoreIncrement, handleScoreDecrement }) => (
      <ClassRoom
        {...classRoom}
        handleScoreIncrement={handleScoreIncrement}
        handleScoreDecrement={handleScoreDecrement}
      />
    ),
  },
  {
    key: "group",
    label: "Group",
    render: ({ classRoom }) => <Group groups={classRoom.groups} />,
  },
];
