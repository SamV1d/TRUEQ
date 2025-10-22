import { RefObject } from "react"

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> |RefObject<HTMLDivElement>
) => {
    const getDownropPosition = () => {
        if (!ref.current) return{ top: 0, left: 0 };
        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240; // Ancho fijo del dropdown
        //Calcular la posicion inicial
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;
        // Ajustar la posicion si se desborda a la derecha
        if (left + dropdownWidth > window.innerWidth) {
            //Alinear a la derecha del elemento padre
            left = rect.right + window.scrollX - dropdownWidth;
            // si aun se desborda, alinear al borde izquierdo de la ventana
            if (left < 0) {
                left = window.innerWidth - dropdownWidth - 16; //16px de margen
            }
        }
        if (left < 0) {
            left = 16; //16px de margen
        }
        return { top, left };
    };
    return { getDownropPosition };
};