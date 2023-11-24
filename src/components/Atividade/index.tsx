type AtividadeType = {
    id: number;
    prioridade?: number;
    descricao?: string;
    titulo?: string;
};

interface inputProps {
    ativ: AtividadeType;
    handleDeleteAtividade: (id: number) => void;
}

export function Atividade({ ativ, handleDeleteAtividade }: inputProps) {
    function prioridadeLabel(param: number | undefined) {
        switch (param) {
            case 1:
                return 'Baixa';
            case 2:
                return 'Normal';
            case 3:
                return 'Alta';
            default:
                return 'Undefined';
        }
    }
    return (
        <div key={ativ.id} className="card mb-2 shadow">
            <div className="card-body">

                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        {ativ.id} - {ativ.titulo}
                    </h5>
                    <h6>
                        Prioridade: {prioridadeLabel(ativ.prioridade)}
                    </h6>
                </div>
                <p className="card-text">{ativ.descricao}</p>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-outline-primary btn-sm me-1'>Editar</button>
                    <button className='btn btn-outline-danger btn-sm' onClick={() => handleDeleteAtividade(ativ.id)}>Deletar</button>
                </div>
            </div>
        </div>
    );
}