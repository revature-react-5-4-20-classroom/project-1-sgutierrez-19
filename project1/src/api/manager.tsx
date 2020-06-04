import { server } from './server';
import { User } from '../model/user';

export async function getAllUsers() {
  try {
    const response = await server.get('/users');
    let fetchedArr = response.data.map((u: User) => {
      return new User(
        u.id,
        u.username,
        u.first_name,
        u.last_name,
        u.email,
        u.role
      );
    });
    return fetchedArr;
  } catch (error) {
    console.error(error);
  }
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
