import { useRef } from "react";
import { useKode } from "../context/BelanjaContext";

const SearchBar = ({kodeMinW}) => {
  const searchRef = useRef(null);
  const { searchInputHandler } = useKode();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col justify-between sticky top-0 bg-slate-200 rounded-tr-lg rounded-tl-lg min-w-[412px]"
      >
        <div className="w-full flex px-2 py-2">
          <input
            type="search"
            ref={searchRef}
            id="searchbar"
            placeholder="Cari..."
            className="p-2 rounded-md w-full"
          />
          <button
            onClick={() => {
              searchInputHandler(searchRef.current.value);
            }}
            className="px-6 py-2 font-bold bg-blue-500 text-slate-200 rounded-md ml-4 hover:bg-blue-600 transition-colors"
          >
            Cari
          </button>
        </div>

        <div className="flex text-center border-y-2 mt-4 border-slate-300">
          <h2 className={`font-bold flex-[1] text-xs sm:text-sm py-2 ${kodeMinW} border-x-2 border-slate-300`}>
            Kode Kelompok Barang
          </h2>
          <h2 className="flex-[2] px-2 font-bold text-sm py-2  border-r-2 border-slate-300">
            Uraian Barang
          </h2>
          <h2 className="flex-[2] px-2 font-bold text-sm py-2  border-r-2 border-slate-300">
            Spesifikasi
          </h2>
          <h2 className="flex-[2] px-2 font-bold text-sm py-2  border-r-2 border-slate-300">
            Satuan
          </h2>
          <h2 className="flex-[2] px-2 font-bold text-sm py-2  border-r-2 border-slate-300">
            Satuan Harga 2025
          </h2>
          <h2 className="flex-[2] px-2 font-bold text-sm py-2  border-r-2 border-slate-300">
            Kode Rekening
          </h2>
          {/* <h2 className="flex-[2] px-2 font-bold text-sm py-2  border-r-2 border-slate-300">
            TKDN
          </h2> */}
          <h2 className="flex-[1] px-2 font-bold text-sm py-2  border-r-2 border-slate-300">
            Kategori
          </h2>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
