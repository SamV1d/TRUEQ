"use client";
import { CategoriaDropdown } from "./categoria-dropdown";
import { CustomCategoria } from "../types";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ListFilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Props{
    data: CustomCategoria [];
}

export const Categorias = ({data}: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const viewAllRef = useRef<HTMLDivElement>(null);
    
    const [visibleCount, setVisibleCount] = useState(data.length);
    const [isAnyHovered, setIsAnyHovered] = useState(false);
    const [isSidebasOpen, setIsSidebarOpen] = useState(false);

    const activeCategoria = "todo";

    const activeCategoriaIndex = data.findIndex((cat)=> cat.slug === activeCategoria);
    const isActiveCategoriaHidden = activeCategoriaIndex >= visibleCount && activeCategoriaIndex !== -1;


    useEffect( ()=>{
        const calcularVisible = () => {
            if (!containerRef.current || !measureRef.current || !viewAllRef.current) return;
            const contanierWidth = containerRef.current.offsetWidth;
            const viewAllWidth = viewAllRef.current.offsetWidth;
            const availableWidth = contanierWidth-viewAllWidth;

            const items = Array.from(measureRef.current.children);
            let totalWidth = 0;
            let visible = 0;

            for (const item of items){
                const width = item.getBoundingClientRect().width;

                if (totalWidth + width > availableWidth) break;
                totalWidth =+ width;
                visible++;
            }
            setVisibleCount(visible);
        };

        const resizeObserver = new ResizeObserver(calcularVisible);
        resizeObserver.observe(containerRef.current!);

        return ()=> resizeObserver.disconnect();
    }, [data.length]);

    return(
        <div className="relative w-full">
        
        <div 
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none flex"
        style={{ position: "fixed", top: -9999, left: -9999}}
        >
             {data.map((categoria) => (
                <div key={categoria.id}>
                    <CategoriaDropdown 
                    categoria={categoria}
                    isActive={activeCategoria === categoria.slug}
                    isNavigationHovered={false}
                    />
                </div>
              ))}
        </div>


            <div 
        ref={containerRef}
        className="flex flex-nowrap items-center"
        onMouseLeave={()=> setIsAnyHovered(true)}
        onMouseEnter={()=> setIsAnyHovered(false)}
        >
             {data.slice(0, visibleCount).map((categoria) => (
                <div key={categoria.id}>
                    <CategoriaDropdown 
                    categoria={categoria}
                    isActive={activeCategoria === categoria.slug}
                    isNavigationHovered={isAnyHovered}
                    />
                </div>
              ))}
        <div ref={viewAllRef} className="shrink-0">
            <Button
            className={cn(
                        "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
                        isActiveCategoriaHidden && !isAnyHovered && "bg-white border-primary",
                     )}
            onClick={()=> setIsSidebarOpen(true)}
            >
                Mas+
             <ListFilterIcon className="ml-2"/>
            </Button>

        </div>
        </div>
           
        </div>
    );
};