import * as C from "./styles"
import React, { ReactNode } from "react";
import { Header } from "../Header";
import {SideBarItem} from "../SideBarItem"
import {FormContext} from "../../Context/FormContext";

type Props = {

    children: ReactNode
}

export const Theme = ({children}: Props) => {

    const value = React.useContext(FormContext);
    if(!value) return null;
    return (

        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>

                        <SideBarItem
                        title="Pessoal"
                        description="Identifique-se"
                        icon="profile"
                        path="/"
                        active={value.currentStep === 1}
                        />

                        <SideBarItem
                        title="Profissional"
                        description="Seu nível"
                        icon="book"
                        path="/step2"
                        active={value.currentStep === 2}
                        />

                        <SideBarItem
                        title="Contato"
                        description="Como te achar"
                        icon="mail"
                        path="/step3"
                        active={value.currentStep === 3}
                        />

                    </C.Sidebar>

                    <C.Page>

                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}