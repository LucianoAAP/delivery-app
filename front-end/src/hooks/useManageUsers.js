import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUsers from '../services/getUsers';
import deleteUser from '../services/deleteUser';
import { reformUserState } from '../redux/actions/users';

const useManagerUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const tableHeader = ['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];

  const getAllUsers = useCallback(async () => {
    const allUsers = await getUsers();
    dispatch(reformUserState(allUsers));
  }, [dispatch]);

  const deleteUserById = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return { deleteUserById, users, tableHeader };
};

export default useManagerUsers;
