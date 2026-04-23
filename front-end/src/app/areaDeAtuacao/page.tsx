import { CARD_MOCK, METODOLOGIA_MOCK } from '../../shared/cards_mock/areasDeAtuacao_mock/card_mock';

function AreaDeAtuacao() {
  return (
    <div
      className="bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)] md:bg-[url('/evermont/assets/background.jpg')] flex items-center justify-center min-h-screen md:min-h-[150vh] w-full flex-col bg-cover bg-center bg-no-repeat text-white py-12 md:py-30"
    >
      <div className="w-[85%] md:w-[50%] pt-30 md:pt-10">
        <h1 className="text-3xl font-bold mb-8 tracking-wide">
          Áreas de Atuação
        </h1>
        <p className="text-xl mb-10 text-gray-300">
          Soluções personalizadas para cada desafio empresarial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARD_MOCK.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
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

      <div className="w-[85%] md:w-[50%] mt-32">
        <h1 className="text-4xl font-semibold mb-4 tracking-wide text-start mb-12">
          Como Conduzimos a Transformação
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METODOLOGIA_MOCK.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
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