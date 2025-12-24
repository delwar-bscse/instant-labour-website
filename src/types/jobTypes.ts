

export enum BOOKING_STATUS {
  PENDING = 'pending',
  APPROVED = 'approved',
  DECLINED = 'declined',
}
export enum APPLICATION_STATUS {
  PENDING = 'pending',
  APPROVED = 'approved',
  DECLINED = 'declined',
}

export type JobType = {
  profile: string;
  name: string;
  verified: boolean;
  createdAt: string | Date;
  category: string;
  location: string;
  salary: number;
  salaryType: string;
  status: string;
};