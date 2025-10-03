import { IoClose } from "react-icons/io5";
import { useSideHeader } from "../store/Store";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import imgLogo from "../assets/Logo.svg";
export default function SideHeader() {
  const { closeSideHeader } = useSideHeader();

  return (
    <motion.div
      initial={{ x: 500, opacity: 0, transition: { duration: 0.4 } }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ x: 500, opacity: 0, transition: { duration: 0.4 } }}
      className="w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center md:hidden z-50"
    >
      <div className="absolute inset-0 bg-black/40" onClick={closeSideHeader} />

      <div className="relative w-full h-full bg-white p-4 flex flex-col items-stretch z-50">
        <button
          onClick={() => closeSideHeader()}
          className="absolute top-3 right-3 p-2 rounded-md hover:bg-gray-100"
          aria-label="Close menu"
        >
          <IoClose className="text-black text-2xl" />
        </button>

        <div className="pt-6 pb-4 px-2">
          <img src={imgLogo} alt="Logo Img" />
        </div>

        <motion.nav
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="mt-6 flex-1 overflow-auto"
        >
          <ul className="flex flex-col divide-y divide-gray-200">
            <li>
              <Link
                to="/"
                onClick={closeSideHeader}
                className="block w-full text-left px-4 py-4 text-lg text-black hover:text-neutral-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeSideHeader}
                className="block w-full text-left px-4 py-4 text-lg text-gray-600 hover:text-neutral-800 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeSideHeader}
                className="block w-full text-left px-4 py-4 text-lg text-gray-600 hover:text-neutral-800 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={closeSideHeader}
                className="block w-full text-left px-4 py-4 text-lg text-gray-600 hover:text-neutral-800 transition"
              >
                Blog
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </motion.div>
  );
}
