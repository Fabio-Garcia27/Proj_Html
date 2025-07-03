"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput = ({ defaultValue, hideOnSearch}: Props) => {
    const router = useRouter();
    //saber a página que está
    const pathname = usePathname();
    const [searchInput, setSearchInput] = useState(defaultValue ?? '');

    const handleSearchEnter = () => {
        if(searchInput) {
            router.push('/search?q='+encodeURIComponent(searchInput)) //componente limpar caracteres e concatenar para url
        }
    }

    // se está na search retorna null
    if(hideOnSearch && pathname === '/search') return null;

    return (
        <Input
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />    
    )

}