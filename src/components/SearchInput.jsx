import axios from "axios";
import { useRef, useState } from "react";
import { domainApi, useSideHeader } from "../store/Store";
import { Link } from "react-router-dom";

export default function SearchInput() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [FilteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const timeoutRef = useRef(null);
   const { closeSideHeader } = useSideHeader();
  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSearching(true);
    timeoutRef.current = setTimeout(() => {
      if (val.trim() !== "") {
        const url = `${domainApi}/api/products?filters[name][$startsWithi]=${encodeURIComponent(
          val
        )}`;
        axios
          .get(url)
          .then((res) => {
            const products = res.data.data || [];
            setData(products);
            const finalFiltered = products.filter((item) =>
              item.name.toLowerCase().includes(val.toLowerCase())
            );
            setFilteredData(finalFiltered);
            setIsSearching(false);
          })
          .catch((err) => {
            setIsSearching(false);
          });
      } else {
        setFilteredData([]);
        setIsSearching(false);
      }
    }, 500);
  };

  return (
    <div className="relative w-full lg:w-56 xl:w-80">
      <input
        type="text"
        placeholder="Search ..."
        className="input placeholder-shown:pl-9 p-4 w-full focus:outline-gray-500 bg-[#F5F5F5] text-black"
        onChange={handleChange}
        value={search}
      />
      {search !== "" && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          {isSearching ? (
            <div className="p-3 text-gray-500 text-center">Searching...</div>
          ) : FilteredData.length > 0 ? (
            <div className="max-h-60 overflow-y-auto">
              {FilteredData.map((el) => (
                <Link
                  key={el.id}
                  to={`/product/${el.documentId}`}
                  className="block p-3 hover:bg-gray-100 text-[11px] md:text-[15px] lg:text-[13px] xl:text-[15px]  text-black border-b-1 border-gray-300"
                  onClick={() => {
                    setSearch("");
                    setFilteredData([]);
                    closeSideHeader()
                  }}
                >
                  {el.name}
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-3 text-gray-500 text-center">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
