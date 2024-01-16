// ComboBox.tsx
import React, { useState, useEffect } from 'react';
import '../../../styles/ComboBox.css';

interface ComboBoxProps {
  options: string[];
  placeholder?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  return (
    <div className="combo-box">
      <input 
        type="text" 
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
      />
      {showDropdown && (
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => setSearchTerm(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
