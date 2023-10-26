import { createContext, useContext, useState } from "react";

export const RegisterFormContext = createContext();

export const RegisterFormProvider = ({ children }) => {
    
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [fileName, setFileName] = useState(undefined);

    const contextValue = {
        selectedFile,
        setSelectedFile,
        fileName,
        setFileName,  
    };
     
    return(
        <RegisterFormContext.Provider value={contextValue}>
            { children }
        </RegisterFormContext.Provider>
    )
}

export const useRegisterContext = () => {
    return useContext(RegisterFormContext)
}