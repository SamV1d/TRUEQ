import { Categoria } from "@/payload-types";
import { CategoriaDropdown } from "./categoria-dropdown";
interface Props{
    data: any;
}

export const Categorias = ({data}: Props) => {
    return(
        <div className="relative w-full">
        <div className="flex flex-nowrap items-center">
             {data.map((categoria: Categoria) => (
                <div key={categoria.id}>
                    <CategoriaDropdown 
                    categoria={categoria}
                    isActive={false}
                    isNavigationHovered={false}
                    />
                </div>
              ))}
        </div>
           
        </div>
    );
};