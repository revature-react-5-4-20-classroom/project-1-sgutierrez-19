import { server } from './server';
import { Reimbursement } from '../model/reimbursement';

// Unused due to getting user info at login and storing it to state
// export async function getUserById(id: number) {
//   return await server.get(`/users/${id}`);
// }

export async function getReimById(userId: number) {
  try {
    const response = await server.get(
      `/reimbursements/author/userId/${userId}`
    );
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

export async function createReim(
  amount: number,
  description: string,
  type: string
): Promise<any> {
  try {
    let bodyObj: any = { amount, description, type };
    let response = await server.post(`/reimbursements`, bodyObj);
    return response;
  } catch (error) {
    console.log(error);
  }
}
