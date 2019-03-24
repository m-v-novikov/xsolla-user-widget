import { baseURL } from "./index"

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export const editUser = async (action) => {

  const editParams = {
    method: "PUT",
    headers,
    body: JSON.stringify(action.userFields)
  };

  try{
    const response = await fetch(`${baseURL + "/" + action.userFields["user_id"]}`, editParams);
    return await response.json().then(json => json).catch(err => ({status: "success"}));
  }catch (e) {
    console.log(e)
  }
};

export const addUser = async (action) => {
  const editParams = {
    method: "POST",
    headers,
    body: JSON.stringify(action.userFields)
  };

  try{
    const response = await fetch(`${baseURL}`, editParams);
    return await response.json().then(json => json).catch(err => ({status: "success"}));
  }catch (e) {
    console.log(e)
  }
};

export const changeUserBalance = async (action) => {
  const editParams = {
    method: "POST",
    headers,
    body: JSON.stringify(action.userFields)
  };

  try{
    const response = await fetch(`${baseURL + "/" + action.userFields["user_id"] + "/recharge"}`, editParams);
    return await response.json();
  }catch (e) {
    console.log(e)
  }
};

export const transactionsList = async (url) => {
  console.log(url);
  try{
    const response = await fetch(`${baseURL + url}`);
    return await response.json();
  }catch (e) {
    console.log(e)
  }
};

