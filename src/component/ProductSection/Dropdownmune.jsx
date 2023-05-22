import { useState } from 'react';
import { Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/solid';

const Dropdownmune = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
      >
        <span className="mr-2">Dropdown</span>
        {/* <ChevronDownIcon className={`w-5 h-5 ${isOpen ? 'transform rotate-180' : ''}`} /> */}
      </button>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 transform scale-95"
        enterTo="opacity-100 transform scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 transform scale-100"
        leaveTo="opacity-0 transform scale-95"
      >
        <div className="absolute z-10 w-40 mt-2 bg-white rounded-md shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default Dropdownmune;

