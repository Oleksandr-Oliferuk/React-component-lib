import { Eye, EyeOff, X } from 'lucide-react';
import React, { useState } from 'react';
import cn from 'classnames';

type Props = {
  label: string;
  placeholder: string;
  type: 'text' | 'password';
  clearable?: boolean;
};

export const Input: React.FC<Props> = ({ label, placeholder, type, clearable = false }) => {
  const [valueInput, setValueInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const handleClear = () => {
    setValueInput('');
  };

  return (
    <div className="flex flex-col gap-1 w-full max-w-md">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="relative">
        <input
          type={inputType}
          value={valueInput}
          onChange={e => setValueInput(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded px-3 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
        />

        {valueInput && clearable && (
          <div
            role="button"
            aria-label="Toggle password visibility"
            onClick={handleClear}
            className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600
                     bg-transparent border-none appearance-none focus:outline-none focus:ring-0"
          >
            <X size={18} />
          </div>
        )}

        {type === 'password' && (
          <div
            role="button"
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            className={cn(
              'absolute',
              'top-2',
              'p-1',
              'text-gray-400',
              'hover:text-gray-600',
              'bg-transparent',
              'border-none',
              'appearance-none',
              'focus:outline-none',
              'focus:ring-0',
              {
                'right-10': valueInput && clearable,
                'right-2': !(valueInput && clearable),
              }
            )}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        )}
      </div>
    </div>
  );
};
