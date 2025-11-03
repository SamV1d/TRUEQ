import { CustomCategoria } from "../types";
import { Categorias } from "./categorias";
import { SearchInput } from "./search-input";

interface Props{
    data: CustomCategoria [];
};
export const SearchFilters = ({
    data
}: Props) => {

  return(
   <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
        <SearchInput data={data}/>
        <div className="hidden lg:block">
          <Categorias data={data}/>
        </div>
     
        
   </div>
   );
};