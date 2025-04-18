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
      <Link
        className=""
        href={"/creatina"}
      >
        <Image
          src={"/assets/creatina.png"}
          alt="Creatina"
          width={350}
          height={350}
        />
      </Link>
    </div>
  );
}
