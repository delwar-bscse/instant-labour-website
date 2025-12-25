"use client";
import { EUserRole } from "@/types/types";
import { getCookie } from "cookies-next";


export const getUserRole = () => {
  const userRole: any = getCookie("role") || null;
  return userRole;
}

export const getUserRoleWorker = (): boolean => {
  
  const result: boolean = getUserRole() === EUserRole.WORKER;
  return result;
}

export const getUserRoleEmployer = (): boolean => {
  
  const result: boolean = getUserRole() === EUserRole.EMPLOYER;
  return result;
}