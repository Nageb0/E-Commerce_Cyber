export const Pagination = ({
  productTotal,
  productPerPage,
  activePage,
  setActivePage,
}) => {
  const totalPages = Math.ceil(productTotal / productPerPage);

  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (activePage > 4) {
        pages.push("ellipsis-left");
      }
      let start = Math.max(2, activePage - 1);
      let end = Math.min(totalPages - 1, activePage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (activePage < totalPages - 3) {
        pages.push("ellipsis-right");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="join bg-white w-full flex flex-wrap justify-center items-center gap-1 p-2">
      {activePage > 1 && (
        <button
          onClick={() => setActivePage(activePage - 1)}
          className="join-item btn bg-white text-black border-gray-300 hover:bg-gray-100"
        >
          «
        </button>
      )}

      {pages.map((page, index) =>
        page === "ellipsis-left" || page === "ellipsis-right" ? (
          <span key={index} className="px-2 text-gray-500">
            …
          </span>
        ) : (
          <button
            key={index}
            className={`join-item btn border-0 
              ${
                activePage === page
                  ? "btn-active bg-neutral text-white"
                  : "bg-white text-neutral"
              }`}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        )
      )}

      {activePage < totalPages && (
        <button
          onClick={() => setActivePage(activePage + 1)}
          className="join-item btn bg-white text-black border-gray-300 hover:bg-gray-100"
        >
          »
        </button>
      )}
    </div>
  );
};
