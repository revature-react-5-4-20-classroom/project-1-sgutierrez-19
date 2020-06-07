import { server } from './server';

export async function updateUser(objFromReact: any): Promise<any> {
  let updateObj: any = {};
  updateObj.userToUpdate = objFromReact.currUserId;
  if (objFromReact.username) updateObj.username = objFromReact.username;
  if (objFromReact.password) updateObj.password = objFromReact.password;
  if (objFromReact.first_name) updateObj.first_name = objFromReact.first_name;
  if (objFromReact.last_name) updateObj.last_name = objFromReact.last_name;
  if (objFromReact.email) updateObj.email = objFromReact.email;
  try {
    let response = await server.patch(`/users`, updateObj);
    return response;
  } catch (error) {
    console.log(error);
  }
}
