import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import { CiUser } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { PiHeartThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { useAddtoCard, useSideHeader, useWichListModal } from "../store/Store";
import { FiMenu } from "react-icons/fi";
export default function Header() {
  const {openModal , products } = useWichListModal()
  const {items} = useAddtoCard()
  const {openSideHeader} = useSideHeader()
  return (
    <header className="w-full bg-white flex justify-center p-5 items-center">
        <div className="container flex justify-between items-center">
          <Link to={"/"} className="w-[65.39956665039062] h-[22.87200164794922]">
          <img rel="preloud" className="w-full h-full" src={logo} alt="logo-img" />
          </Link>
            <input type="text"
             placeholder="Search"
            className="input placeholder-shown:pl-9 p-4 w-80 hidden lg:flex focus:outline-black bg-[#F5F5F5] text-black" />
          <nav className=" decoration-0 hidden md:flex md:gap-9 lg:gap-13">
            <Link className=" text-black transition delay-75 ease-in hover:text-[#B5B5B5]" to={"/"}>Home</Link>
            <Link className="text-[#B5B5B5] hover:text-[#000] transition delay-75 ease-in " to={"/about"}>About</Link>
            <Link className="text-[#B5B5B5] hover:text-[#000] transition delay-75 ease-in" to={"/contact"}>Contact Us</Link>
            <Link className="text-[#B5B5B5] hover:text-[#000] transition delay-75 ease-in" to={"/blog"}>Blog</Link>
          </nav>
          <div className="gap-3  flex justify-center items-center">
            {
              products.length > 0 ?
              <button onClick={() => openModal()} className="relative cursor-pointer items-center justify-center">
               <PiHeartFill  className="text-red-700 text-2xl md:text-3xl cursor-pointer" />
                <span className="absolute top-1 right-1 font-semibold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full ">{products.length}</span>
              </button>
               : <PiHeartThin onClick={() => openModal()} className="text-black text-2xl md:text-3xl cursor-pointer" />
            }
            <CiUser className="text-black text-2xl md:text-3xl"/>
          
            <Link className="relative cursor-pointer items-center justify-center" to={"/shopcard"}>
            <PiShoppingCartSimpleLight className="text-black text-2xl md:text-3xl cursor-pointer"/>
              {items.length > 0 ? <span className="absolute -top-2 left-3.5 font-semibold bg-red-700/90 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center ">{items.length}</span>
            : null
          }
            </Link>
           
            
          </div>
          <button 
          onClick={ () => openSideHeader()}
          className="flex md:hidden cursor-pointer">
<FiMenu className=" text-2xl text-black" />
          </button>
        </div>
    </header>
  )
}
