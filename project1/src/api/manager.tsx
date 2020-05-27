import { server } from './index';

export async function getAllUsers() {
  return await server.get('/users');
}

export async function getReimByStatus(statusId: number) {
  return await server.get(`/reimbursements/status/${statusId}`);
}

export async function updateReim(
  reimToUpdate: number,
  amount?: number,
  description?: string,
  type?: number
) {
  return await server.patch(`/reimbursements`, {
    reimToUpdate: reimToUpdate,
    amount: amount,
    description: description,
    type: type,
  });
}
