import GroupController from "../controllers/GroupController";
import StudentListController from "../controllers/StudentListController";
import { TabItem } from "../types";

export const TabList: TabItem[] = [
  {
    key: "student",
    label: "Student List",
    render: () => <StudentListController />,
  },
  {
    key: "group",
    label: "Group",
    render: () => <GroupController />,
  },
];
