import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';

const EstudanteForm = ({ student, onSubmit, onCancel }) => {
  const [formState, setFormState] = useState(
    student
      ? { ...student }
      : {
        nome: "",
          endereco: "",
          telefone: "",
          foto: "",
        }
  );

  const [preview, setPreview] = useState(student ? student.foto : null);
  const fileInput = useRef();

  useEffect(() => {
    if (student) {
      setFormState({ ...student });
      setPreview(student.foto);
    } else {
      setFormState({
        nome: "",
        endereco: "",
        telefone: "",
        foto: "",
      });
      setPreview(null);
    }
  }, [student]);

  const botaoChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const botaoImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...formState, foto: reader.result });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const botaoSubmit = e => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <Form onSubmit={botaoSubmit}>
      <FieldWrapper>
        <Label htmlFor="nome">Nome:</Label>
        <Input type="text" id="nome" name="nome" value={formState.nome} onChange={botaoChange} required />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="endereco">Endereço:</Label>
        <Input type="text" id="endereco" name="endereco" value={formState.endereco} onChange={botaoChange} required />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="telefone">Telefone:</Label>
        <Input type="text" id="telefone" name="telefone" value={formState.telefone} onChange={botaoChange} required />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="foto">Foto:</Label>
        <Input type="file" id="foto" name="foto" ref={fileInput} onChange={botaoImageChange} accept="image/jpeg" />
      </FieldWrapper>

      {preview && (
        <div>
          <img src={preview} alt="Preview" width="100" />
        </div>
      )}

      <ButtonGroup>
        <Button type="submit">Salvar</Button>
        <CancelButton type="button" onClick={onCancel}>
          Cancelar
        </CancelButton>
      </ButtonGroup>
    </Form>
  );
};




const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 2rem 2.5rem;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f2f2f2;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #006400;;
  color: #fff;
  &:hover {
    background-color: #064000;
  }
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
  &:hover {
    background-color: #999;
  }
`;

export default EstudanteForm;
