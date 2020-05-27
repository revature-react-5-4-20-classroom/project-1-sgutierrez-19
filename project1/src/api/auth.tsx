import { server } from './index';

export async function login(username: string, password: string) {
  return await server.post('/login', {
    username: username,
    password: password,
  });
}
