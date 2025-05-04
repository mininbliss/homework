import React from "react"; //리액트 라이브러리 불러오기
import * as W from "../styles/styledWrite";
import { useState } from "react";
import { useNavigate} from "react-router-dom";


const Write = ({ dataList }) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState(new Date());

    const goBack = () => {
        navigate(`/`);
      };

    const handleSubmit = () => {
        console.log("제목: ", title)
        console.log("날짜: ", printDate())
        console.log("내용: ", content)
    };

    const printDate = () => {
        return date.toLocaleDateString();
    }; //날짜 출력 함수


    return(
        <W.Background>
            <W.Container> 
                <W.Box>
                    <W.BackBtn onClick={goBack}>
                        <img
                        src={`${process.env.PUBLIC_URL}/images/backbtn.svg`}
                        alt="back"
                        width="30px"
                        />
                    </W.BackBtn>
                
                    <W.Title> <W.InputTitle type="text" value={title} placeholder="제목을 입력해 주세요" 
                    onChange={(e) => setTitle(e.target.value)}/> </W.Title>
                        <W.ContentBox>
                          <W.Date>{printDate()}</W.Date>
                            <W.InputContent type="text" value= {content} placeholder="내용 입력" 
                            onChange={(e) => setContent(e.target.value)} /> 
                         </W.ContentBox>
                    <W.Sendbtn onClick={handleSubmit}>작성하기</W.Sendbtn>
                </W.Box> 
            </W.Container>
        </W.Background>
        
    );
};


export default Write;
