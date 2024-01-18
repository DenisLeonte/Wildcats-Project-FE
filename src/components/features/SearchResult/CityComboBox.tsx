// ComboBox.tsx
import React, { useState, useEffect } from 'react';
import '../../../styles/ComboBox.css';
import 'flag-icons/css/flag-icons.min.css';
import { City } from '../../../types/City';

interface ComboBoxProps {
  options: City[];
  placeholder?: string;
  onCityChange?: (value: City) => void;
}



const CityComboBox: React.FC<ComboBoxProps> = ({ options, placeholder, onCityChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<City[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option => 
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  const handleLiClick = (selectedCityName: string) => {
    setSearchTerm(selectedCityName); // Update the input value
    if (onCityChange) {
      const selectedCity = options.find(c => c.name === selectedCityName);
      if (selectedCity) {
        onCityChange(selectedCity); // Trigger the onChange for the input
      }
    }
  };

  return (
    <div className="combo-box">
      <input 
        type="text" 
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {handleLiClick(e.target.value); }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
      />
      {showDropdown && (
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleLiClick(option.name)}>
              <span className={`fi fi-${option.country.code.toLowerCase()}`} style={{ marginRight: '10px' }}></span>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityComboBox;
