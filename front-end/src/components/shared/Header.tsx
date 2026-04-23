"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`shadow-xl fixed top-0 w-full flex items-center justify-between px-10 transition-all duration-500 ease-in-out z-[100] h-[95px] max-h-[200px] ${
          scrolled || isOpen
            ? "bg-[#0a192f]/50 backdrop-blur-md  shadow-xl border-b-1 border-white/10"
            : "bg-transparent border-none"
        }`}
      >
        <Link href="/">
          <img src="/evermont/assets/logo_evermont.png" className="w-32 lg:w-42 h-auto object-contain"/>
        </Link>
        <ul className="hidden lg:flex justify-center items-center gap-10 text-white font-medium text-center">
          <li><Link href="/" className="hover:text-blue-400">Início</Link></li>
          <li><Link href="/sobre" className="hover:text-blue-400">Sobre</Link></li>
          <li><Link href="/areaDeAtuacao" className="hover:text-blue-400">Área de Atuação</Link></li>
          <li>
            <Link href="/contato" className="bg-gradient-to-r from-[#5089B0] to-[#2F5A83] px-6 py-2 rounded-full">
              Fale Conosco
            </Link>
          </li>
        </ul>

        {/* BOTÃO MOBILE (Alterna entre Menu e X) */}
        <button
          className="lg:hidden text-white focus:outline-none z-[110] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (<IconX size={32} />) :
           (<IconMenu2 size={32} />) }
        </button>
      </nav>

      {/* OVERLAY DO MENU MOBILE */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0a192f]/50 backdrop-blur-md transition-all duration-500 ease-in-out z-[90] ${
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="text-white text-2xl flex flex-col gap-8 text-center font-light">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Início</Link></li>
            <li><Link href="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
            <li><Link href="/areaDeAtuacao" onClick={() => setIsOpen(false)}>Área de Atuação</Link></li>
            <li>
              <Link 
                href="/contato" 
                onClick={() => setIsOpen(false)}
                className="inline-block mt-4 rounded-full px-10 py-3 bg-gradient-to-r from-[#5089B0] to-[#2F5A83] text-lg font-medium"
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;