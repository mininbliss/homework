import { styled } from "styled-components";

export const Background = styled.div`
    display: flex;
    justify-content: center; 
`;

export const Container = styled.div`
    
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;  

    width: 402px;
    height: 100vh;
    background: #FDF7DE;
    margin: 0 auto;
`;

export const Box = styled.div`
    border-radius: 20px;
    border: 10px solid #FFF;
    box-shadow: 0px 0px 10px 2px rgba(255, 140, 0, 0.20);

    width: 342px;
    height: 90vh;
    flex-shrink: 0;
    
    flex-direction: column;
    margin: 25px 20px 25px 20px;

    display: flex;
    flex-direction: column; 
    align-items: center;
`;

export const Title = styled.div`

    color: #535353;
    border-bottom: 2px solid #000;
    
    width:240px;

    margin-top: 7vh;
`;

export const BackBtn = styled.div`
    width: 30.873px;
    height: 25.758px;
    flex-shrink: 0;

    fill: #000;

    margin-top: 28px;
    margin-left: 26px;

    align-self: flex-start;
`;

export const Date = styled.div  `
    color: #FF8400;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;

    margin-top: 1vh;
`;


export const ContentBox = styled.div  `
    width: 262px;
    height: 447px;
    flex-shrink: 0;

    border-radius: 10px;
    border: 1px solid #FF8400;
    background: #FFF;
    box-shadow: 0px 4px 5px 0px rgba(255, 140, 0, 0.10);

    margin-top: 6vh;
    paddig: 15px;
`;



export const Sendbtn = styled.div  `
    width: 180px;
    height: 50px;
    flex-shrink: 0;

    border-radius: 40px;
    background: #FF9668;

    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.4px;

    display:flex;
    align-items: center;
    justify-content: center;

    margin-top: 4vh;
`;


export const InputTitle = styled.input`

    color: #535353;
    border-bottom: 2px solid #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
    width:240px;

    background: transparent;  
    text-align: center;
    border: none;
    outline: none;
`;

export const InputContent = styled.input`
    background: transparent;  
    border: none;
    outline: none;
    margin-left: 10px;
`;