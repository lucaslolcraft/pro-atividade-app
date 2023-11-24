import React, { useState } from 'react';
import './App.css';
import { AtividadesList } from './components/AtividadesList/index';

type Atividade = {
    id: number;
    prioridade?: number;
    descricao?: string;
    titulo?: string;
};

function App() {
    const [formValues, setFormValues] = useState<Atividade>({
        id: 0,
        prioridade: 0,
        descricao: '',
        titulo: ''
    });

    const [atividades, setAtividades] = useState<Atividade[]>([
        {
            id: 1,
            prioridade: 1,
            descricao: 'Primeira atividade',
            titulo: 'Primeira'
        },
        {
            id: 2,
            prioridade: 1,
            descricao: 'Segunda atividade',
            titulo: 'Segunda'
        },
    ]);

    const [nextId, setNextId] = useState<number>(3);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value,
        });
    };

    const handleAddAtividade = () => {
        setAtividades([...atividades, { ...formValues, id: nextId }]);
        setNextId(nextId + 1);

        setFormValues({
            id: nextId,
            prioridade: 0,
            descricao: '',
            titulo: ''
        });
    };



    const handleDeleteAtividade = (id: number) => {
        setAtividades(atividades.filter(atividade => atividade.id !== id));
    };

    return (
        <>
            <form className='row g-3'>
                <div className="col-md-6" hidden>
                    <label htmlFor="id" className="form-label">Id</label>
                    <input type="number" className="form-control" id="id" value={formValues.id} readOnly />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPrioridade" className="form-label">Prioridade</label>
                    <select id="prioridade" className="form-select" onChange={handleInputChange} value={formValues.prioridade}>
                        <option defaultValue='0'>Selecionar</option>
                        <option value='1'>Baixa</option>
                        <option value='2'>Normal</option>
                        <option value='3'>Alta</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="titulo" onChange={handleInputChange} value={formValues.titulo} />
                </div>
                <div className="col-md-12">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <input type="text" className="form-control" id="descricao" onChange={handleInputChange} value={formValues.descricao} />
                </div>

                <div className='col-12'>
                    <button type="button" className="btn btn-primary" onClick={handleAddAtividade}>+ Atividade</button>
                </div>
            </form>
            <div className="mt-3">
                <AtividadesList atividades={atividades} handleDeleteAtividade={handleDeleteAtividade} />
            </div>
        </>
    );
}

export default App;
