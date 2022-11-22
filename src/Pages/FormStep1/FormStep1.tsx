import React from 'react'
import * as C from "./styles"
import { Theme } from '../../Components/Theme'
import {useNavigate} from "react-router-dom"
import { FormContext } from '../../Context/FormContext'
import { toast } from 'react-toastify'

const FormStep1 = () => {

  const value = React.useContext(FormContext);

  React.useEffect(() => {

    value?.setCurrentStep(1);

  }, [])

  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    value?.setName(e.target.value);
  }

  const handleNextStep = () => {

    if(value?.name !== ""){

      navigate("/step2");
    }

    else{

      toast.error("Preencha um nome válido!");
    }

  }

  if(!value) return null;

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome: {value.name}</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr/>

        <label>
          Seu nome completo
          <input value={value.name} onChange={handleNameChange} type="text" autoFocus/>
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormStep1