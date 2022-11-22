import styled from "styled-components";


export const Container = styled.div`

    p, span{

        font-size: 13px;
        color: #b8b8d4;
    }

    span{

        font-size: 12px;
        margin-left: 5px;
    }


    h1{

        margin: 10px 0; 
        padding: 0;
        font-size: 26px;
    }

    hr{

        height: 1px;
        border: 0;
        background-color: #16195c;
        margin: 30px 0;
    }

    label{

        font-size: 13px;


        input{

            display: block;
            margin-top: 7px;
            width: 100%;
            padding: 15px 6px;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: #fff;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
            margin-bottom: 1.5rem;
        }
    }

    button, a {

        background-color: #25cd89;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 15px 35px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 10px;
        transition: 0.3s;
        text-decoration: none;
    }

    .voltar{

        background: transparent;
      
      
    }

    strong{

        margin-left: 5px;
        
    }

    button:hover, a:hover{

        opacity: 0.8;
    }

    transform: translateX(-20px);
    opacity: 0;
    animation: animeLeft .5s forwards;



@keyframes animeLeft{

    to{

        transform: initial;
        opacity: initial;
    }
}

`

export const ContainerButton = styled.div`

    display: flex;
    justify-content: space-between;
`