import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {

  return (
    <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
      <_menu />
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-2 mt-45  mr-40">
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
            src={"/assets/creatina.png"}
            width={800}
            height={800}
            alt="Creatina"
        />
      </div>
      <div className="w-full md:w-1/5 rounded 2x1 shadow-lg p-6 border-2 border-energyze-primary">
        <h1 className="text-3xl text-white font-bold mb-5">Creatina Energyze</h1>
        <p className="text-white text-lg mb-6">
          Aumente sua performance com a nossa creatina de alta qualidade, 
          proporcionando mais força, resistência e resultados reais!
        </p>
      </div>
      </div>
      <_footer />
    </div>
  );
}