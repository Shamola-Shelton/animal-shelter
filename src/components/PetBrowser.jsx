import Pet from './Pet';

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {pets.map(pet => (
        <Pet 
          key={pet.id}
          pet={pet}
          onAdoptPet={onAdoptPet}
        />
      ))}
    </div>
  );
}

export default PetBrowser;