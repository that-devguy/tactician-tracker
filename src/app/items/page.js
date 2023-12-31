import Image from "next/image";

export default function Items() {
  return (
    <section className="px-2 pt-8 md:px-6 lg:px-6">
      <div className="mx-auto mb-2 flex max-h-28 max-w-7xl justify-between rounded-lg bg-gradient-to-tr from-[#ff571d] to-[#F8A634]">
        <div className="flex flex-col justify-center px-4 py-2 md:p-4">
          <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
            ITEMS
          </h3>
          <p className="text-xs text-white sm:hidden">
            Explore a database of all the Items in the current set.
          </p>
          <p className="hidden text-xs text-white sm:block md:text-sm">
          Explore a database of all the Items in the current set and their recipes.
          </p>
        </div>
        <Image
          src="/whisker_base_banner.png"
          height="200"
          width="200"
          alt="Stargaurdian Lux Chibi"
          className="h-fill select-none overflow-hidden rounded-lg"
        />
      </div>
    </section>
  );
}
