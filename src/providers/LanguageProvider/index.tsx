import { ILanguage, enUSA, ptBr } from "@/utils/languageData";
import { createContext, ReactNode, useState } from "react";

interface ILanguageContext {
    language: ILanguage,
    changeLanguage: () => void
}

interface IChildren {
    children: ReactNode
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext)

export const LanguageProvider = ({children}: IChildren) => {
    const [language, setLanguage] = useState<ILanguage>(enUSA)

    const changeLanguage = () => {
        language === enUSA ? setLanguage(ptBr) : setLanguage(enUSA)
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}