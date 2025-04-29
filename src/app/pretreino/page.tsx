"use client"
import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {

  return (
    <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
        <_menu />
      <div className=" h-[120px] flex flex-col md:flex-row items-center justify-center gap-2 p-18 mt-45 mr-40">
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
            src={"/assets/pre-treino.png"}
            width={800}
            height={800}
            alt="Pré-treino"
        />
      </div>
      <div className="w-[450px] md:w 1/5 rounded 3x1 shadow-lg p-6 border-2 border-energyze-primary">
        <h1 className="text-3x1 text-white font-bold mb-5">Pré Treino Energyze</h1>
        <p className="text-white text-lg mb-6">
         O Pré-Treino Energyze é um suplemento potente 
         desenvolvido para aumentar a energia,
         foco e resistência durante os treinos. 
         Ideal para quem busca melhorar o desempenho 
         e intensificar os resultados nas atividades físicas. 
         Em dois sabores, Pink Lemonade e Tangerina
        </p>
        <button
          className="bg-energyze-primary text-white font-bold py-2 px-4 border-2 rounded-md hover:transition-all hover:bg-purple-700 hover:border-black"
          onClick={() => window.open("https://produto.mercadolivre.com.br/MLB-4045897809-energyze-pre-treino-pink-lemonade-pote-240g-_JM", "_blank")}
          >
            Pink Lemonade
          </button>
          <button
          className="bg-energyze-primary text-white font-bold py-2 px-4 border-2 rounded-md hover:transition-all hover:bg-orange-400 hover:border-black ml-10"
          onClick={() => window.open("https://produto.mercadolivre.com.br/MLB-4046100507-energyze-pre-treino-tangerina-pote-240g-_JM", "_blank")}
          >
            Tangerina
          </button>
      </div>
      </div>
      <_footer />
    </div>
  );
}

//atualizar link ML