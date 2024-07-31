import Status from "../enums/status.enum";

export interface Reminder {
  id: number;
  text: string;
  status: Status;
  createdDate: Date;
  deleted: boolean;
}
