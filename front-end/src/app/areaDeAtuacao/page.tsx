import { CARD_MOCK, METODOLOGIA_MOCK } from '../../shared/cards_mock/areasDeAtuacao_mock/card_mock';

function AreaDeAtuacao() {
  return (
    <div
      id="area-atuacao"
      className="bg-[url('/evermont/assets/bg-sobre-contato.jpg')] flex items-center justify-center min-h-screen md:min-h-[150vh] w-full flex-col bg-cover bg-center bg-no-repeat text-white px-8 py-38 md:px-102"
    >
      <div className=" text-[#393756] flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-wide">
          Áreas de Atuação
        </h1>
        <p className="text-[1.1rem] leading-relaxed text-[#393756]/80">
          Soluções personalizadas para cada desafio empresarial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {CARD_MOCK.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)] border border-white/10 "
            >
              <div className="mb-6">
                <img src={card.icon} alt={card.alt} />
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

      <div className=" mt-32 text-[#393756] flex flex-col gap-6">
        <h1 className="text-4xl font-semibold mb-4 tracking-wide text-start">
          Como Conduzimos a Transformação
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {METODOLOGIA_MOCK.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)] border border-white/10"
            >
              <div className="mb-6">
                <img src={card.icon} alt={card.alt} />
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

export default AreaDeAtuacao;