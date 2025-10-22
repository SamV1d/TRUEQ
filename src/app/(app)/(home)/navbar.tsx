"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

interface NavBarItemsProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavBarItem = ({
    href,
    children,
    isActive,
}: NavBarItemsProps) => {
    return (
       <Button 
       asChild
       variant="outline"
       className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
       )}>
        <Link href={href}>
         {children}
        </Link>
       
       </Button>
    );
};

const navBarItems = [
    { href: "/", children: "Menu Principal" },
    { href: "/Acerca_de_nosotros", children: "Acerca de nosotros" },
    { href: "/Contacto", children: "Contacto" },
    { href: "/Precios", children: "Precios" },
    //{ href: "/Iniciar_Sesion", children: "Iniciar Sesion" },
    //{ href: "/Trueques", children: "Trueques" },
];

export const Navbar = () => {
    const pathname = usePathname();
    const [isSiderbardOpen, setIsSidebarOpen] =useState(false);
    return (
      <nav className="h-20 flex border-b justify-between font-medium bg-white">
       <Link href="/" className="pl-6 flex items-center">
       <span className={cn("text-6xl font-semibold", poppins.className)}>TrueQ</span>

       </Link>
        <NavbarSidebar 
                items={navBarItems}
                open={isSiderbardOpen}
                onOpenChange={setIsSidebarOpen}
                />
         <div className="items-center gap-4 hidden lg:flex"> 
              {navBarItems.map((item) => (  
                <NavBarItem 
                key={item.href} href={item.href}
                isActive={pathname === item.href}>
                    {item.children}
                </NavBarItem>
              ))} 
         </div>
        <div className="hidden lg:flex">
              <Button
              asChild
              variant="secondary"
              className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
              >
                <Link href="/Iniciar_Sesion" >
                Iniciar Sesión
                </Link>
               
              </Button>
              <Button
              asChild
              variant="secondary"
              className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
              >
                <Link href="/Trueques" >
                Trueques
                </Link>
              </Button>
        </div>
        <div className=" flex lg:hidden items-cente justify-center">
          <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon>

            </MenuIcon>
          </Button>

        </div>

      </nav>
    );
};