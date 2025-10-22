import { Categoria } from "@/payload-types";
import Link from "next/link";
interface Props {
    categoria: Categoria;
    isOpen: boolean;
    posicion: { top: number; left: number };

}

export const SubcategoriaMenu = ({
    categoria,
    isOpen,
    posicion
}: Props) =>{
    if(!isOpen || !categoria.subcategorias || categoria.subcategorias.length === 0){
        return null;
    }

    const backgroundColor = categoria.color || "#F5F5F5";
    return(
        <div
        className="fixed z-100"
        style={{
            top: posicion.top,
            left: posicion.left,
        }
        }
        >
            {}
            <div className="h-3 w-60"/>
            <div 
            style={{backgroundColor}}
            className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translete-x-[2px] -translate-y-[2px]">
                <div>
                    {categoria.subcategorias?.map((subcategoria: Categoria)=>(
                        <Link 
                        key={subcategoria.slug}
                        href="/"
                        className= "w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
                        >
                        {subcategoria.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}