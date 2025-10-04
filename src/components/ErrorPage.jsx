import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-white text-black w-[100%] h-dvh gap-3 flex flex-col justify-center items-center">
      <div className="flex gap-4 ">
        <motion.p
          initial={{ x: -500, opacity: 0, transition: { duration: 0.4 } }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ x: -500, opacity: 0, transition: { duration: 0.4 } }}
          className="text-[130px] md:text-[150px] lg:text-[180px] xl:text-[250px] drop-shadow-2xl drop-shadow-gray-400"
        >
          4
        </motion.p>
        <motion.p
          initial={{ y: -300, opacity: 0, transition: { duration: 1.6 } }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.7, duration: 1.8 },
          }}
          exit={{ y: -300, opacity: 0, transition: { duration: 0.4 } }}
          className="text-[130px] md:text-[150px] lg:text-[180px] xl:text-[250px] drop-shadow-2xl drop-shadow-gray-400"
        >
          0
        </motion.p>
        <motion.p
          initial={{ x: 500, opacity: 0, transition: { duration: 0.4 } }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ x: 500, opacity: 0, transition: { duration: 0.4 } }}
          className="text-[130px] md:text-[150px] lg:text-[180px] xl:text-[250px] drop-shadow-2xl drop-shadow-gray-400"
        >
          4
        </motion.p>
      </div>
      <motion.p className="text-[22px] xl:text-3xl font-bold drop-shadow-2xl drop-shadow-gray-300">
        Not Found Page || 404 Error
      </motion.p>
      <motion.button className="text-white mt-4 text-[13px] md:text-[14px] xl:text-[20px] rounded-2xl bg-black rotate-6 transition-all ease-in  hover:rotate-0 p-4 font-semibold">
        <Link to={"/"}>Back To Home</Link>
      </motion.button>
    </div>
  );
}
