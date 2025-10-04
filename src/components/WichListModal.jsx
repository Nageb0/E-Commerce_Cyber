import { FcLike } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { domainApi, useWichListModal } from "../store/Store";
import { motion } from "motion/react";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function WichListModal() {
  const { clousModal, products, removeFromWishList } = useWichListModal();
  const navigate = useNavigate();
  const handelClose = (event) => {
    event.stopPropagation();
    clousModal();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={handelClose}
      className="bg-black/50 fixed inset-0 flex justify-center items-center z-40"
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full m-3 md:m-0 max-w-[720px] min-h-auto max-h-[80vh] text-black bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden"
      >
        <button
          aria-label="Close wishlist"
          onClick={clousModal}
          className="absolute top-4 right-4 cursor-pointer text-black text-2xl p-1 rounded-md hover:bg-gray-100"
        >
          <IoClose className="text-2xl md:text-3xl" />
        </button>

        <h3 className="text-2xl xl:text-3xl mt-5 md:mt-0 font-semibold text-black flex justify-center items-center p-3">
          Your Wish List <FcLike className="text-5xl md:text-6xl p-2" />
        </h3>

        <div className="p-4 overflow-y-auto flex-1 min-h-0">
          <div className="flex flex-col divide-y divide-gray-300">
            {products.length === 0 && (
              <p className="text-center font-bold text-2xl xl:text-3xl text-black">
                No Products Added Yet !!
              </p>
            )}

            {products.map((el) => {
              {
                /*--------------fix IMG URL--------------*/
              }
              function normalizeImageUrl(url) {
                if (!url) return null;

                //  https or http
                if (url.startsWith("https//"))
                  url = url.replace(/^https\/\//, "https://");
                if (url.startsWith("http//"))
                  url = url.replace(/^http\/\//, "http://");

                // if start with // (protocol-relative)
                if (url.startsWith("//")) return "https:" + url;
                if (/^https?:\/\//i.test(url)) return url;
                try {
                  const base = domainApi?.endsWith("/")
                    ? domainApi.slice(0, -1)
                    : domainApi;
                  return url.startsWith("/") ? base + url : base + "/" + url;
                } catch (e) {
                  return null;
                }
              }
              const rawUrl = el.img?.[0]?.url;
              const imgUrl = normalizeImageUrl(rawUrl);
              {
                /*--------------fix IMG URL--------------*/
              }
              return (
                <div
                  key={el.documentId}
                  className="flex items-center gap-4 py-4"
                >
                  <button
                    onClick={() => {
                      navigate(`/product/${el.documentId}`);
                      clousModal();
                    }}
                    className="flex-shrink-0 w-[45px] md:w-[80px] cursor-pointer h-[45px] md:h-[80px] rounded-lg overflow-hidden bg-gray-100"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={imgUrl}
                      alt="Product image"
                    />
                  </button>

                  <div className="flex-1 min-w-0">
                    <h2 className=" text-[15px] md:text-lg font-semibold truncate">
                      {el.name}
                    </h2>
                    <p className="text-[10px] md:text-sm text-gray-600 mt-2 line-clamp-2">
                      {el.discrbtion}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromWishList(el.id)}
                      className="p-1 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                      <RiCloseLine className="text-[15px] md:text-2xl" />
                    </button>
                    <p className="text-[12px] md:text-xl font-semibold">
                      {el.price} EGP
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
