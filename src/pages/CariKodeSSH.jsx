import SSHList from "../components/SSHList";
import SearchBar from "../components/SearchBar";

const CariKodeBelanja = () => {
  return (
    <main className="container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-auto text-slate-800 min-w-[412px]">
      <div className="mx-auto flex flex-col w-max">
        <h1 className="font-bold text-4xl mt-8 ubuntu-bold drop-shadow-lg text-sky-900 py-2">
          DATA UMUM SSH
        </h1>
      </div>
      <section className="shadow-xl rounded-lg">
        <SearchBar
          kodeMinW={"min-w-32 sm:min-w-[8.5rem]"}
          satHargaMaxW={"max-w-32"}
          kodeRekeningMaxW={"max-w-44"}
        />
        <SSHList />
      </section>
    </main>
  );
};

export default CariKodeBelanja;
