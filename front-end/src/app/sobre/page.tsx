import { EXPERIENCIA_SOBRE, VALORES_SOBRE } from '../../shared/cards_mock/sobre_mock/card_mock'

export default function Sobre() {
  return (
    <div
      className="bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)] md:bg-[url('/evermont/assets/background.jpg')] flex items-center justify-center min-h-screen md:min-h-[calc(215vh-20px)] w-full flex-col bg-cover bg-bottom bg-no-repeat text-white"
    >
      <div className="w-[85%] md:w-[50%] pt-40 md:pt-40">
        <div className="mb-28">
          <h1 className="text-3xl font-bold mb-8">Sobre Nós</h1>
          <p className="text-[1.1rem] mb-4 tracking-wide">
            A Evermont Consultoria fornece soluções assertivas e decisões
            estratégicas para impulsionar negócios. Nossa expertise em
            consultoria de gestão e tecnologia permite identificar oportunidades
            de melhoria e crescimento sustentável, entregando resultados sólidos
            e integrados com as melhores práticas de mercado. Atuamos com
            transparência e foco em dados para transformar desafios em
            conquistas reais para sua empresa.
          </p>
          <img
            className="w-full rounded-xl mt-8 shadow-xl md:block hidden"
            src="/evermont/assets/card_sobre_page.jpg"
          />
        </div>
        <h2 className="text-3xl font-bold mb-10">Nossa Experiencia</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {EXPERIENCIA_SOBRE.map((card) => (
                    <div
                      key={card.id}
                      className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
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

        <h2 className="text-3xl font-bold mt-20 mb-10">Visão, Missão e Valores</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
                  {VALORES_SOBRE.map((card) => (
                    <div
                      key={card.id}
                      className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
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
      </div>
    </div>
  );
}
