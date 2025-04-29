"use client"
import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {

  return (
    <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
      <_menu />
      <div className="h-[120px] flex flex-col md:flex-row items-center justify-center gap-2 p-2 mt-45  mr-40">
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
            src={"/assets/creatina.png"}
            width={800}
            height={800}
            alt="Creatina"
        />
      </div>
      <div className="w-full md:w-1/5 rounded-2x1 shadow-lg p-6 border-2 border-bg-primary flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-bold mb-5">Creatina monohidratada Energyze</h1>
        <p className="text-white text-lg mb-6">
          Aumente sua performance com a nossa creatina de alta qualidade, 
          proporcionando mais força, resistência e resultados reais!
        </p>
        <button
          className="bg-energyze-primary text-white font-bold py-2 px-4 border-2 rounded-md hover:transition-all hover:bg-purple-700 hover:border-black"
          onClick={() => window.open("https://produto.mercadolivre.com.br/MLB-4045870721-energyze-creatina-monohidratada-po-pote-300g-_JM", "_blank")}
          >
            Comprar agora
          </button>
      </div>
      </div>
      <_footer />
    </div>
  );
}

