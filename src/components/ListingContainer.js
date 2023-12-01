export default function ListingContainer() {
  const data = [
    { name: "list-item-1" },
    { name: "list-item-2" },
    { name: "list-item-3" },
    { name: "list-item-4" },
    { name: "list-item-5" },
    { name: "list-item-6" },
    { name: "list-item-7" },
    { name: "list-item-8" },
    { name: "list-item-9" },
    { name: "list-item-10" },
  ];
  return (
    <section className="py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-start">
        {data.map((d) => (
          <div key={d.name} className="mx-auto">
            <img height={200} width={150} />
            {d.name}
          </div>
        ))}
      </div>
      <div className="flex justify-between pt-10">
        <button>Prev</button>
        <span>Count</span>
        <button>Next</button>
      </div>
    </section>
  );
}
