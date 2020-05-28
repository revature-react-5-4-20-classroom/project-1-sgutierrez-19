import { server } from './server';
import { User } from '../model/user';

export async function login(un: string, pw: string): Promise<User> {
  try {
    const response = await server.post('/login', {
      username: un,
      password: pw,
    });
    const {
      id,
      username,
      password,
      first_name,
      last_name,
      email,
      role,
    } = response.data;
    return new User(id, username, password, first_name, last_name, email, role);
  } catch (error) {
    throw error;
  }
}
