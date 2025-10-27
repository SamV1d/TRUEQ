import { getPayload } from "payload"
import config from "./payload.config.js"

const categorias = [
  {
    name: "Todo",
    slug: "todo",
  },
  {
    name: "Tecnología",
    color: "#FFB347",
    slug: "tecnologia",
    subcategories: [
      { name: "Celulares", slug: "celulares" },
      { name: "Computadoras", slug: "computadoras" },
      { name: "Tablets", slug: "tablets" },
      { name: "Consolas de Videojuegos", slug: "consolas" },
      { name: "Accesorios", slug: "accesorios-tech" },
      { name: "Audio y Video", slug: "audio-video" },
      { name: "Cámaras", slug: "camaras" },
      { name: "Smartwatches", slug: "smartwatches" },
      { name: "Otros Electrónicos", slug: "otros-electronicos" },
    ],
  },
  {
    name: "Vehículos",
    color: "#7EC8E3",
    slug: "vehiculos",
    subcategories: [
      { name: "Autos", slug: "autos" },
      { name: "Motos", slug: "motos" },
      { name: "Camionetas", slug: "camionetas" },
      { name: "Repuestos", slug: "repuestos" },
      { name: "Accesorios", slug: "accesorios-vehiculos" },
    ],
  },
  {
    name: "Moda",
    color: "#D8B5FF",
    slug: "moda",
    subcategories: [
      { name: "Ropa Mujer", slug: "ropa-mujer" },
      { name: "Ropa Hombre", slug: "ropa-hombre" },
      { name: "Calzado", slug: "calzado" },
      { name: "Accesorios", slug: "accesorios-moda" },
      { name: "Bolsos y Maletas", slug: "bolsos-maletas" },
    ],
  },
  {
    name: "Otros",
    slug: "otros",
  },
  {
    name: "Hogar y Muebles",
    color: "#FFE066",
    slug: "hogar-muebles",
    subcategories: [
      { name: "Muebles", slug: "muebles" },
      { name: "Electrodomésticos", slug: "electrodomesticos" },
      { name: "Decoración", slug: "decoracion" },
      { name: "Jardín", slug: "jardin" },
    ],
  },
  {
    name: "Deportes",
    color: "#96E6B3",
    slug: "deportes",
    subcategories: [
      { name: "Equipamiento", slug: "equipamiento-deportivo" },
      { name: "Ropa Deportiva", slug: "ropa-deportiva" },
      { name: "Bicicletas", slug: "bicicletas" },
      { name: "Camping", slug: "camping" },
    ],
  },
  {
    name: "Inmuebles",
    color: "#FF9AA2",
    slug: "inmuebles",
    subcategories: [
      { name: "Casas", slug: "casas" },
      { name: "Departamentos", slug: "departamentos" },
      { name: "Terrenos", slug: "terrenos" },
      { name: "Locales", slug: "locales" },
    ],
  },
  {
    name: "Mascotas",
    color: "#B5B9FF",
    slug: "mascotas",
    subcategories: [
      { name: "Alimentos", slug: "alimentos-mascotas" },
      { name: "Accesorios", slug: "accesorios-mascotas" },
      { name: "Juguetes", slug: "juguetes-mascotas" },
      { name: "Servicios", slug: "servicios-mascotas" },
    ],
  },
  {
    name: "Juegos y Juguetes",
    color: "#FFCAB0",
    slug: "juegos-juguetes",
    subcategories: [
      { name: "Videojuegos", slug: "videojuegos" },
      { name: "Juguetes", slug: "juguetes" },
      { name: "Juegos de Mesa", slug: "juegos-mesa" },
      { name: "Juegos Educativos", slug: "juegos-educativos" },
      { name: "Coleccionables", slug: "coleccionables" },
    ],
  },
  {
    name: "Servicios",
    color: "#FFD700",
    slug: "servicios",
    subcategories: [
      { name: "Mantenimiento", slug: "mantenimiento" },
      { name: "Reparaciones", slug: "reparaciones" },
      { name: "Transporte", slug: "transporte" },
      { name: "Limpieza", slug: "limpieza" },
    ],
  },
  {
    name: "Herramientas",
    color: "#FF6B6B",
    slug: "herramientas",
    subcategories: [
      { name: "Eléctricas", slug: "herramientas-electricas" },
      { name: "Manuales", slug: "herramientas-manuales" },
      { name: "Jardín", slug: "herramientas-jardin" },
      { name: "Industrial", slug: "herramientas-industrial" },
      { name: "Medición", slug: "herramientas-medicion" },
    ],
  },
  {
    name: "Belleza y Cuidado Personal",
    color: "#FFC0CB",
    slug: "belleza-cuidado",
    subcategories: [
      { name: "Maquillaje", slug: "maquillaje" },
      { name: "Cuidado de la Piel", slug: "cuidado-piel" },
      { name: "Perfumes", slug: "perfumes" },
      { name: "Peluquería y Salón", slug: "peluqueria" },
    ],
  },
  {
    name: "Bebés y Niños",
    color: "#AEDFF7",
    slug: "bebes-ninos",
    subcategories: [
      { name: "Ropa de Bebé", slug: "ropa-bebe" },
      { name: "Juguetes Infantiles", slug: "juguetes-infantiles" },
      { name: "Cochecitos y Sillas", slug: "carritos-sillas" },
      { name: "Alimentación y Cuidado", slug: "alimentacion-cuidado" },
    ],
  },
  {
    name: "Alimentos y Bebidas",
    color: "#FFD8A8",
    slug: "alimentos-bebidas",
    subcategories: [
      { name: "Alimentos envasados", slug: "alimentos-envasados" },
      { name: "Bebidas", slug: "bebidas" },
      { name: "Orgánicos", slug: "organicos" },
      { name: "Vinos y Licores", slug: "vinos-licores" },
    ],
  },
  {
    name: "Joyería y Relojes",
    color: "#E6E6FA",
    slug: "joyeria-relojes",
    subcategories: [
      { name: "Anillos", slug: "anillos" },
      { name: "Collares", slug: "collares" },
      { name: "Relojes", slug: "relojes" },
      { name: "Pulseras", slug: "pulseras" },
    ],
  },
  {
    name: "Arte y Coleccionables",
    color: "#D1F2A5",
    slug: "arte-coleccionables",
    subcategories: [
      { name: "Pinturas", slug: "pinturas" },
      { name: "Grabados", slug: "grabados" },
      { name: "Figurines", slug: "figurines" },
      { name: "Monedas y Billetes", slug: "monedas-billetes" },
    ],
  },
  {
    name: "Oficina y Papelería",
    color: "#F0E68C",
    slug: "oficina-papeleria",
    subcategories: [
      { name: "Muebles de Oficina", slug: "muebles-oficina" },
      { name: "Suministros", slug: "suministros" },
      { name: "Papelería", slug: "papeleria" },
    ],
  },
]

