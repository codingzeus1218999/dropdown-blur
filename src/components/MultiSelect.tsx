import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

type Props = {
  label: string;
  onToggle: (status: boolean) => void;
}

const MultiSelect: React.FC<Props> = ({ label, onToggle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const handleClickOutside  = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  return (
    <div className="relative">
      <button
        ref={ref}
        className="cursor-pointer hover:bg-gray-100 px-6 py-4 rounded"
        onClick={() => setIsOpen(true)}
      >{label}</button>

      {isOpen && (
        <div className="absolute p-4 top-16 bg-white shadow-lg z-10 rounded border border-gray-200 w-[200px] flex flex-col gap-2">
          <div className="cursor-pointer">Dropdown Item 1</div>
          <div className="cursor-pointer">Dropdown Item 2</div>
          <div className="cursor-pointer">Dropdown Item 3</div>
        </div>
      )}
    </div>
  )
}

export default MultiSelect;
