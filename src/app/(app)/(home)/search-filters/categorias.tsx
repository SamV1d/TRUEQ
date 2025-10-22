import { Categoria } from "@/payload-types";
import { CategoriaDropdown } from "./categoria-dropdown";
interface Props{
    data: any;
}

export const Categorias = ({data}: Props) => {
    return(
        <div>
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
    );
};