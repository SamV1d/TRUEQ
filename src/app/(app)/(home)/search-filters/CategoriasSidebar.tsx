import { CustomCategoria } from "../types";
import { Sheet, SheetContent,
    SheetHeader,
    SheetTitle,
 } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Cat, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Categoria } from "@/payload-types";
import { useRouter } from "next/navigation";
interface Props{
    open: boolean;
    onOpenChange: (open: boolean)=> void;
    data: CustomCategoria[];
};

export const CategoriasSidebar = ({
    open,
    onOpenChange,
    data,
}: Props) =>{
    const router = useRouter();
    const [parentCategorias, setPartentCategorias]= useState<CustomCategoria[] | null>(null); 
    const [selectedCategoria, setSelectedCategorias]= useState<CustomCategoria | null>(null); 
    const handleOpenChange = (open: boolean)=>{
        setPartentCategorias(null);
        setSelectedCategorias(null);
        onOpenChange(open);
    };

    // Si tenemos categorias padres, mostramos esas, si no mostramos la categorias root
    const currentCategorias = parentCategorias ?? data ?? [];
    const handleCategoriaClick= (categoria: CustomCategoria)=>{
        if(categoria.subcategorias && categoria.subcategorias.length > 0 ){
            setPartentCategorias(categoria.subcategorias as CustomCategoria[]);
            setSelectedCategorias(categoria);
        }else{
            if(parentCategorias && selectedCategoria){
                router.push(`/${selectedCategoria.slug}/${categoria.slug}`);
            }else{
                if(categoria.slug ==="todo"){
                    router.push("/");
                }else{
                    router.push(`/${categoria.slug}`);
                }
            }
            handleOpenChange(false);
        }
    }
    const backgroundColor = selectedCategoria?.color || "white";   
    const handleBackClick = ()=>{
        if(parentCategorias){
            setPartentCategorias(null);
            setSelectedCategorias(null);
        }
    };
    
    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetContent
            side="left"
            className="p-0 transition-none"
            style={{backgroundColor}}
            >
                <SheetHeader className="p-4 boder-b">
                    <SheetTitle>
                        Categorias
                    </SheetTitle>
                </SheetHeader>
             <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                {parentCategorias && (
                    <button
                        onClick={handleBackClick}
                        className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer"
                    >
                        <ChevronLeftIcon className="size-4 mr-2"/>
                        Anterior
                    </button>
                )}
                {currentCategorias.map((categoria)=>(
                    <button
                        key={categoria.slug}
                        onClick={()=> handleCategoriaClick(categoria)}
                        className="w-full text-left p-4 hover:bg-black hover:text-white flex  justify-between items-center text-base font-medium cursor-pointer"
                    >
                        {categoria.name}
                        {categoria.subcategorias && categoria.subcategorias.length > 0 && (
                            <ChevronRightIcon className="size-4"/>
                        )}
                    </button>
                ))}
             </ScrollArea>
            </SheetContent>
 
        </Sheet>
    )
}