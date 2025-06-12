"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-energyze-gradient flex flex-col items-center pt-10 px-4">
      <div className="flex justify-center">
        <Image
          src={"/assets/energyze_logo.png"}
          alt="Energyze Logo"
          width={500}
          height={500}
          className="w-auto max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="flex flex-col items-center group"
          whileHover={{ scale: 1.05 }}
        >
          <Link href={"/creatina"} className="w-full flex justify-center">
            <div className="w-full max-w-[300px] h-[250px] flex items-center justify-center bg-white/10 rounded-xl p-4">
              <Image
                src={"/assets/creatina.png"}
                alt="Creatina"
                width={300}
                height={300}
                className="h-auto"
              />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-col items-center group"
          whileHover={{ scale: 1.05 }}
        >
          <Link href={"/pretreino"} className="w-full flex justify-center">
            <div className="w-full max-w-[300px] h-[250px] flex items-center justify-center bg-white/10 rounded-xl p-4">
              <Image
                src={"/assets/pre-treino.png"}
                alt="Pré Treino"
                width={300}
                height={300}
                className="h-auto"
              />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-col items-center group"
          whileHover={{ scale: 1.05 }}
        >
          <Link href={"/whey"} className="w-full flex justify-center">
            <div className="w-full max-w-[300px] h-[250px] flex items-center justify-center bg-white/10 rounded-xl p-4">
              <Image
                src={"/assets/wheyprotein.png"}
                alt="Whey Protein"
                width={125}
                height={125}
                className="h-auto"
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
