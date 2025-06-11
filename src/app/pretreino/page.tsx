"use client";
import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <_menu />

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/pre-treino.png"
              width={500}
              height={500}
              alt="Pré-treino"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white border border-white p-6 rounded-2xl backdrop-blur-sm bg-white/10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Pré Treino Energyze</h1>
            <p className="text-sm sm:text-base mb-6">
              O Pré-Treino Energyze é um suplemento potente desenvolvido para aumentar a energia,
              foco e resistência durante os treinos. Ideal para quem busca melhorar o desempenho
              e intensificar os resultados nas atividades físicas. Em dois sabores, Pink Lemonade e Tangerina.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-transparent text-white font-bold py-2 px-4 border border-white rounded-md hover:bg-purple-700 transition"
                onClick={() =>
                  window.open(
                    "https://produto.mercadolivre.com.br/MLB-4045897809-energyze-pre-treino-pink-lemonade-pote-240g-_JM",
                    "_blank"
                  )
                }
              >
                Pink Lemonade
              </button>
              <button
                className="bg-transparent text-white font-bold py-2 px-4 border border-white rounded-md hover:bg-orange-400 transition"
                onClick={() =>
                  window.open(
                    "https://produto.mercadolivre.com.br/MLB-4046100507-energyze-pre-treino-tangerina-pote-240g-_JM",
                    "_blank"
                  )
                }
              >
                Tangerina
              </button>
            </div>
          </div>
        </div>
      </div>
      <_footer />
    </div>
  );
}
