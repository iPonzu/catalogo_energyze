import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {

  return (
    <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
      <_menu />
      <div className="absolute object-center">
        <Image
            src={"/assets/wheyprotein.png"}
            width={350}
            height={350}
            alt="Whey Protein"
        />
      </div>
    </div>
  );
}