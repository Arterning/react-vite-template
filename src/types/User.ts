export interface User {
  id: number;
  userName: string;
  email?: string;
  password?: string;
  isAdmin: 0 | 1;
}
