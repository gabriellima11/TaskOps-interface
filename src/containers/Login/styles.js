import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    color: #fff;
    background-color: #1F2937;
    width: 500px;
    height: 600px;

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 20px;
    }
`;

export const Header = styled.div`
    text-align: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
`;

export const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: #ffdddd;
        font-size: 0.85em;
        margin-top: 5px;
    }
`;

export const Input = styled.input`
    border: 1px solid #171f2bff;
    border-radius: 10px;
    outline: none;
    padding: 10px 10px;
    width: 100%;
`;

export const Footer = styled.div`
    width: 100%;
    text-align: center;

    p {
        margin-bottom: 10px;
    }
`;
