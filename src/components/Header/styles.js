import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    color: #0593FC;
    border-bottom: 1px solid #0591fc18;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 10px 20px;
        gap: 30px;
    }
`

export const ContainerLinks = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        justify-content: flex-start;
        gap: 10px;
        margin-top: 10px;
    }
`

export const Link = styled.a`
    cursor: pointer;
    border: 1px solid #0593FC;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all 0.3s ease;

    &:hover{
        background-color: #0593FC;
        color: white;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 4px 8px;
    }
`

export const Image = styled.img`
    width: 70px;

    @media (max-width: 480px) {
        width: 50px;
    }
`

export const DivInfo = styled.div`     
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Logout = styled.a`     
    border: 1px solid red;
    padding: 0 10px;
    border-radius: 10px;
    text-decoration: none;
    color: red;
    width: 50px;
    transition: 0.3s ease;

    &:hover{
        background-color: red;
        color: #fff;
    }
`