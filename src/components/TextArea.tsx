import React from 'react';

interface TextAreaProps {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block text-midnightBlue font-medium mb-1">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepPurple focus:border-transparent"
        rows={4}
      />
    </div>
  );
};

export default TextArea;
