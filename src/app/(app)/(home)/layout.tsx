import { Categoria } from '@/payload-types';
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import {Footer} from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
    children: React.ReactNode;

};
 const Layout = async ({children} : Props) => {
  const payload = await getPayload({
        config: configPromise,
      });

  const data = await payload.find({
      collection: "categorias",
      depth: 1,
      pagination: false,
      where: {
        parent: { exists: false },
      },
    });

    const formattedData = data.docs.map((doc) =>({
      ...doc,
      subcategorias: (doc.subcategorias?.docs ?? []).map((doc) => ({
        //Debido a "depth: 1", estamos seguros de que "doc" será de un tipo de "Categoria"
        ...(doc as Categoria),
        subcategorias: undefined,
      })),
    }))

    return (
         <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <SearchFilters data={formattedData}/>
          <div className="flex-1 bg-[#F4F4F0]">
            {children}
          </div>
            <Footer />
        </div>
    ); 
 }

 export default Layout;