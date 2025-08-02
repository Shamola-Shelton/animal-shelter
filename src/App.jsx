import { useState } from 'react';
import Filters from './components/Filters';
import PetBrowser from './components/PetBrowser';
import './App.css';

function App() {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState([]);

  const onChangeType = (type) => {
    setFilters({ type });
  };

  const onFindPetsClick = async () => {
    const url = filters.type === 'all' 
      ? 'http://localhost:3001/pets' 
      : `http://localhost:3001/pets?type=${filters.type}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const onAdoptPet = (petId) => {
    setPets(pets.map(pet => 
      pet.id === petId ? { ...pet, isAdopted: true } : pet
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Animal Shelter</h1>
      <Filters 
        onChangeType={onChangeType}
        onFindPetsClick={onFindPetsClick}
      />
      <PetBrowser 
        pets={pets}
        onAdoptPet={onAdoptPet}
      />
    </div>
  );
}

export default App;