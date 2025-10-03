import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideHeader from "./SideHeader";
import { lodarModal, useSideHeader, useWichListModal } from "../store/Store";
import { AnimatePresence } from "motion/react";
import WichListModal from "./WichListModal";
import Loder from "./Loder";
export default function Layout() {
  const { index } = useSideHeader();
  const { value: set } = useWichListModal();
  const { value } = lodarModal();
  return (
    <div className="bg-white">
      {value && <Loder />}
      {set && <WichListModal />}
      <AnimatePresence>{index && <SideHeader />}</AnimatePresence>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
