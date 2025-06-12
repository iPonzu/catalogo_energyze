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
              src="/assets/creatina.png"
              width={500}
              height={500}
              alt="Creatina"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white border bg-purple-950 border-white p-6 backdrop-blur-sm">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Creatina Energyze</h1>
            <p className="text-sm sm:text-base mb-6">
              Aumente sua performance com a nossa creatina de alta qualidade, proporcionando mais força, resistência e resultados reais!
            </p>
            <button
              className="bg-transparent text-white font-bold py-2 px-4 border border-white  hover:bg-black transition"
              onClick={() =>
                window.open(
                  "https://produto.mercadolivre.com.br/MLB-4045870721-energyze-creatina-monohidratada-po-pote-300g-_JM",
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

