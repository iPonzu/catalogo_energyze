import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Energyze",
  description: "A cada gota de suor, uma vitória!",
};

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full flex flex-col items-center justify-center p-4">
      <Image
        src={"/assets/team_energyze_logo.png"}
        width={150}
        height={150}
        alt="TeamEnergyze"
      />
    </div>
  );
}