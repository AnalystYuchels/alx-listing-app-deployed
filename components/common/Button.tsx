import React from 'react'

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
  >
    {label}
  </button>
)

export default Button;
