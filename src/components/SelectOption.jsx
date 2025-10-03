export default function SelectOption({setProductPerPage ,productTotal , setActivePage ,}) {
  return (
    <select onChange={(e) => { if (e.target.value === "All") {setProductPerPage(productTotal);setActivePage(1);} else {setProductPerPage(Number(e.target.value));setActivePage(1);}}}
          className="bg-white  rounded px-2 py-1 text-xs md:text-sm hover:bg-black hover:text-white focus-visible:ring-gray-400 ">
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="20">20</option>
          <option value="All">All</option>
        </select>
  )
}
