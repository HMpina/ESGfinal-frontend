import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../../services/api';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';

interface ITimesheet {
  funcionario_id: string;
  entrada: Date | null;
  saida_almoco: Date | null;
  retorno_almoco: Date | null;
  saida: Date | null;
}

const Timesheets: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<ITimesheet>({
    funcionario_id: '',
    entrada: null,
    saida_almoco: null,
    retorno_almoco: null,
    saida: null,
  });

  useEffect(() => {
    if (id) {
      findTimesheet(id);
    }
  }, [id]);

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value !== '' ? e.target.value : null,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id) {
      await api.put(`/timesheets/${id}`, model);
    } else {
      await api.post(`/timesheets`, model);
    }
    back();
  }

  function back() {
    history.goBack();
  }

  async function findTimesheet(id: string) {
    const response = await api.get(`timesheets/${id}`);
    const timesheetData = response.data;

    setModel({
      funcionario_id: timesheetData.funcionario_id,
      entrada: timesheetData.entrada ? new Date(timesheetData.entrada) : null,
      saida_almoco: timesheetData.saida_almoco
        ? new Date(timesheetData.saida_almoco)
        : null,
      retorno_almoco: timesheetData.retorno_almoco
        ? new Date(timesheetData.retorno_almoco)
        : null,
      saida: timesheetData.saida ? new Date(timesheetData.saida) : null,
    });
  }

  return (
    <div className="container">
      <br />
      <div className="timesheet-header">
        <h1>Nova Registro</h1>
        <Button variant="dark" size="sm" onClick={back}>
          Voltar
        </Button>
      </div>
      <br />
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="funcionario_id"
              value={model.funcionario_id}
              onChange={updatedModel}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Entrada</Form.Label>
            <Form.Control
              type="datetime-local"
              name="entrada"
              value={model.entrada ? model.entrada.toISOString().slice(0, 16) : ''}
              onChange={updatedModel}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Saída Almoço</Form.Label>
            <Form.Control
              type="datetime-local"
              name="saida_almoco"
              value={
                model.saida_almoco
                  ? model.saida_almoco.toISOString().slice(0, 16)
                  : ''
              }
              onChange={updatedModel}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Retorno Almoço</Form.Label>
            <Form.Control
              type="datetime-local"
              name="retorno_almoco"
              value={
                model.retorno_almoco
                  ? model.retorno_almoco.toISOString().slice(0, 16)
                  : ''
              }
              onChange={updatedModel}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Saída</Form.Label>
            <Form.Control
              type="datetime-local"
              name="saida"
              value={model.saida ? model.saida.toISOString().slice(0, 16) : ''}
              onChange={updatedModel}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Timesheets;
