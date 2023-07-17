import { ILanguage, enUSA, ptBr } from "@/utils/languageData";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ILanguageContext {
    language: ILanguage,
    changeLanguage: () => void
}

interface IChildren {
    children: ReactNode
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext)

export const LanguageProvider = ({children}: IChildren) => {

    useEffect(() => {
        const languageLS = localStorage.getItem("@Portfolio:Language")
        if (languageLS) languageLS === "enUSA" ? setLanguage(ptBr) : setLanguage(enUSA)
    }, [])
    
    const [language, setLanguage] = useState<ILanguage>(enUSA)

    const changeLanguage = () => {
        language === enUSA ? setLanguage(ptBr) : setLanguage(enUSA)
        language === enUSA ? localStorage.setItem("@Portfolio:Language", "enUSA") : localStorage.setItem("@Portfolio:Language", "ptBR")
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}