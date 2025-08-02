function Pet({ pet, onAdoptPet }) {
  const { name, type, age, weight, gender, isAdopted } = pet;

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>Type: {type}</p>
      <p>Age: {age} years</p>
      <p>Weight: {weight} lbs</p>
      <p>Gender: {gender === 'male' ? '♂' : '♀'}</p>
      <button
        onClick={() => onAdoptPet(pet.id)}
        disabled={isAdopted}
        className={`mt-2 px-4 py-2 rounded ${
          isAdopted 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-green-500 text-white hover:bg-green-600'
        }`}
      >
        {isAdopted ? 'Adopted' : 'Adopt'}
      </button>
    </div>
  );
}

export default Pet;