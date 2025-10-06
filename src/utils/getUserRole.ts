/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getCookie } from "cookies-next";

// getUserRole.ts


export const EUserRole: { [key: string]: string } = {
  EMPLOYER: "employer",
  WORKER: "worker"
}

export const getUserRole = () => {
  const userRole: any = getCookie("role") || null;
  // const userRole = "worker"

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