import { Categoria } from "@/payload-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface Props {
    categoria: Categoria
    isActive?: boolean;
    isNavigationHovered?: boolean;
}

export const CategoriaDropdown= ({
    categoria,
    isActive,
    isNavigationHovered
}: Props) => {
    return(
        <Button 
        variant="elevated"
        className={cn(
        "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black"
        )}>
            {categoria.name}
        </Button>
    )
}