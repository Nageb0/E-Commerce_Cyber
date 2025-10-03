import logo1 from "../assets/Logo1.svg"
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className=' bg-black w-full min-h-[250px] flex justify-center items-center'>
       <div className='container bg-black p-25 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-15 md:gap-30 lg:gap-48'>
        <div className="text-white flex flex-col w-full h-full justify-between">
          <div className="gap-4 flex-col flex justify-around ">
            <img rel="preloud" src={logo1} alt="logo" className="w-16"/>
           <p className="text-gray-300 text-[13px]">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          </div>
           <div className="flex gap-3 text-white">
<TiSocialTwitter className=" text-white w-5 h-5"/>
<TiSocialFacebook className=" text-white w-6 h-6"/>
<IoLogoTiktok className=" text-white w-5 h-5"/>
<RiInstagramFill className=" text-white w-5 h-5"/>
           </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-white font-bold">Services</p>
          <Link to={"/bonusprogram"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Bonus program</Link>
          <Link to={"/giftcards"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Gift cards</Link>
          <Link to={"/credit"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Credit and payment</Link>
          <Link to={"/service"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Service contracts</Link>
          <Link to={"/non"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Non-cash account</Link>
          <Link to={"/payment"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Payment</Link>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-white font-bold">Assistance to the buyer</p>
          <Link to={"/bonusprogram"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Find an order</Link>
          <Link to={"/giftcards"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Terms of delivery</Link>
          <Link to={"/credit"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Exchange and return of goods</Link>
          <Link to={"/service"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Guarantee</Link>
          <Link to={"/non"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Frequently asked questions</Link>
          <Link to={"/payment"} className="text-gray-300 hover:text-gray-100 hover:translate-x-2 transition-all duration-200 ease-in">Terms of use of the site</Link>
        </div>
       </div>
    </footer>
  )
}
