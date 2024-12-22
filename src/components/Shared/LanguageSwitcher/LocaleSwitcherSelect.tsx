'use client';

import React, { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import clsx from 'clsx';
import { Locale } from '../../../i18n/config';
import { setUserLocale } from '../../../services/locale';
import Image from 'next/image';

type Props = {
  isSticky: boolean;
  isRoot: boolean;
  defaultValue: string;
  items: Array<{ value: string; flag: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  isSticky,
  isRoot,
  defaultValue,
  items,
  label,
}: Props) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  function handleChange(value: string) {
    setIsPending(true);
    setDropdownOpen(false);

    setUserLocale(value as Locale)
      .then(() => setSelectedValue(value))
      .finally(() => setIsPending(false));
  }

  const selectedItem = items.find((item) => item.value === selectedValue);

  return (
    <div className="relative inline-block text-left z-40">
      {/* Trigger Button */}
      <div
        aria-label={label}
        onClick={toggleDropdown}
        className={clsx(
          'flex items-center gap-2 cursor-pointer',
          isSticky ? " text-[#010749]" : `text-[#010749] ${isRoot && "md:text-white cursor-pointer"}`,
          isPending && 'pointer-events-none opacity-60'
        )}
      >
        {/* Selected Flag and Label */}
        {selectedItem && (
          <div className='flex items-center gap-2'>
            <Image
             width={100}
        height={100}
         src={selectedItem.flag} alt={`${selectedItem.label} flag`} className="h-7 w-7 rounded-full object-cover" />
            <span className="">{selectedItem.label}</span>
          </div>
        )}
        <IoChevronDown className="w-4 h-4 " />
      </div>

      {/* Dropdown Content */}
      {dropdownOpen && (
        <div className="language_select absolute left-0 md:left-[-40px] md:right-0 mt-6 min-w-[10rem] md:min-w-[9rem] rounded bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {items.map((item) => (
              <div
                key={item.value}
                onClick={() => handleChange(item.value)}
                className="flex items-center gap-2 cursor-pointer px-3 py-2 text-base hover:bg-slate-100"
              >
                <Image
                height={100}
                width={100} src={item.flag} alt={`${item.label} flag`} className="h-6 w-6 rounded-full object-cover" />
                <span className="text-slate-900">{item.label}</span>
                <span  className="text-xs text-green-500"> 
                  {item.value === selectedItem.value && (
                      <FaRegCheckCircle />
                    )}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
