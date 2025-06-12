"use client"
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
              src="/assets/wheyprotein.png"
              width={200}
              height={200}
              alt="Whey Protein"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white border bg-purple-950 border-white p-6 backdrop-blur-sm">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Whey Protein Energyze</h1>
            <p className="text-sm sm:text-base mb-6">
              O Whey Protein Energyze é um suplemento de alta qualidade, ideal para quem busca aumentar a massa muscular e melhorar a recuperação pós-treino. Contando com baixos aditivos e corantes em sua fórmula!
            </p>
            <button
              className="bg-transparent text-white font-bold py-2 px-4 border border-white hover:bg-black transition"
              onClick={() =>
                window.open(
                  "https://produto.mercadolivre.com.br/MLB-5368901130-energyze-whey-protein-po-pote-900g-_JM",
                  "_blank"
                )
              }
            >
              Comprar agora
            </button>
          </div>
        </div>
      </div>
      <_footer />
    </div>
  );
}