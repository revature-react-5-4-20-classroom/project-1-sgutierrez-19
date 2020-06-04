import { server } from './server';
import { Reimbursement } from '../model/reimbursement';

export async function getUserById(id: number) {
  return await server.get(`/users/${id}`);
}

export async function getReimById(userId: number) {
  try {
    const response = await server.get(
      `/reimbursements/author/userId/${userId}`
    );
    console.log('FROM API ROUTES: ', response);

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
    console.log(fetchedArr);
    return fetchedArr;
  } catch (error) {
    console.error(error);
  }
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
