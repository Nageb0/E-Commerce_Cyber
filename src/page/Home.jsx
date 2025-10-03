import { useState } from "react";
import CatogeryFilter from "../components/CatogeryFilter";
import View from "../components/View";
export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);
   const [category, setCategory] = useState([]);
  return (
    <div className="flex text-black justify-center items-center bg-white gap-3 w-full">
      <div className="container flex-wrap md:flex-nowrap flex p-4 gap-5">
        <CatogeryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          category={category}
          setCategory={setCategory}
        />

        <View selectedCategories={selectedCategories} />
      </div>
    </div>
  );
}
