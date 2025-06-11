"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import "./globals.css"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-energyze-gradient flex flex-col items-center space-between pt-10 py-1 px-14">
      <div className="object-top">
        <Image
          src={"/assets/energyze_logo.png"}
          alt="Energyze Logo"
          width={350}
          height={350}
        />
      </div>

      <motion.div
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-[20rem] place-items-center-safe ml-30"
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
          whileHover={{ scale: 1.1 }}
        >
          <Link href={"/creatina"}>
            <div className="w-[400px] h-[250px] flex items-center justify-center">
              <Image
                src={"/assets/creatina.png"}
                alt="Creatina"
                width={400}
                height={400}
              />
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col items-center group"
          whileHover={{ scale: 1.1 }}
        >
          <Link href={"/pretreino"}>
            <div className="w-[400px] h-[250px] flex items-center justify-center">
              <Image
                src={"/assets/pre-treino.png"}
                alt="Pré Treino"
                width={400}
                height={400}
              />
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col items-center group"
          whileHover={{ scale: 1.1 }}
        >
          <Link href={"/whey"}>
            <div className="w-[200px] h-[250px] flex items-center justify-center ml-20">
              <Image
                src={"/assets/wheyprotein.png"}
                alt="Whey Protein"
                width={120}
                height={120}
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
