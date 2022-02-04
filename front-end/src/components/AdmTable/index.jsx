import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { PaperDiv, TableContainer } from './styles';
import { useManageUsers } from '../../hooks';

const AdmTable = () => {
  const { deleteUserById, users, tableHeader } = useManageUsers();

  return (
    <TableContainer>
      <PaperDiv>
        <Table size="medium">
          <TableHead>
            <TableRow>
              {
                tableHeader.map((e) => <TableCell key={ e }>{e}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody>
            { users.length > 0
              ? users.map((user, index) => {
                const { name, email, role, id } = user;
                return (
                  <TableRow key={ `user-${index}` }>
                    <TableCell
                      data-testid={
                        `admin_manage__element-user-table-item-number-${index}`
                      }
                    >
                      { index + 1 }
                    </TableCell>
                    <TableCell
                      data-testid={ `admin_manage__element-user-table-name-${index}` }
                    >
                      { name }
                    </TableCell>
                    <TableCell
                      data-testid={ `admin_manage__element-user-table-email-${index}` }
                    >
                      { email }
                    </TableCell>
                    <TableCell
                      data-testid={ `admin_manage__element-user-table-role-${index}` }
                    >
                      { role }
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        data-testid={ `admin_manage__element-user-table-remove-${index}` }
                        onClick={ () => deleteUserById(id) }
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              }) : null }
          </TableBody>
        </Table>
      </PaperDiv>
    </TableContainer>

  );
};

export default AdmTable;
