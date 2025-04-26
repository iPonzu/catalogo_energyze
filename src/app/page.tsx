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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10;">
      <Link
        className="flex flex-col items center group"
        href={"/creatina"}
      >
        <Image
          src={"/assets/creatina.png"}
          alt="Creatina"
          width={350}
          height={350}
        />
      </Link>

      <Link
        className="flex flex-col items center group"
        href={"/pretreino"}
      >
        <Image 
          src={"/assets/pre-treino.png"}
          alt="Pré Treino"
          width={350}
          height={350}
          />
      </Link>

      <Link
        className="flex flex-col items center group"
        href={"/slimfit"}
      >
        <Image 
          src={"/assets/slimfit.png"}
          alt="Slim Fit"
          width={110}
          height={110}
        />
      </Link>

      <Link 
        className="flex flex-col items center group"
        href={"/whey"}
      >
        <Image 
          src={"/assets/wheyprotein.png"}
          alt="Whey Protein"
          width={110}
          height={110}
        />
      </Link>
      </div>
    </div>
  );
}
