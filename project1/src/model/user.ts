export class User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string | number;
  password?: string;
  constructor(
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string | number,
    password?: string
  ) {
    this.id = id;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.role = role;
    this.password = password;
  }
}
