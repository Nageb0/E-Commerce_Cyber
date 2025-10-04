import { useEffect, useState } from "react";
import { TfiBackRight } from "react-icons/tfi";
import { domainApi, useAddtoCard, useWichListModal } from "../store/Store";
import delivry from "../assets/Delivery.svg";
import stock from "../assets/Stock.svg";
import gss from "../assets/Guaranteed.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import WichListModal from "./WichListModal";
import { PiHeartFill, PiHeartThin } from "react-icons/pi";

export default function Product_Detail() {
  const [productDetail, setProductDetail] = useState({});
  const [selectImg, setSelectImg] = useState([]);
  const param = useParams();
  const navigate = useNavigate();
  const { value, products, removeFromWishList, addToWishList } =
    useWichListModal();
  const { addToCard } = useAddtoCard();

  useEffect(() => {
    axios
      .get(`${domainApi}/api/products/${param.productId}/?populate=*`)
      .then((res) => {
        const pd = res?.data?.data || {};
        setProductDetail(pd);
        const imgs = pd?.img || [];
        if (imgs && imgs.length > 0) {
          setSelectImg(imgs[0]);
        } else {
          setSelectImg(null);
        }
      })
      .catch((err) => {
        toast.error("Some Thing Worng");
        navigate("*");
      });
  }, [navigate, param.productId]);

  const buildImageUrl = (img) => {
    if (!img) return null; // لو مفيش صورة
    const urlPath = img.url; // على طول من الكائن
    if (!urlPath) return null;

    // لو الرابط كامل (http) رجعه زي ما هو
    if (urlPath.startsWith("http")) return urlPath;

    // ضيف الـ domainApi على بداية الرابط
    return domainApi.replace(/\/$/, "") + urlPath;
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex justify-center items-center bg-white min-h-[91vh] text-black">
      {value && <WichListModal />}
      <div className="container flex flex-col md:flex-row justify-center md:gap-3 items-center w-full text-black p-4">
        <div className="w-full md:w-[50%] max-h-[700px] flex justify-center items-center flex-col gap-1 md:gap-3">
          <div className="w-full flex justify-center items-center">
            <img
              className=" max-h-[550px]"
              rel="preloud"
              src={selectImg ? buildImageUrl(selectImg) : "Not Found"}
              alt={productDetail?.name || "Product image"}
            />
          </div>

          <div className="flex flex-row min-w-[200px] xl:w-full md:gap-1 m-2 md:m- justify-center items-center">
            {productDetail.img &&
              productDetail.img.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectImg(img)}
                  className="rounded-2xl cursor-pointer"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={buildImageUrl(img) || "Not Found"}
                    alt="product image"
                    className="w-[60px] h-[60px] object-cover"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white w-full md:w-[50%] flex flex-col gap-5 md:gap-10 lg:gap-12 xl:gap-15 p-4">
          <button onClick={handleBack}>
            <TfiBackRight className="text-3xl font-bold cursor-pointer" />
          </button>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              {productDetail.name}
            </h1>
            {products.some((p) => p.documentId === productDetail.documentId) ? (
              <PiHeartFill
                onClick={() => removeFromWishList(productDetail.id)}
                className="text-red-700 text-4xl cursor-pointer"
              />
            ) : (
              <PiHeartThin
                onClick={() => addToWishList(productDetail)}
                className="text-black text-4xl cursor-pointer 
             transition-all duration-300 
             hover:text-red-700 hover:scale-110 hover:drop-shadow-[0_0_12px_red]"
              />
            )}
          </div>

          <p className="text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold">
            {productDetail.price}
          </p>
          <p className=" text-[15px] md:text-[15px] xl:text-[20px] text-gray-700">
            {productDetail.discrbtion}
          </p>

          <div className="flex gap-2 w-full">
            {/* <button
              onClick={() => {
                addToWishList({ ...productDetail });
                toast.success("Successfully Added To Wish List");
              }}
              className="btn text-[12px] xl:text-[15px] bg-white grow p-3 md:p-0  text-black hover:bg-black hover:text-white hover:shadow-2xs"
            >
              Add To Wishlist
            </button> */}
            <button
              onClick={() => {
                addToCard({ ...productDetail });
              }}
              className="btn btn-neutral text-[12px] xl:text-[15px] grow hover:bg-neutral-800 hover:text-white hover:shadow-2xs"
            >
              Add To Card
            </button>
          </div>

          <div className=" flex justify-center items-center w-full gap-5 md:gap-9 lg:gap-10 ">
            <div className="flex gap-2">
              <img className="min-w-[35px] xl:w-[80px]" src={delivry} />
              <div className="flex flex-col justify-center text-[8px] md:text-[9px] lg:text-[11px] xl:text-[15px] items-start">
                <p className="text-gray-700 ">Free Delivery</p>
                <p className="text-black "> 1-2 day</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img className="min-w-[35px] xl:w-[80px]" src={stock} />
              <div className="flex flex-col justify-center text-[8px] md:text-[9px] lg:text-[11px] xl:text-[15px] items-start">
                <p className="text-gray-700">In Stock</p>
                <p className="text-black ">Today</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img className="min-w-[35px] xl:w-[80px]" src={gss} />
              <div className="flex flex-col justify-center text-[8px] md:text-[9px] lg:text-[11px] xl:text-[15px] items-start">
                <p className="text-gray-700 ">Guaranteed</p>
                <p className="text-black"> 1 year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
