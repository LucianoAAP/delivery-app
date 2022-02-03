import React from 'react';
import { useManageUsers } from '../../hooks';
import { Columns, Name, Email } from './styles';

const AdmTable = () => {
  const { deleteUserById, users } = useManageUsers();

  return (
    <table>
      <thead>
        <tr>
          <Columns>Item</Columns>
          <Columns>E-mail</Columns>
          <Columns>Tipo</Columns>
          <Columns>Excluir</Columns>
        </tr>
      </thead>
      <tbody>
        { users.length > 0
          ? users.map((user, index) => {
            const { name, email, role, id } = user;
            return (
              <tr key={ `user-${index}` }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  { index + 1 }
                </td>
                <Name
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  { name }
                </Name>
                <Email data-testid={ `admin_manage__element-user-table-email-${index}` }>
                  { email }
                </Email>
                <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
                  { role }
                </td>
                <td>
                  <button
                    type="button"
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    onClick={ () => deleteUserById(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          }) : null }
      </tbody>
    </table>
  );
};

export default AdmTable;
