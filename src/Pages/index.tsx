import { Route, Routes } from "react-router-dom"
import { End } from "./End/End"
import FormStep1 from "./FormStep1/FormStep1"
import FormStep2 from "./FormStep2/FormStep2"
import FormStep3 from "./FormStep3/FormStep3"

export const Pages = () => {

    return (

        <Routes>
            <Route path="/" element={<FormStep1/>}/>
            <Route path="/step2" element={<FormStep2/>}/>
            <Route path="/step3" element={<FormStep3/>}/>
            <Route path="/end" element={<End/>}/>
        </Routes>
    )
}