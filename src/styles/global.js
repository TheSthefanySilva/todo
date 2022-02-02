import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

export const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 10vh;
    margin-bottom: 50px;

    color: #fff;
    background-color: #0093D4;
    font-size: 35px;
    font-weight: bold;
`;

export const BoxAtividade = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start center;

    align-self: center;
    width: 30%;
    height: 40vh;

    margin: 0px 0px 50px 0px;

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        padding: 10px;
       
        .titulo {
            margin: 0px;
            align-self: flex-start;
        }

        input[type=text] {
            width: 100%;
        }

        .concluido_radio {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            width: 100%;
        }
    }
`;

export const BoxAtividades = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start center;

    align-self: center;
    width: 80%;
    height: 70vh;
`;