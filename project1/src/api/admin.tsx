import { server } from './index';

export async function updateUser(
  userToUpdate: number,
  username?: string,
  password?: string,
  first_name?: string,
  last_name?: string,
  email?: string,
  role?: number
) {
  return await server.patch(`/users`, {
    userToUpdate: userToUpdate,
    username: username,
    password: password,
    first_name: first_name,
    last_name: last_name,
    email: email,
    role: role,
  });
}
