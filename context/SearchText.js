import React, { createContext, useState, useContext } from "react";

const SearchTextContext = createContext();

export default function SearchTextProvider({ children }) {
    const [searchText, setSearchText] = useState(0);

    return (
        <SearchTextContext.Provider
            value={{
                searchText,
                setSearchText
            }}
        >
            {children}
        </SearchTextContext.Provider>
    );
}

export function useSearchText() {
    const context = useContext(SearchTextContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { searchText, setSearchTextt } = context;
    return { searchText, setSearchTextt };
}