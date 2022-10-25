import React, { createContext, PropsWithChildren, useContext, useState } from "react";

export interface AppContextValue {
    enableBackNavigation?: boolean
    setEnableBackNavigation: (enabled: boolean) => void
    pageTitle?: string
    registerPageTitle: (title: string) => void
}

export const AppContext = createContext<AppContextValue>({
    setEnableBackNavigation: () => {},
    registerPageTitle: () => {}
})

export function useAppContext() {
    return useContext(AppContext)
}

const AppProvider: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [enableBackNavigation, setEnableBackNavigation] = useState(false)
    const [pageTitle, setPageTitle] = useState("")


    return (
        <AppContext.Provider value={{
            enableBackNavigation,
            setEnableBackNavigation,
            pageTitle,
            registerPageTitle: setPageTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider