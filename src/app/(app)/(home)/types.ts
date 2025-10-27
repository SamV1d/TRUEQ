import { Categoria } from "@/payload-types";


export type CustomCategoria =  Categoria & {
    subcategorias: Categoria [],
};
