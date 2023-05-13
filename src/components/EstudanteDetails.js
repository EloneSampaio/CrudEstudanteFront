import React from "react";
import styled from "styled-components";

const StudentDetailsWrapper = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  margin-top: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const EstudanteDetails = ({ student, onClose }) => {
  if (!student) {
    return null;
  }
  return (
    
    <StudentDetailsWrapper>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <Title>Detalhes do Aluno</Title>
      <p>
        <strong>Nome:</strong> {student.nome}
      </p>
      <p>
        <strong>Endereço:</strong> {student.endereco}
      </p>
      <p>
        <strong>Telefone:</strong> {student.telefone}
      </p>
      {student.foto && (
        <p>
          <strong>Foto:</strong>
          <br />
          <img src={`${process.env.REACT_APP_API_URL}/${student.foto}`} alt="Foto do aluno" width="150" />
        </p>
      )}
    </StudentDetailsWrapper>
  );
};

export default EstudanteDetails;
