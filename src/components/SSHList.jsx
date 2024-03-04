import SSH from "../json/SSH.json";
import ReadMore from "./ReadMore";
import { useBelanja } from "../context/BelanjaContext";
import Pagination from "./Pagination";

const SSHList = () => {
  const { startIndex, endIndex } = useBelanja();

  const { searchInput } = useBelanja();

  const filteredData =
    searchInput !== ""
      ? SSH.filter((item) =>
          Object.values(item).some((value) =>
            `${value}`.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : SSH;

  const currentData = filteredData.slice(startIndex, endIndex);

  const formatString = (input) => {
    const strInput = `${input}`;
    const parts = [
      strInput.slice(0, 1),
      strInput.slice(1, 2),
      strInput.slice(2, 4),
      strInput.slice(4, 6),
      strInput.slice(6, 8),
      strInput.slice(8),
    ];
    const formattedString = parts.join(".").replace(/\.*$/, "");
    return formattedString;
  };

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
            <div className="flex-[1] min-w-32 sm:min-w-[8.5rem] border-x-2 border-slate-300">
              <h2 className="font-bold text-xs sm:text-sm p-2">
                {e["KODE KELOMPOK BARANG"]}
              </h2>
            </div>


            <p className="p-2 flex-[2] text-xs sm:text-sm border-r-2 border-slate-300">
              {e["URAIAN BARANG"] == ""
                ? "-"
                : e["URAIAN BARANG"]}
            </p>
            <p className="p-2 flex-[2] text-xs sm:text-sm border-r-2 border-slate-300">
              {e.SPESIFIKASI == ""
                ? "-"
                : e.SPESIFIKASI}
            </p>
            <p className="p-2 flex-[2] text-xs sm:text-sm border-r-2 border-slate-300">
              {e.SATUAN == "" ? "-" : e.SATUAN}
            </p>
            <p className="p-2 flex-[2] text-xs sm:text-sm border-r-2 border-slate-300">
              {e["HARGA SATUAN 2025"] == ""
                ? "-"
                : e["HARGA SATUAN 2025"]}
            </p>
            <p className="p-2 flex-[2] text-xs sm:text-sm border-r-2 border-slate-300">
              {e["KODE REKENING"] == ""
                ? "-"
                : e["KODE REKENING"]}
            </p>

            <p className="p-2 flex-[2] text-xs sm:text-sm border-r-2 border-slate-300">
              {e.KATEGORI == "" ? "-" : e.KATEGORI}
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

export default SSHList;
