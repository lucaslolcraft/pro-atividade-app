import { Atividade } from "../Atividade";

type AtividadeType = {
    id: number;
    prioridade?: number;
    descricao?: string;
    titulo?: string;
};

interface inputProps {
    atividades: AtividadeType[];
    handleDeleteAtividade: (id: number) => void;
}

export function AtividadesList({ handleDeleteAtividade, atividades }: inputProps) {

    return (
        <ul className="list-group">
            {atividades.map(ativ => (
                <Atividade ativ={ativ} handleDeleteAtividade={handleDeleteAtividade} />
            ))}
        </ul>
    );
}