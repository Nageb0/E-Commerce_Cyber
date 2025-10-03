import { useEffect, useState } from "react";
import {lodarModal,useActivePage} from "../store/Store";
import { Index_Categories } from "../Api/Index_Categories";
import { Pagination } from "./Pagination";
import { Index_Product } from "../Api/Index_Product";
import SelectOption from "./SelectOption";
import ProductCard from "./ProductCard";
export default function View({ setCategory, selectedCategories }) {
  const {clousLodar } = lodarModal();
  const [product, setProduct] = useState([]);
  const [productTotal, setProductTotal] = useState(0);
  const [productPerPage, setProductPerPage] = useState(6);
  const { value: activePage, setActivePage } = useActivePage();
  // ------------------CategorySelected-------------------//
  useEffect(() => {Index_Categories().then(setCategory);}, [setCategory]);
  useEffect(() => {setActivePage(1)} , [setActivePage ,selectedCategories]);
  // -----------Product-----------//
  useEffect(() => {Index_Product(activePage, productPerPage, selectedCategories).then((res) => {setProduct(res.data || []);setProductTotal(res.total || 0);clousLodar();});}, [activePage, productPerPage, selectedCategories]);
  return (
    <div className=" grow min-h-[100vh]">
      <div className="flex justify-between">
        <p className="text-[13px] md:text-[23px] font-bold p-3">
          Available Products : {productTotal}
        </p>
        {/* Select Product In View */}
        <SelectOption setProductPerPage={setProductPerPage} productTotal={productTotal} setActivePage={setActivePage} />
      </div>
      <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 grow">
        {product.map((el) => {return(<ProductCard key={el.id}  el={el}/>);})}
      </div>
      <Pagination productTotal={productTotal} productPerPage={productPerPage} activePage={activePage} setActivePage={setActivePage} setProductPerPage={setProductPerPage}/>
    </div>
  );
}
