"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const [isAtuacao, setIsAtuacao] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const estaNaPaginaDeAtuacao = pathname === "/areaDeAtuacao" || isAtuacao;

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const getLinkStyle = (path: string) => 
    `cursor-pointer transition duration-200 block hover:scale-105 ${
      isActive(path) ? 'text-blue-400' : 'text-white hover:text-blue-400'
    }`;

  useEffect(() => {
    const section = document.getElementById("area-atuacao");

    if (!section) {
      setIsAtuacao(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtuacao(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "-95px 0px 0px 0px" },
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [pathname]);

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
          estaNaPaginaDeAtuacao
            ? "bg-[#132543] shadow-lg"
            : scrolled || isOpen
              ? "bg-[#0a192f]/50 backdrop-blur-md shadow-xl border-b border-white/10"
              : "bg-transparent border-none"
        }`}
      >
        <Link  href="/" onClick={() => setIsOpen(false)}>
          <Image
            priority
            src="/evermont/assets/logo_evermont.png"
            alt="Evermont Consultoria Logo"
            width={168}
            height={50}
            className="h-auto object-contain"
          />
        </Link>
        <ul className="hidden lg:flex justify-center items-center gap-10 text-white font-medium text-center">
          <li>
            <Link href="/" className={getLinkStyle('/')}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className={getLinkStyle('/sobre')} >
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/areaDeAtuacao" className={getLinkStyle('/areaDeAtuacao')}>
              Área de Atuação
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`px-6 py-2 rounded-full bg-gradient-to-t from-[#5089B0] to-[#2F5A83] ${isActive('/contato') ? "underline underline-offset-2 decoration-1 decoration-white shadow-[0_0_20px_rgba(80,137,176,0.6)] "
              : " opacity-90 hover:opacity-100"}`}
            >
              Fale Conosco
            </Link>
          </li>
        </ul>

        <button
          className="lg:hidden text-white focus:outline-none z-[110] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
        </button>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-[#0a192f]/50 backdrop-blur-md transition-all duration-500 ease-in-out z-[90] ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="text-white text-2xl flex flex-col gap-8 text-center font-light">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className={getLinkStyle('/')}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" onClick={() => setIsOpen(false)} className={getLinkStyle('/sobre')}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/areaDeAtuacao" onClick={() => setIsOpen(false)} className={getLinkStyle('/areaDeAtuacao')}>
                Área de Atuação
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                onClick={() => setIsOpen(false)}
                className={`inline-block mt-4 rounded-full px-10 py-3 bg-gradient-to-r from-[#5089B0] to-[#2F5A83] text-lg font-medium 
                  ${isActive('/contato') ? "underline underline-offset-2 decoration-1 decoration-white shadow-[0_0_20px_rgba(80,137,176,0.6)] " : " opacity-90 hover:opacity-100"}`}
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
