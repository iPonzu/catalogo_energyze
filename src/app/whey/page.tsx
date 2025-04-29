"use client"
import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {

  return (
    <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
      <_menu />
      <div className="h-[120px] flex flex-col md:flex-row items-center justify-center gap-2 p-2 mt-45 mr-40">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
              src={"/assets/wheyprotein.png"}
              width={250}
              height={250}
              alt="Whey Protein"
          />
      </div>
      <div className="w-full md:w-1/5 rounded-2xl shadow-lg p-6 border-2 border-bg-primary flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-bold mb-5">Whey Protein</h1>
        <p className="text-white text-lg mb-6">
          O Whey Protein Energyze é um suplemento de alta qualidade, 
          ideal para quem busca aumentar a massa muscular e melhorar a recuperação pós-treino.
          Contando com baixos aditivos e corantes em sua fórmula!
        </p>
        <button
          className="bg-energyze-primary text-white font-bold py-2 px-4 border-2 rounded-md hover:transition-all hover:bg-purple-700 hover:border-black"
          onClick={() => window.open("https://produto.mercadolivre.com.br/MLB-5368901130-energyze-whey-protein-po-pote-900g-_JM", "_blank")}
          >
            Comprar agora
          </button>
      </div>
      </div>
      <_footer />
    </div>
  );
}