import React from 'react'
import * as C from "./styles"
import { Theme } from '../../Components/Theme'
import {useNavigate} from "react-router-dom"
import { FormContext } from '../../Context/FormContext'
import { SelectOptions } from '../../Components/SelectOptions'

const FormStep2 = () => {

  const value = React.useContext(FormContext);
  const navigate = useNavigate();

  React.useEffect(() => {

    if(value?.name !== ""){

      value?.setCurrentStep(2);
    }

    else{

      navigate("/");

    }
  

  }, [])

  const handleNextStep = () => {

    navigate("/step3");
  }

  const handlePreviousStep = () => {

    navigate(-1);
  }

  if(!value) return null;

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{value.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu perfil profissional.</p>
        <hr/>

        <SelectOptions
          title="Sou iniciante"
          description="Comecei a programar há menos de dois anos."
          icon="🥳"
          selected={value.level === 0}
          onClick={() => value.setLevel(0)}
        />

        <SelectOptions
          title="Sou programador"
          description="Já programo há dois anos ou mais."
          icon="😎"
          selected={value.level === 1}
          onClick={() => value.setLevel(1)}
        />

        <C.ContainerButton>
        
          <button className="voltar" onClick={handlePreviousStep}>⬅ <span>Voltar</span></button>
          <button onClick={handleNextStep}>Próximo</button>
        </C.ContainerButton>

      </C.Container>
    </Theme>
  )
}

export default FormStep2