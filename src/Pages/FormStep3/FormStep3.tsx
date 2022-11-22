import React from 'react'
import * as C from "./styles"
import { Theme } from '../../Components/Theme'
import {useNavigate} from "react-router-dom"
import { FormContext } from '../../Context/FormContext'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const FormStep2 = () => {

  const value = React.useContext(FormContext);
  const navigate = useNavigate();

  React.useEffect(() => {

    if(value?.name !== ""){

      value?.setCurrentStep(3);
    }

    else{

      navigate("/");

    }
  

  }, [])



  const handlePreviousStep = () => {

    navigate(-1);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    value?.setEmail(e.target.value);
  }

  const handleGitHubChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    value?.setGitHub(e.target.value);
  }

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    value?.setArea(e.target.value);
  }

  const handleForm = (e: React.FormEvent) => {

    e.preventDefault();

    if(value?.github !== "" && value?.email !== "" && value?.area !== ""){

      toast.success("Formulário enviado com sucesso!");
      navigate("/end");
    }

  }

  if(!value) return null;

  return (
    <Theme>
      <C.Container>

        <p>Passo 3/3</p>
        <h1>Legal, {value.name}, onde te achamos?</h1>
        <p>Preencha os campos de contato.</p>
        <hr/>
      <form onSubmit={handleForm}>
        <label>
          Qual seu e-mail?
          <input value={value.email} onChange={handleEmailChange} type="email" autoFocus required/>
        </label>

        <label>
          Qual sua área de interesse? <span>{"("}Ex: desenvolvimento front-end{")"}</span>
          <input value={value.area} onChange={handleAreaChange} type="text" required/>
        </label>

        <label>
          Qual o link do seu github?
          <input value={value.github} onChange={handleGitHubChange} type="text" required/>
        </label>

        <C.ContainerButton>
        
        
          <Link to="/step2" className="voltar" onClick={handlePreviousStep}>⬅ <strong>Voltar</strong></Link>
          <button>Finalizar</button>

        </C.ContainerButton>
      </form>

      </C.Container>
    </Theme>
  )
}

export default FormStep2