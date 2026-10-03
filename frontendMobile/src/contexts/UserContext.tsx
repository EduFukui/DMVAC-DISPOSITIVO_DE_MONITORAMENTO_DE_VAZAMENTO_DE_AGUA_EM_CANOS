import { createContext, useState } from "react";

export const UserContext = createContext({
    name: "",
    setName: (value: string) => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState("");
    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
}
