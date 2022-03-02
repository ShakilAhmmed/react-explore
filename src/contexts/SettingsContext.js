import { createContext } from "react";


export const SettingsContext = createContext();


export function WrapWithContext(props) {
    const defaultValues = {
        value: {
            'app-name': "Learning React"
        }
    }

    return <SettingsContext.Provider value={{ ...defaultValues }}>
        {props.children}
    </SettingsContext.Provider>
}
