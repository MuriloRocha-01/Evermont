function Contato(){
    return(
        <div className="bg-[radial-gradient(circle_at_center,_#223965_0%,_#0a192f_100%)] md:bg-[url('/evermont/assets/background.jpg')] flex items-center justify-center md:min-h-screen w-full flex-col bg-cover bg-bottom bg-no-repeat py-40">
            <div className="w-[80%] md:w-[50%] text-start text-white">
            <h1 className="text-3xl font-bold mb-4 tracking-wide">Entre em Contato</h1>
            <p className="text-[1.1rem] mb-8 md:mb-4 tracking-wide">Converse com nossos consultores, discubra como podemos acelerar os resultados da sua empresa.</p>
            </div>
        <form className="px-[5%] md:px-9 bg-white text-black rounded-xl flex flex-col w-[80%] md:w-[50%] py-[8%] md:py-[2%] md:items-start items-center justify-center gap-2">
            <label className="text-[#4A5568] text-md font-medium mb-1 flex flex-col w-full">
                Digite o nome da empresa: 
                <input 
                className="h-8 rounded-md border-1 border-gray-300 focus:outline-none focus:border-[#2F5A83] transition-colors text-gray-700 mt-2" 
                >
                </input>
            </label>
            <label className="text-[#4A5568] text-md font-medium mb-1 flex flex-col w-full">
                Digite o e-mail:
                <input 
                className="h-8 rounded-md border-1 border-gray-300 focus:outline-none focus:border-[#2F5A83] transition-colors text-gray-700 mt-2"
                >
                </input>
            </label>
            <label className="text-[#4A5568] text-md font-medium mb-1 flex flex-col w-full">
                Digite a mensagem:
                <textarea 
                rows={5}
                className="h-22 rounded-md border-1 border-gray-300 focus:outline-none focus:border-[#2F5A83] transition-colors resize-none text-gray-700 mt-2">
                </textarea>
            </label>
            <button type="submit" className="mt-3 cursor-pointer shadow-lg font-sm rounded-full text-center w-[90%] px-3 md:w-62 h-10 bg-gradient-to-r from-[#5089B0] to-[#2F5A83] text-white">Enviar Mensagem</button>

        </form>
        </div>
    )
}

export default Contato;