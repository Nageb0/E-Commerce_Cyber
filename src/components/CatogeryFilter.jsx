import { useState, useEffect } from "react";
import { MdArrowDropDown, MdOutlineArrowRight } from "react-icons/md";
import { Index_Categories } from "../Api/Index_Categories";

export default function CatogeryFilter({
  setCategory,
  category,
  selectedCategories,
  setSelectedCategories,
}) {
  const [openCategory, setOpenCategory] = useState(null);
  useEffect(() => {
    Index_Categories().then((res) => {
      setCategory(res);
    });
  }, []);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const handleCategory = (id) => {
    let copy = [...selectedCategories];
    if (selectedCategories.includes(id)) {
      copy.splice(copy.indexOf(id), 1);
    } else {
      copy.push(id);
    }
    setSelectedCategories(copy);
  };
  return (
    <div className="w-full md:w-[256px]">
      <div className="collapse collapse-arrow ">
        <input type="checkbox" name="my-accordion-2 " />
        <div className="collapse-title font-semibold border-b border-gray-700 pb-2  w-full">
          Categories
        </div>
        <div className="collapse-content">
          {category?.map((el) => (
            <div key={el.id} className="w-full">
              {/* Main category */}

              <div
                onClick={() => toggleCategory(el.id)}
                className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 rounded"
              >
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-neutral"
                    onChange={() => handleCategory(el.documentId)}
                  />
                  {el.catogryName}
                </div>

                {/* الأيقونة بدل الإيموجي */}
                {el.subcatogries?.length > 0 && (
                  <span>
                    {openCategory === el.id ? (
                      <MdArrowDropDown size={30} />
                    ) : (
                      <MdOutlineArrowRight size={30} />
                    )}
                  </span>
                )}
              </div>

              {/* Subcategories */}
              {openCategory === el.id &&
                el.subcatogries?.map((sub) => (
                  <label
                    key={sub.id}
                    className="flex gap-2 items-center p-1 ml-6 hover:bg-gray-50 rounded"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-neutral"
                      onChange={() => handleCategory(sub.documentId)}
                    />
                    {sub.catogryName}
                  </label>
                ))}
            </div>
          ))}
          <button className="btn btn-neutral w-full p-3 hover:bg-gray-50 hover:text-black hover:border-0 hover:shadow-2xs ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
