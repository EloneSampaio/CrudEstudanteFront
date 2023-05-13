import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./EstudanteForm";
import StudentDetails from "./EstudanteDetails";
import StudentTableContent from "./EstudanteTableContent";
import styled from 'styled-components';



const EstudanteTable = () => {

  const Button = styled.button`
  margin: 3rem 2.5rem;
`;


  const [data, setData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios("http://127.0.0.1:8000/api/estudantes");
    setData(result.data);
  };

  const botaoAddStudent = async student => {
    await axios.post("http://127.0.0.1:8000/api/estudantes", student);
    fetchData();
    setFormVisible(false);
  };

  const botaoUpdateStudent = async student => {
    await axios.put(`http://127.0.0.1:8000/api/estudantes/${selectedStudent.id}`, student);
    fetchData();
    setSelectedStudent(null);
    setFormVisible(false);
  };

  const botaoDeleteStudent = async id => {
    await axios.delete(`http://127.0.0.1:8000/api/estudantes/${id}`);
    fetchData();
  };

  const botaoViewStudent = student => {
    console.log(111);
  setSelectedStudent(student);
  setFormVisible(false);
};

  const botaoCancel = () => {
    setSelectedStudent(null);
    setFormVisible(false);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "nome",
      },
      {
        Header: "Endereço",
        accessor: "endereco",
      },
      {
        Header: "Telefone",
        accessor: "telefone",
      },
      {
        Header: "Foto",
        accessor: "foto",
        Cell: ({ value }) => <img src={`http://127.0.0.1:8000/${value}`} alt="Foto" width="50" />,
      },
      {
        Header: "actions"
      }
    ],
    []
  );

  return (
    <div>
      {formVisible ? (
        <StudentForm
          student={selectedStudent}
          onSubmit={selectedStudent ? botaoUpdateStudent : botaoAddStudent}
          onCancel={botaoCancel}
        />
      ) : (
        <Button onClick={() => setFormVisible(true)}>Adicionar Aluno</Button>
      )}
      <StudentTableContent
        columns={columns}
        data={data}
        onEdit={student => {
          setSelectedStudent(student);
          setFormVisible(true);
        }}
       
        onDelete={botaoDeleteStudent}
        onDetails={botaoViewStudent}
      />

{selectedStudent && !formVisible && (
  <StudentDetails student={selectedStudent} onClose={() => setSelectedStudent(null)} />
)}

     
    </div>
  );

};

export default EstudanteTable;
