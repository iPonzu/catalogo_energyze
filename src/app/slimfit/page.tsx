import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {

  return (
      <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
        <_menu />
      <div className="mt-10 w-[1400px] h-[650px] flex items-center justify-center">
        <Image
            src={"/assets/slimfit.png"}
            width={250}
            height={250}
            alt="Slim-fit"
        />
      </div>
      <_footer />
    </div>
  );
}