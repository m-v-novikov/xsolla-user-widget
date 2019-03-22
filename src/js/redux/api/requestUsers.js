import { baseURL } from "./index"

export const fetchUsers = async (action) => {
  try{
    const response = await fetch(`${baseURL}?offset=${action.offset}&limit=10`);
    return await response.json();
  }catch (e) {
    console.log(e)
  }
};

export const fetchUserById = async (userId) => {
  try{
    const response = await fetch(`${baseURL}/${userId}`);
    return await response.json();
  }catch (e) {
    console.log(e)
  }
};
