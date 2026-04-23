import Link from "next/link";
import { CARD_MOCK } from "../shared/cards_mock/home_mock/card_mock";
import { experienceStats } from "../shared/cards_mock/home_mock/card_mock";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <div
        className={`min-h-[100vh] min-w-full bg-[url('/evermont/assets/background_mobile.jpg')] md:bg-[url('/evermont/assets/background_homePage.jpg')] bg-cover bg-bottom bg-no-repeat flex flex-col justify-center md:px-[14%] px-[5%] pb-[10%] gap-8`}
      >
        <h1 className="max-w-none md:max-w-[600px] text-start lg:text-4xl text-xl font-bold text-white tracking-wide leading-6 md:leading-10">
          Transformamos dados em 
          <span className="text-[#7CB6D8] mx-2 md:mx-3">clareza estratégica</span>
          para decisões que movem empresas.
        </h1>

        <p className="text-start md:text-[1.2rem] text-[1.1rem] text-gray-300 leading-relaxed max-w-none md:max-w-[470px]">
          Soluções para empresas que buscam orientação 
          baseada em dados, eficiência operacional e crescimento
          sustentável.
        </p>

        <Link href="/contato">
          <button className="cursor-pointer shadow-lg font-sm rounded-full py-3 px-6 md:py-2 md:px-14 bg-gradient-to-r from-[#5089B0] to-[#2F5A83] hover:scale-103 transition duration-300 ease-in-out">
            Fale com um Consultor
          </button>
        </Link>
      </div>
      

      <div
        className="bg-[url('/evermont/assets/background_mobile02.jpg')] md:bg-[url('/evermont/assets/background_homePage02.jpg')] min-h-[50vh] md:min-h-[74vh] min-w-full bg-cover bg-no-repeat flex flex-col justify-center md:px-[14%] px-[5%] gap-6 pb-0 md:pb-42"
      >
        <h1 className="text-start md:text-4xl text-xl font-bold text-white tracking-wide leading-6 md:leading-10">
          Estratégia alinhada <br />
          <span className="text-[#7CB6D8] mr-3">a Resultados Reais</span>
        </h1>

        <p className="text-start text-gray-300 leading-relaxed md:text-[1.2rem] text-[1.1rem] max-w-full md:max-w-[450px]">
          A Evermont Consultoria transforma desafios empresariais complexos em decisões estruturadas e orientadas por informação.
        </p>
      </div>

      <div className="bg-[#eae9ef] w-full h-full flex flex-col items-center justify-center gap-6 py-10 text-center">
        <h2 className="text-[#393756]  text-3xl font-bold">
          Nossa Experiência
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[85%] md:w-[60%]">
          {experienceStats.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-t-xl bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)]"
            >
              <h2 className="text-5xl font-bold mb-2 h-16 flex items-center">
                {card.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-[#393756] text-3xl font-bold pt-12">Como Atuamos</h2>
        <p className="text-[#393756]/80 text-lg lg:px-[15%] px-[5%]">
          A Evermont Consultoria transforma desafios empresariais complexos em
          decisões <br/> estruturadas e orientadas por informação e eficácia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[85%] md:w-[60%] pb-10">
          {CARD_MOCK.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)]"
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
