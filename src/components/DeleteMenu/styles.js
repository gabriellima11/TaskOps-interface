import styled from 'styled-components'

export const Container = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'inherit';
`

export const DivConfirmDelete = styled.div`
      background-color: #111827;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
`

export const Button = styled.button`
    margin-top: 10px;
    background-color: #0593FC;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 10px;

    &:hover{
        background-color: #036ab9ff;
    }
`