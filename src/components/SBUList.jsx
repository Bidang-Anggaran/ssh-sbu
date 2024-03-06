import SBU from "../json/SBU.json";
import { useKode } from "../context/BelanjaContext";
import Pagination from "./Pagination";

const SBUList = () => {
  const { startIndex, endIndex, searchInput } = useKode();

  const filteredData =
    searchInput !== ""
      ? SBU.filter((item) =>
          Object.values(item).some((value) =>
            `${value}`.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : SBU;

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <div className="divide-y-2 flex flex-col justify-between divide-slate-300  bg-slate-200 min-w-[412px] rounded-lg">
        <div className="w-full"></div>
        {filteredData.length < 1 ? (
          <div className="text-center py-8 text-xl font-bold">
            Tidak ada data yang ditemukan.
          </div>
        ) : null}
        {currentData.map((e) => (
          <div key={crypto.randomUUID()} className="flex">
            <div className="flex-[2] min-w-48 max-w-48 border-x-2 border-slate-300">
              <h2 className="font-bold text-xs md:text-sm p-2">
                {e["KODE KELOMPOK BARANG"]}
              </h2>
            </div>

            <p className="p-2 flex-[2] text-xs md:text-sm border-r-2 border-slate-300">
              {e["URAIAN BARANG"] == ""
                ? "Keterangan Belum Ditambah"
                : e["URAIAN BARANG"]}
            </p>
            <p className="p-2 flex-[2] text-xs md:text-sm border-r-2 border-slate-300">
              {e.SPESIFIKASI == ""
                ? "Keterangan Belum Ditambah"
                : e.SPESIFIKASI}
            </p>
            <p className="p-2 flex-[2] text-xs md:text-sm border-r-2 border-slate-300">
              {e.SATUAN == "" ? "Keterangan Belum Ditambah" : e.SATUAN}
            </p>
            <p className="p-2 flex-[2] text-xs md:text-sm border-r-2 border-slate-300">
              {e["HARGA SATUAN 2025"] == ""
                ? "Keterangan Belum Ditambah"
                : e["HARGA SATUAN 2025"]}
            </p>
            <p className="p-2 flex-[2] text-xs md:text-sm border-r-2 border-slate-300">
              {e["KODE REKENING"] == ""
                ? "Keterangan Belum Ditambah"
                : e["KODE REKENING"]}
            </p>

            <p className="p-2 flex-[1] text-xs md:text-sm border-r-2 border-slate-300 max-w-28">
              {e.KATEGORI == "" ? "Keterangan Belum Ditambah" : e.KATEGORI}
            </p>
            {/* <div className="p-2 flex-[2] text-xs sm:text-sm border-r-2 border-slate-300">
            <p>
              {e.ketentuan == "" ? "Ketentuan Belum Ditambah" : e.ketentuan}
            </p>
          </div> */}
          </div>
        ))}

        <Pagination totalItems={filteredData.length} />
      </div>
    </>
  );
};

export default SBUList;
