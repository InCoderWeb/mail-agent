"use client";

import * as React from "react";

interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function Select({
  value,
  defaultValue,
  onValueChange,
  children,
  className,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedValue(val);
    onValueChange?.(val);
  };

  return (
    <select
      value={value || selectedValue}
      onChange={handleChange}
      className={`p-2 rounded bg-[#1a1a1d] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#810cab] ${className}`}
    >
      {children}
    </select>
  );
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function SelectItem({ value, children }: SelectItemProps) {
  return <option value={value}>{children}</option>;
}

// Optional: Mock the other named components for compatibility

export const SelectTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const SelectValue = () => null;
