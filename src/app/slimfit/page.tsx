import Image from "next/image";
import _menu from "../../../public/components/_menu";
import _footer from "../../../public/components/_footer";

export default function Page() {

  return (
      <div className="static h-screen bg-energyze-gradient flex flex-col pt-10">
        <_menu />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        <Image
            src={"/assets/slimfit.png"}
            width={110}
            height={110}
            alt="Slim-fit"
        />
      </div>
      <_footer />
    </div>
  );
}