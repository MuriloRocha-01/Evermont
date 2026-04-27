import {
  EXPERIENCIA_SOBRE,
  VALORES_SOBRE,
} from "../../shared/cards_mock/sobre_mock/card_mock";
import Image from 'next/image'

export default function Sobre() {
  return (
      <div className="text-[#393756] bg-[#eae9ef] flex items-center justify-center min-h-screen w-full flex-col bg-cover ">
        <div className="px-8 md:px-102 text-start py-38 text-white items-center justify-center bg-[url('/evermont/assets/bg-sobre-contato.jpg')] min-h-[100vh] min-w-full bg-cover bg-bottom bg-no-repeat flex flex-col gap-6">
          <h1 className="w-full text-3xl font-bold">Sobre Nós</h1>
          <p className="w-full md:text-[1.2rem] text-[1.1rem] text-gray-300 leading-relaxed">
            A Evermont Consultoria fornece soluções assertivas e decisões
            estratégicas para impulsionar negócios. Nossa experiencia em
            consultoria de gestão e tecnologia permite identificar oportunidades
            de melhoria e crescimento sustentável, entregando resultados sólidos
            e integrados com as melhores práticas de mercado. Atuamos com
            transparência e foco em dados para transformar desafios em
            conquistas reais para sua empresa.
          </p>
          <Image
            className="w-full h-auto rounded-xl md:block hidden object-cover md:block hidden"
            src="/evermont/assets/card_sobre_page.jpg"
            alt="Sobre a Evermont"
            width={800} 
            height={450} 
            priority 
          />
        </div>

        <section className="px-8 md:px-102 text-center my-20">
        <h2 className="text-3xl font-bold mb-10">Nossa Experiencia</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {EXPERIENCIA_SOBRE.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl border-xl bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)]"
            >
              <div className="mb-6">
                <img src={card.icon} />
              </div>

              <h2 className="text-2xl font-bold mb-4 h-16 flex items-center">
                {card.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-20 mb-10">
          Visão, Missão e Valores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 text-white">
          {VALORES_SOBRE.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl border-xl bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)] hover:scale-102 transition duration-300 ease-in-out"
            >
              <div className="mb-6">
                <img src={card.icon} />
              </div>

              <h2 className="text-2xl font-bold mb-4 h-16 flex items-center">
                {card.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
          
        </div>
        </section>
      </div>
  );
}
