import { CollectionConfig } from "payload";

export const Categorias : CollectionConfig = {
    slug: "categorias",
    fields: [
        {
        name: "name",
        type: "text",
        required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
            index: true,
        },
        {
            name: "color",
            type: "text",
        },
        {
            name: "parent",
            type: "relationship",
            relationTo: "categorias",
            hasMany: false,
        },
        {
            name:"subcategorias",
            type:"join",
            collection:"categorias",
            on:"parent",
            hasMany:true,
        }
    ],
};