import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-screen bg-energyze-gradient flex flex-col items-center space-between pt-10">
      <div className="object-top">
        <Image
          src={"/assets/energyze_logo.png"}
          alt="Energyze Logo"
          width={350}
          height={350}
        />
      </div>
      <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-2">

      <Link
        className="flex flex-col items center group"
        href={"/creatina"}
      >
        <div className="w-[400px] h-[250px] flex items-center justify-center">
        <Image
          src={"/assets/creatina.png"}
          alt="Creatina"
          width={400}
          height={400}
        />
        </div>
      </Link>

      <Link
        className="flex flex-col items center group"
        href={"/pretreino"}
      >
        <div className="w-[400px] h-[250px] flex items-center justify-center">
        <Image 
          src={"/assets/pre-treino.png"}
          alt="Pré Treino"
          width={400}
          height={400}
          />
        </div>
      </Link>

      <Link
        className="flex flex-col items center group"
        href={"/slimfit"}
      >
        <div className="w-[200px] h-[250px] flex items-center justify-center">
        <Image 
          src={"/assets/slimfit.png"}
          alt="Slim Fit"
          width={120}
          height={120}
        />
        </div>
      </Link>

      <Link 
        className="flex flex-col items center group"
        href={"/whey"}
      >
        <div className="w-[200px] h-[250px] flex items-center justify-center">
        <Image 
          src={"/assets/wheyprotein.png"}
          alt="Whey Protein"
          width={120}
          height={120}
        />
        </div>
      </Link>
      </div>
    </div>
  );
}
