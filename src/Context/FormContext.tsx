
import React, { ReactNode } from "react";

type State = {

    currentStep: number;
    setName: (value: string) => void;
    setCurrentStep: (value: number) => void;
    setLevel: (value: number) => void;
    setGitHub: (value: string) => void;
    setEmail: (value: string) => void;
    setArea: (value: string) => void;
    area: string;
    name: string;
    level: number;
    email: string;
    github: string;
}

type FormProviderProps = {

    children: ReactNode;
}

type ContextType = {

    currentStep: number;
    setName: (value: string) => void;
    setCurrentStep: (value: number) => void;
    setLevel: (value: number) => void;
    setGitHub: (value: string) => void;
    setEmail: (value: string) => void;
    setArea: (value: string) => void;
    area: string;
    name: string;
    level: number;
    email: string;
    github: string;
    state: State;
    dispatch: () => void
}

export const FormContext = React.createContext<ContextType | undefined>(undefined);

export const FormProvider = ({children}: FormProviderProps) => {

    const [currentStep, setCurrentStep] = React.useState(0);
    const [name, setName] = React.useState("");
    const [level, setLevel] = React.useState(0);
    const [email, setEmail] = React.useState("");
    const [github, setGitHub] = React.useState("");
    const [area, setArea] = React.useState("");

    const value: any = {currentStep, setCurrentStep, name, setName, level, setLevel, email, setEmail, github, setGitHub, area, setArea}

    return (

        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )

}