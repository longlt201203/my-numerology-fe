import React from 'react';

interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked, onChange, className = '' }) => {
  return (
    <div className={`mb-4 flex items-center ${className}`}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="mr-2 rounded border-gray-300 text-deepPurple focus:ring-deepPurple"
      />
      <label htmlFor={name} className="text-midnightBlue font-medium">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
