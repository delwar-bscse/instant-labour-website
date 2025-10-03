
// getUserRole.ts

type UserRole = "employer" | "worker";

export const EUserRole: { [key: string]: UserRole } = {
  EMPLOYER: "employer",
  WORKER: "worker"
}

export const getUserRole = () => {
  // Simulate fetching user role from a database or an API
  const userRole: UserRole = EUserRole.EMPLOYER;
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