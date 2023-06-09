import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import './Form/index.css';
import { BsXCircleFill, BsPencilSquare } from "react-icons/bs";

interface ITimesheet{
    id: string;
    funcionario_id: string;
    data: Date;
    entrada: Date;
    saida_almoco: Date;
    retorno_almoco: Date;
    saida: Date;
    status: boolean;
}
 
const Timesheets: React.FC = () => {
 
    const [timesheets, setTimesheets] = useState<ITimesheet[]>([])
    const history = useHistory()
 
    useEffect(() => {
        loadTimesheets()
    }, [])
 
    async function loadTimesheets() {
        const response = await api.get('/timesheets')
        console.log(response);
        setTimesheets(response.data)
    }
 
    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }
    
    function formatTime(date: Date | string | undefined) {
        if (date == undefined) {
            return <BsXCircleFill className='red-icon'/>
            ;
        } else {
            return moment(date).format('HH:mm:ss');
        }
      }
      
 
    function newTimesheet(){
        history.push('/registros_cadastro')
    }
 
    function editTimesheet(id: string){
        history.push(`/registros_cadastro/${id}`)
    }

    return (
        
        <div className="container">
            <br />
            <div className="timesheet-header">
                <h1>Registros do funcionário <br/>{timesheets[0]?.funcionario_id}</h1>
                <Button variant="dark" size="sm" onClick={newTimesheet}>Novo Registro</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center mw100vw">
                <thead>
                    <tr>
                    <th>Data</th>
                    <th className="th-width-50">Entrada</th>
                    <th className="th-width-50">Saída almoço</th>
                    <th className="th-width-50">Retorno almoço</th>
                    <th className="th-width-50">Saída</th>
                    <th>Status</th>
                    <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        timesheets.map(timesheet => (
                            <tr key={timesheet.id}>
                                <td>{formatDate(timesheet.data)}</td>
                                <td>{formatTime(timesheet.entrada)}</td>
                                <td>{formatTime(timesheet.saida_almoco)}</td>
                                <td>{formatTime(timesheet.retorno_almoco)}</td>
                                <td>{formatTime(timesheet.saida)}</td>
                                <td>{timesheet.status ? "Registo OK" : "Registro incompleto"}</td>
                                <td>
                                    <Button size="sm" disabled={timesheet.status} variant="primary" onClick={() => editTimesheet(timesheet.id)}><BsPencilSquare/></Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default Timesheets;