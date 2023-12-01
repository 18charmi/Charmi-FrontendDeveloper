export default function SearchSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold text-gray-800">Search Form</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
        <select>
          <option>option-1</option>
          <option>option-2</option>
          <option>option-3</option>
          <option>option-4</option>
        </select>
        <input placeholder="Input Placeholder"></input>
        <input placeholder="Input Placeholder"></input>
        <button>Search</button>
      </form>
    </section>
  );
}
