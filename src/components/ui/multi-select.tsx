"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "./utils";
import { figtree } from "../../styles/fonts/fonts";
import { Checkbox } from "./checkbox";

export type MultiSelectOption = {
  label: string;
  value: string;
};

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
  disabled?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select options",
  searchPlaceholder = "Search",
  className,
  disabled,
}) => {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const selectedLabels = React.useMemo(
    () =>
      options
        .filter((opt) => value.includes(opt.value))
        .map((opt) => opt.label)
        .join(", "),
    [options, value],
  );

  const displayLabel = selectedLabels || placeholder;

  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        event.target instanceof Node &&
        !triggerRef.current.contains(event.target)
      ) {
        const dropdown = document.getElementById("multi-select-dropdown");
        if (dropdown && !dropdown.contains(event.target)) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const filteredOptions = React.useMemo(
    () =>
      options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [options, searchTerm],
  );

  return (
    <div className={cn("relative w-full", className)}>
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          `${figtree.className} flex h-[40px] w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-[#2A69B7] focus:bg-[#FAFCFE] data-[state=open]:border-[#2A69B7] data-[state=open]:bg-[#FAFCFE] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
          open && "border-[#2A69B7] bg-[#FAFCFE]",
        )}
      >
        <span
          className={cn(
            "text-left flex-1",
            !selectedLabels && "text-muted-foreground",
          )}
        >
          {displayLabel}
        </span>
        <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
      </button>

      {open && (
        <div
          id="multi-select-dropdown"
          className={`${figtree.className} absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white text-sm shadow-md`}
        >
          <div className="px-3 pt-3 pb-2 border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full h-10 rounded-md border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2A69B7] focus:bg-[#FAFCFE]"
              />
            </div>
          </div>

          <ul className="py-1">
            {filteredOptions.map((option) => {
              const checked = value.includes(option.value);
              return (
                <li
                  key={option.value}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-accent"
                  onClick={() => toggleOption(option.value)}
                >
                  <div className="flex items-center w-full border-b pb-2">
                    <div className="mr-3 relative">
                      <div className="h-5 w-5 rounded-md border border-gray-300 bg-gray-50">
                        {checked && (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#194170] rounded-md border border-[#194170]">
                            <CheckIcon className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="flex-1 text-[13px] tracking-wide text-gray-900">
                      {option.label}
                    </span>
                    <span className="ml-3 text-[12px] text-gray-400">
                      (456)
                    </span>
                  </div>
                </li>
              );
            })}

            {filteredOptions.length === 0 && (
              <li className="px-3 py-2 text-sm text-muted-foreground">
                No options
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
