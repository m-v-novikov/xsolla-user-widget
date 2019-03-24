import { fetchUsers, fetchUserById } from "./requestUsers";
import {addUser, changeUserBalance, editUser, transactionsList} from "./addOrEditUser";
export const baseURL = 'https://livedemo.xsolla.com/fe/test-task/baev/users';

export default {
  fetchUsers,
  fetchUserById,
  editUser,
  addUser,
  changeUserBalance,
  transactionsList
}