const seed = async () => {
  const payload = await getPayload({ config });
  // helper: sleep for backoff
  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // helper: retry transient write conflicts (Mongo WriteConflict / TransientTransactionError)
  async function retryOperation<T>(fn: () => Promise<T>, attempts = 5, delay = 250): Promise<T> {
    let lastErr: unknown;
    for (let i = 0; i < attempts; i++) {
      try {
        return await fn();
      } catch (err: any) {
        lastErr = err;
        const code = err?.errorResponse?.code ?? err?.code;
        const codeName = err?.codeName;
        const labels = err?.errorLabels || err?.errorLabelSet || err?.errorLabels?.toArray?.() || [];
        const isTransient = code === 112 || codeName === 'WriteConflict' || (Array.isArray(labels) && labels.includes('TransientTransactionError')) || (err && String(err).includes('WriteConflict'));

        if (i === attempts - 1 || !isTransient) {
          throw err;
        }

        const backoff = delay * (i + 1);
        console.warn(`Transient error detected (attempt ${i + 1}/${attempts}). Retrying after ${backoff}ms...`, err?.message ?? err);
        await sleep(backoff);
      }
    }
    throw lastErr;
  }
    for (const categoria of categorias){
    const parentCategoria = await retryOperation(() => payload.create({
      collection: "categorias",
      data: {
        name: categoria.name,
        slug: categoria.slug,  
        color: categoria.color,
        parent: null,
      },
    }));

    for (const subcategoria of categoria.subcategories || []){
      await retryOperation(() => payload.create({
        collection: "categorias",
        data:{
          name: subcategoria.name,
          slug: subcategoria.slug,
          parent: parentCategoria.id,
        },
      }));
    }
        }
    }

    try {
        await seed();
        console.log("Seed completado con éxito.");
        process.exit(0);       
    } catch (error) {
        console.error("Error", error);
        process.exit(1);
    }