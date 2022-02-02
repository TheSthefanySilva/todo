import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAtividade, updateAtividade, removeAtividade } from '../../redux/slices/atividadesSlice.js'
import { Container, Titulo, BoxAtividade, BoxAtividades } from '../../styles/global.js'

export default function Atividades() {

    // VARIÁVEIS
    const dispatch = useDispatch()
    const atividades = useSelector((state) => state.atividades)

    const [id, setId] = useState(0)
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [concluido, setConcluido] = useState(false)

    const [botaoAcao, setBotaoAcao] = useState('Adicionar')
    
    // FUNÇÕES
    const onClickRemoverAtividade = (event, id) => {
        event.preventDefault()
        dispatch(removeAtividade({id: id}))
    }

    const onClickAlterarAtividade = (event, item) => {
        event.preventDefault()

        setId(item.id)
        setTitulo(item.titulo)
        setDescricao(item.descricao)
        setConcluido(item.concluido)
       
        setBotaoAcao('Alterar')
    }

    const onClickBotaoAcoes = () => {

        console.log(atividades)
        switch (botaoAcao) {
            case "Adicionar":
                // Adiciona atividade
                const novaAtividade = {
                    titulo: titulo,
                    descricao: descricao,
                    concluido: concluido 
                }
                dispatch(addAtividade(novaAtividade))
                
                // Volta ao estado inicial
                setTitulo('')
                setDescricao('')
                setConcluido(false)

                break;
        
            case "Alterar":
                // Altera atividade
                const alterarAtividade = {
                    id: id,
                    titulo: titulo,
                    descricao: descricao,
                    concluido: concluido 
                }
                console.log("id aquii " + id)
                dispatch(updateAtividade(alterarAtividade))

                // Volta ao estado de adicionar
                setBotaoAcao("Adicionar")

            default:
                break;
        }

        // Volta ao estado inicial
        setTitulo('')
        setDescricao('')
        setConcluido(false)
    }

    // TELA
    return (
        <Container>
            <Titulo>Atividades</Titulo>

            <BoxAtividade>
                <h2> Item </h2>
                
                <div className='item'>
                    <p className='titulo'>Título</p>
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Digite aqui"/>
                </div>
                
                <div className='item'>
                    <p className='titulo'>Descrição</p>
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Digite aqui"/>
                </div>
               
                <div className='item'>
                    <p className='titulo'>Status</p>
                    <div className='concluido_radio'>
                        <div>
                            <input type="radio" checked={!concluido} onChange={e => setConcluido(!e.target.value)}/> <span>Pendente</span>
                        </div>
                        <div>
                            <input type="radio" checked={concluido} onChange={e => setConcluido(e.target.value)}/> <span>Concluído</span>
                        </div>
                    </div>
                    
                </div>

                <button onClick={onClickBotaoAcoes}>{botaoAcao}</button>
            </BoxAtividade>

            <BoxAtividades id="table_box">
                <h2>Lista de Atividades</h2>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {atividades.map((item, index) => 
                            <tr>
                                <td>{item.titulo}</td>
                                <td>{item.descricao}</td>
                                <td>{item.concluido ? "Concluído" : "Pendente"}</td>
                                <td><button onClick={e => onClickAlterarAtividade(e, item)}>Alterar</button></td>
                                <td><button onClick={e => onClickRemoverAtividade(e, item.id)}>Remover</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </BoxAtividades>
        </Container>
    );
}