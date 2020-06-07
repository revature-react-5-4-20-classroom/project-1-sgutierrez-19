import { server } from './server';
import { User } from '../model/user';
import { Reimbursement } from '../model/reimbursement';

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
  try {
    const response = await server.get(`/reimbursements/status/${statusId}`);
    let fetchedArr = response.data.map((r: Reimbursement) => {
      return new Reimbursement(
        r.author,
        r.amount,
        r.date_submitted,
        r.description,
        r.status,
        r.type,
        r.id,
        r.date_resolved,
        r.resolver
      );
    });
    return fetchedArr;
  } catch (error) {
    console.error(error);
  }
}

export async function updateReim(reimID: number, newStatus: number) {
  return await server.patch(`/reimbursements`, {
    reimToUpdate: reimID,
    status: newStatus,
  });
}
