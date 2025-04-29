"use client"
import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";




export default function Page() {

  return (
      <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
        <_menu />
        <div className="h-[120px] flex flex-col md:flex-row items-center justify-center gap-2 p-18 mt-45 mr-40">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
              src={"/assets/slimfit.png"}
              width={160}
              height={160}
              alt="Slim-fit"
          />
        </div>
      <div className="w-full md:w-1/5 rounded-2x1 shadow-lg p-6 border-2 border-bg-primary flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold mb-5">Slim Fit</h1>
      <p>
        Um produto 100% natural que te ajuda a inibir o apetite,
        e ao mesmo tempo te auxilia no dia-a-dia com sua dieta, com um resultado
        arrasador e de alto nível.
      </p>
      {/* <button
          className="bg-energyze-primary text-white font-bold py-2 px-4 border-2 rounded-md hover:transition-all hover:bg-purple-700 hover:border-black"
          onClick={() => window.open("https://produto.mercadolivre.com.br/MLB-4045870721-energyze-creatina-monohidratada-po-pote-300g-_JM", "_blank")}
          >
          Comprar agora
          </button> */} 
          {/* LINK DO MERCADO LIVRE INEXISTENTE */}
      </div>
      </div>
      <_footer />
    </div>
  );
}
