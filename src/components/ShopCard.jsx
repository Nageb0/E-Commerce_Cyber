import { GrFormAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { domainApi, useAddtoCard, useWichListModal } from "../store/Store";
import WichListModal from "./WichListModal";
import { Link } from "react-router-dom";
export default function ShopCard() {
  const { items , inCreaseQty , deCreaseQty , rest , getTotalPrice ,  removeFromShopCard } = useAddtoCard();
  const {value: set} = useWichListModal();
  return (
    <div className="flex justify-center text-black bg-white min-h-[91vh] w-full items-center">
      {set && <WichListModal />}
         {items.length === 0 ? (
        <p className="text-2xl text-center lg:text-3xl font-semibold text-black">
          Go and choose your favorite product and then come back quickly , I am
          waiting for you
        </p>
      ) : (<div className="container p-3 lg:p-0 flex flex-col lg:flex-row gap-10 w-full">
        <div className="w-full lg:w-1/2 overflow-y-auto ">
          <h1 className="font-bold text-2xl md:text-3xl text-black">Shopping Cart</h1>
{items.map((el) => {return(
  <div key={el.id} className="p-2 md:p-4 flex flex-1 min-h-0 w-full">
              <div className="flex w-full">
                  <div  className="flex justify-between items-center w-full gap-4 py-4 flex-wrap">
                    <div className="flex items-center gap-2 md:gap-4 text-black flex-1 min-w-0">
                      <Link to={`/product/${el.documentId}`} className=" flex-shrink-0 w-[45px] h-[45px] md:w-[80px] md:h-[80px] cursor-pointer rounded-lg overflow-hidden bg-gray-100">
                        <img
                        rel="preloud"
                        src={`${domainApi}${el.img[0]?.url}`} 
                        className="w-full h-full object-cover" />
                      </Link>

                      <div className="flex md:block flex-wrap gap-1 justify-between items-center min-w-0">
                        <h2 className="text-[15px] md:text-2xl font-semibold truncate">
                          {el.name}
                        </h2>
                        <p className="text-[12px] flex md:hidden font-semibold">{el.price}</p>
                        <p className="text-[10px] md:text-sm text-gray-600 mt-0 md:mt-2 line-clamp-none md:line-clamp-2">
                          {el.discrbtion}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col text-black items-end gap-2 shrink-0">
                      <div className="flex items-center gap-2.5 md:gap-5">
                        <p className="text-[12px] hidden md:flex md:text-lg font-semibold">{el.price}</p>
                        <button
                          onClick={() => removeFromShopCard(el.id)}
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <RiCloseLine className="text-[15px] md:text-2xl" />
                        </button>
                      </div>

                      <div className="flex flex-col md:flex-row gap-1.5 md:gap-3">
                        <button
                        onClick={() => rest(el.id)}
                          className=" text-white p-1 md:p-2 text-center font-semibold text-[8px] md:text-sm w-8 md:w-15 cursor-pointer rounded-xl bg-black hover:text-black hover:bg-gray-100"
                        >
                          Reset
                        </button>
                        <button
                          onClick={() => inCreaseQty(el.id) }
                          className=" text-black text-[15px] md:text-lg xl-text-2xl cursor-pointer rounded-[10px] md:rounded-xl w-8 h-8 md:w-10 md:h-10 text-center hover:bg-gray-100"
                        >
                          <FiMinus className="text-center w-full" />
                        </button>
                        <p className="p-1 md:p-2 w-8 md:w-15 border text-center border-gray-200 rounded-[10px] md:rounded-xl">
                          {el.qty}
                        </p>
                        <button
                          onClick={() => deCreaseQty(el.id) }
                          className=" text-black text-[15px] md:text-lg xl-text-2xl cursor-pointer rounded-[10px] md:rounded-xl w-8 h-8 md:w-10 md:h-10 text-center hover:bg-gray-100"
                        >
                          <GrFormAdd className="text-center w-full" />
                        </button>
                      </div>
                    </div>
                  </div>
            </div>
            
            
          </div>
)})}
          
        </div>

        <div className="w-full lg:w-1/2 lg:h-[700px] rounded-2xl p-6 border-gray-200 border-1 shadow ">
          <h1 className="font-bold text-2xl md:text-3xl text-black">Order Summary</h1>

          <div className="flex flex-col gap-3 text-black p-4 ">
            {/* <p className="text-2xl flex justify-between">
              Discount<span>465 EGP</span>
            </p> */}
            <p className=" text-2xl md:text-3xl text-gray-600 font-semibold flex justify-between">
              Total<span className="text-[20px] text-black">{getTotalPrice()} EGP</span>
            </p>
            <button className="btn btn-neutral text-[12px] xl:text-[15px] grow hover:bg-neutral-800 hover:text-white hover:shadow-2xs">
              Checkout
            </button>
          </div>
        </div>
      </div>)} 
      
    </div>
  );
}
