import { Container, Titulo, BoxAtividades } from '../../styles/global.js'
import { BoxAtividadesAgrupadas } from '../../styles/atividadesAgrupadas.js'
import { useSelector } from 'react-redux'

export default function AtividadesPorConclusao() {
   
    const atividades = useSelector((state) => state.atividades)

    return (
        <Container>
            
            <Titulo>Atividades</Titulo>

            <BoxAtividadesAgrupadas>
                <BoxAtividades id="table_box" className='Box'>
                    <h3>Atividades concluídas</h3>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Título</th>
                                <th>Descrição</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atividades.filter(item => item.concluido === true).map(item =>   
                                <tr>
                                    <td>{item.titulo}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.concluido ? "Concluído" : "Pendente"}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </BoxAtividades>

                <BoxAtividades id="table_box" className='Box'>
                    <h3>Atividades pendentes</h3>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Título</th>
                                <th>Descrição</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atividades.filter(item => item.concluido === false).map(item => 
                                <tr>
                                    <td>{item.titulo}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.concluido ? "Concluído" : "Pendente"}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </BoxAtividades>
            </BoxAtividadesAgrupadas>
        </Container>
    )
}