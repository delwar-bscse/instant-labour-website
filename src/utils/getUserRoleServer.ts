
import { EUserRole } from "@/types/types";
import { cookies } from "next/headers";

export const getUserRole = async(): Promise<string | null> => {
  const cookieStore = await cookies();
  const userRole: any = cookieStore.get("role")?.value || null;

  return userRole;
}

export const getUserRoleWorker = async(): Promise<boolean> => {
  
  const result: boolean = await getUserRole() === EUserRole.WORKER;
  return result;
}

export const getUserRoleEmployer = async(): Promise<boolean> => {
  
  const result: boolean = await getUserRole() === EUserRole.EMPLOYER;
  return result;
}