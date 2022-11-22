import { FormContext } from "../../Context/FormContext"
import React from "react"
import * as C from "./styles"
import sucess from "./sucess.png"
import { useNavigate } from "react-router-dom"

export const End = () => {

    const value = React.useContext(FormContext);
    const navigate = useNavigate();

    React.useEffect(() => {

        if(!value?.email || !value?.github || !value?.name){

            navigate("/");
        }

    }, [])

    return (
    
        <C.Container>
            <C.Area>
                <img src={sucess} alt="Sucesso"/>
                <h1>Obrigado por contribuir com seus dados!</h1>
            </C.Area>
        </C.Container>
        
    )
}