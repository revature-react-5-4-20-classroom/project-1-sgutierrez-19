import { server } from './server';

export async function getUserById(id: number) {
  return await server.get(`/users/${id}`);
}

export async function getReimById(userId: number) {
  return await server.get(`/reimbursements/author/userId/${userId}`);
}

export async function createReim(
  amount: number,
  descrption: string,
  type: string
) {
  return await server.post(`/reimbursements`, {
    amount: amount,
    descrption: descrption,
    type: type,
  });
}
