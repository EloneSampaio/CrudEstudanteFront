import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import StudentActions from "./EstudanteActions";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; // Ajuste a largura mínima da tabela aqui
`;

const TableRow = styled.tr`
  height: 40px;
  

  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  
`;

const ActionCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width: 140px; // Ajuste a largura da coluna de ações aqui
`;


const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;

  
`;

const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const EstudanteTableContent = ({ columns, data, onEdit, onDelete, onDetails }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableHeader {...column.getHeaderProps()}>{column.render("Header")}</TableHeader>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
  prepareRow(row);
  return (
    <TableRow {...row.getRowProps()}>
      {row.cells.map((cell, index) => {
        return index === row.cells.length - 1 ? (
          <ActionCell {...cell.getCellProps()}>
            <StudentActions
              onEdit={() => onEdit(row.original)}
              onDelete={() => onDelete(row.original.id)}
              onDetails={() => onDetails(row.original)}
            />
          </ActionCell>
        ) : (
          <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
        );
      })}
    </TableRow>
  );
})}

        </tbody>
      </Table>
    </TableContainer>
  );
};

export default EstudanteTableContent;
