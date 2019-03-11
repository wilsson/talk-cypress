import styled  from 'styled-components';



export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #a8c0ec;
    border-radius: 2px;
    font-size: 18px;
    padding: 5px 10px;
    box-sizing: border-box;
    outline: none;
`;


export const Button = styled.button`
    font-size: 18px;
    padding: 15px 0;
    background-color: #fb8436;
    border: none;
    color: white;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
`;

export const ButtonFile = styled.label`
    background-color: #fb8436;
    font-size: 18px;
    padding: 10px 0;
    color: white;
    position: relative;
    text-align: center;
    margin: 20px 0;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputFile = styled.input`
    border: 1px solid red;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: white;
    border-radius: 2px;
    padding: 20px;
`;

export const PictureBox = styled.div`
    border: 1px solid #a8c0ec;
    height: 200px;
    margin-bottom: 20px;
    padding: 10px;
`;

export const Picture = styled.img`
    width: 100%;
`;