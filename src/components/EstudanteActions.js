import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import styled from "styled-components";

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px; // Ajuste o tamanho da célula aqui
`;

const StyledFaEdit = styled(FaEdit)`
  color: #4a86e8; // Cor do ícone Editar
`;

const StyledFaTrash = styled(FaTrash)`
  color: #e32929; // Cor do ícone Apagar
`;

const StyledFaEye = styled(FaEye)`
  color: #1c7a3a; // Cor do ícone Ver
`;

const EstudanteActions = ({ onEdit, onDelete, onDetails }) => (
  <ActionWrapper>
    <ActionButton onClick={onEdit}>
      <StyledFaEdit />
    </ActionButton>
    <ActionButton onClick={onDelete}>
      <StyledFaTrash />
    </ActionButton>
    <ActionButton onClick={onDetails}>
      <StyledFaEye />
    </ActionButton>
  </ActionWrapper>
);

export default EstudanteActions;
