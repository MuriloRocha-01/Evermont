import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import Image from 'next/image'
function Footer() {
  return (
    <div className="bg-[#050c1a]/90 text-[#919092] text-center md:text-start p-4 flex items-center flex-col justify-around gap-3">
      <section className="flex flex-col gap-3 items-center">
          <Link href="/">
            <Image
              src="/evermont/assets/logo_evermont.png"
              alt="Evermont Group Logo"
              width={168} // Valor de referência para o maior tamanho (w-42 = 168px)
              height={50}  // Valor de referência para a proporção
              className="w-32 md:w-42 h-auto object-contain"
              priority
            />
          </Link>
      </section>
      <div className="border-b-1 border-[#919092]/70 w-[95%] md:w-[90%] "></div>
      <div className="block md:flex md:justify-around justify-center items-center w-[93%] md:w-full text-[0.9rem] md:text-base">
        <section className="flex flex-col justify-center gap-2 md:pb-0 pb-5">
          <div className="flex gap-2 md:gap-3">
          <a href="mailto:evermontconsultoria@gmail.com.br" target="_blank">
            <IconMail stroke={1.2} size={24} color="#919092" />
          </a>
          <p>evermontconsultoria@gmail.com.br</p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <a href="mailto:contato@orangesystems.com.br" target="_blank">
            <IconMail stroke={1.2} size={24} color="#919092" />
            </a>
            <p>contato@orangesystems.com.br</p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <IconPhone stroke={1.2} size={24} color="#919092" />
            <p>(13) 3411-3387</p>
          </div>
          <div className="flex gap-2 md:gap-3 text-start">
            <IconMapPin stroke={1.2} size={24} color="#919092" className="items-start shrink-0" />
            <p>
              Sede: Av. Padre Anchieta 1702 sala 4 - Stella Maris - Peruíbe/SP
            </p>
          </div>
        </section>
        <section>
          <p>
            &copy; 2026{" "}
            <a href="https://www.orangesystems.com.br/" target="_blank">
              Orange Custom Systems.
            </a>{" "}
            Todos os direitos reservados.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
