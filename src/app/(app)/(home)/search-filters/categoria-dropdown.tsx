"use client";
import { Categoria } from "@/payload-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState} from "react";
import { useRef } from "react";
import { set } from "date-fns";
import { SubcategoriaMenu } from "./subcategoria-menu";
import { useDropdownPosition } from "./use-dropdown-position";
import { CustomCategoria } from "../types";
interface Props {
    categoria: CustomCategoria
    isActive?: boolean;
    isNavigationHovered?: boolean;
}

export const CategoriaDropdown= ({
    categoria,
    isActive,
    isNavigationHovered
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const {getDownropPosition}= useDropdownPosition(dropdownRef);
    const onMouseEnter = () => {
        if (categoria.subcategorias) {
            setIsOpen(true)
        }
    };

    const onMouseLeave = () => setIsOpen(false);
    const dropdownPosition = getDownropPosition();

    return(
        <div className="relative"
        ref={dropdownRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <div className="relative">
            <Button 
            variant="elevated"
            className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            isActive && !isNavigationHovered && "bg-white border-primary",
            isOpen && "bg-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[4px] hover:-translate-y-[4px]"
            )}>
                {categoria.name}
            </Button>
            {categoria.subcategorias && categoria.subcategorias.length > 0 &&(
            <div
            className={cn(
                "opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2",
                 isOpen && "opacity-100"   
            )}
            />
            )}
            </div>
            <SubcategoriaMenu
             categoria={categoria}
             isOpen={isOpen}
             posicion={dropdownPosition}
            />
        </div>
    )
}