function Filters({ onChangeType, onFindPetsClick }) {
  const handleChange = (e) => {
    onChangeType(e.target.value);
  };

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg">
      <select 
        onChange={handleChange}
        className="mr-4 p-2 border rounded"
      >
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
      <button 
        onClick={onFindPetsClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Find pets
      </button>
    </div>
  );
}

export default Filters;