import React from 'react'
import "./App.css"
import { Pages } from './Pages'
import { FormProvider } from './Context/FormContext'

const App = () => {
  return (
    <FormProvider>
    <div>
      <Pages/>
    </div>
    </FormProvider>
  )
}

export default App