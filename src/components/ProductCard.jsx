import { Link } from "react-router-dom";
import { PiHeartFill, PiHeartThin } from "react-icons/pi";
import { domainApi, useAddtoCard, useWichListModal } from "../store/Store";

export default function ProductCard({ el }) {
  const { addToCard } = useAddtoCard();
  const { products, addToWishList, removeFromWishList } = useWichListModal();
{/*--------------fix IMG URL--------------*/}
  function normalizeImageUrl(url) {
    if (!url) return null;
           //  https or http
    if (url.startsWith("https//")) url = url.replace(/^https\/\//, "https://");
    if (url.startsWith("http//")) url = url.replace(/^http\/\//, "http://");

    // if start with // (protocol-relative)
    if (url.startsWith("//")) return "https:" + url;
    if (/^https?:\/\//i.test(url)) return url;
    try {
      const base = domainApi?.endsWith("/") ? domainApi.slice(0, -1) : domainApi;
      return url.startsWith("/") ? base + url : base + "/" + url;
    } catch (e) {
      return null;
    }
  }
  const rawUrl = el.img?.[0]?.url;
  const imgUrl = normalizeImageUrl(rawUrl);
  {/*--------------fix IMG URL--------------*/}

  return (
    <div className="card bg-[#F6F6F6] min-h-[420px] shadow-sm flex flex-col">
      <Link
        to={`/product/${el.documentId}`}
        className="flex justify-center items-center h-44 lg:h-48 xl:h-56"
      >
        <img
          className="object-contain min-w-[200px] h-full"
          src={imgUrl}
          alt={el.name || "Product image"}
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="card-body flex flex-col justify-between">
        <div className="flex justify-between">
          <h2 className="card-title text-[18px] xl:text-[23px]">{el.name}</h2>
          {products.some((p) => p.documentId === el.documentId) ? (
            <PiHeartFill
              onClick={() => removeFromWishList(el.id)}
              className="text-red-700 text-3xl cursor-pointer"
            />
          ) : (
            <PiHeartThin
              onClick={() => addToWishList(el)}
              className="text-black text-3xl cursor-pointer 
             transition-all duration-300 
             hover:text-red-700 hover:scale-110 hover:drop-shadow-[0_0_12px_red]"
            />
          )}
        </div>
        <p className="font-semibold text-[17px] xl:text-[20px]">
          {el.price} EGP
        </p>
        <p className="text-[15px]">{el.discrbtion}</p>
        <div className="card-actions flex flex-row gap-3 justify-center items-center">
          <Link
            to={`/product/${el.documentId}`}
            className="btn btn-neutral grow text-[12px] md:text-[14px] xl:text-[16px] hover:bg-neutral-800 hover:text-white hover:shadow-2xs"
          >
            Show Details
          </Link>
          <button
            onClick={() =>  addToCard(el)}
            className="btn btn-neutral grow text-[12px] md:text-[14px] xl:text-[16px] hover:bg-neutral-800 hover:text-white hover:shadow-2xs"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}