import {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

export type SelectOption = {
  value: string;
  label: string;
};

type BaseSelectProps = {
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  className?: string;
  /**
   * Base `data-testid` for Playwright. Listbox: `${testId}-listbox`,
   * options: `${testId}-option-${slug}` where slug is alphanumeric-only (value-based).
   */
  testId?: string;
};

export type SingleSelectProps = BaseSelectProps & {
  multi?: false;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export type MultiSelectProps = BaseSelectProps & {
  multi: true;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
};

export type SelectProps = SingleSelectProps | MultiSelectProps;

function optionTestSlug(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, "_");
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function buildVariantClasses(
  variant: "primary" | "secondary" | "tertiary",
  isFocused: boolean,
  disabled: boolean,
) {
  const inputClassNames = [
    "min-w-0 flex-1 rounded-none border-0 font-sans",
    "py-4 pl-5 pr-2",
    "outline-hidden",
    "bg-transparent shadow-none",
  ];

  const inputWrapperClassNames = [
    "flex min-w-0 w-full items-stretch rounded-smb p-px",
  ];

  // Match Input: gradient and lightgray both set background — only one so the full ring shows on focus.
  if (isFocused) {
    inputWrapperClassNames.push("bg-gradient");
  } else if (variant === "primary" || variant === "tertiary") {
    inputWrapperClassNames.push("bg-lightgray");
  }

  const innerFieldClassNames = [
    "flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-sm",
  ];

  const chevronClassNames = [
    "pointer-events-none flex shrink-0 items-center justify-center self-stretch pl-1 pr-4",
  ];

  switch (variant) {
    case "primary":
      inputClassNames.push("text-primary placeholder:text-lightgray");
      innerFieldClassNames.push("bg-neutral");
      chevronClassNames.push("text-primary");
      break;
    case "secondary":
      inputClassNames.push(
        "text-neutral placeholder:text-lightgray dark:placeholder:text-icongray",
      );
      innerFieldClassNames.push("bg-neutral dark:bg-gray");
      chevronClassNames.push("text-neutral");
      break;
    case "tertiary":
      inputClassNames.push(
        "text-neutral placeholder:text-lightgray dark:placeholder:text-icongray",
      );
      innerFieldClassNames.push("bg-neutral dark:bg-primary");
      chevronClassNames.push("text-neutral dark:text-icongray");
      break;
  }

  if (disabled) {
    inputClassNames.push("cursor-not-allowed opacity-50");
    chevronClassNames.push("opacity-50");
  }

  return {
    inputClassNames,
    inputWrapperClassNames,
    innerFieldClassNames,
    chevronClassNames,
  };
}

export function Select(props: SelectProps) {
  const {
    name,
    label,
    options,
    placeholder = "Select…",
    variant = "primary",
    disabled = false,
    className = "",
    testId: testIdProp,
  } = props;

  const isMulti = props.multi === true;
  const singleValueProp = !isMulti
    ? (props as SingleSelectProps).value
    : undefined;
  const multiValueProp = isMulti
    ? (props as MultiSelectProps).value
    : undefined;
  const isControlled = isMulti
    ? multiValueProp !== undefined
    : singleValueProp !== undefined;

  const reactId = useId();
  const listboxId = `${name}-listbox-${reactId.replace(/:/g, "")}`;
  const baseTestId = testIdProp ?? `select-${name}`;

  const [internalSingle, setInternalSingle] = useState(
    !isMulti && !isControlled
      ? ((props as SingleSelectProps).defaultValue ?? "")
      : "",
  );
  const [internalMulti, setInternalMulti] = useState<string[]>(
    isMulti && !isControlled
      ? [...((props as MultiSelectProps).defaultValue ?? [])]
      : [],
  );

  const selectedSingle = useMemo(() => {
    if (isMulti) return "";
    if (singleValueProp !== undefined) return singleValueProp;
    return internalSingle;
  }, [isMulti, singleValueProp, internalSingle]);

  const selectedMulti = useMemo(() => {
    if (!isMulti) return [];
    if (multiValueProp !== undefined) return multiValueProp;
    return internalMulti;
  }, [isMulti, multiValueProp, internalMulti]);

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const optionByValue = useMemo(() => {
    const m = new Map<string, SelectOption>();
    for (const o of options) m.set(o.value, o);
    return m;
  }, [options]);

  const filteredOptions = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return options;
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.value.toLowerCase().includes(q),
    );
  }, [options, filter]);

  const closedDisplay = useMemo(() => {
    if (isMulti) {
      if (selectedMulti.length === 0) return "";
      return selectedMulti
        .map((v) => optionByValue.get(v)?.label ?? v)
        .join(", ");
    }
    if (!selectedSingle) return "";
    return optionByValue.get(selectedSingle)?.label ?? selectedSingle;
  }, [isMulti, selectedMulti, selectedSingle, optionByValue]);

  const inputValue = open ? filter : closedDisplay;

  const onSingleChange = !isMulti
    ? (props as SingleSelectProps).onChange
    : undefined;
  const onMultiChange = isMulti
    ? (props as MultiSelectProps).onChange
    : undefined;

  const setSingle = useCallback(
    (next: string) => {
      if (!isMulti) {
        if (!isControlled) setInternalSingle(next);
        onSingleChange?.(next);
      }
    },
    [isMulti, isControlled, onSingleChange],
  );

  const setMulti = useCallback(
    (next: string[]) => {
      if (isMulti) {
        if (!isControlled) setInternalMulti(next);
        onMultiChange?.(next);
      }
    },
    [isMulti, isControlled, onMultiChange],
  );

  const close = useCallback(() => {
    setOpen(false);
    setFilter("");
    setHighlightIndex(0);
  }, []);

  const openMenu = useCallback(() => {
    if (disabled) return;
    setOpen(true);
    setFilter("");
    setHighlightIndex(0);
  }, [disabled]);

  useEffect(() => {
    if (!open) return;
    const max = Math.max(0, filteredOptions.length - 1);
    setHighlightIndex((i) => Math.min(i, max));
  }, [open, filteredOptions.length]);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [open, close]);

  const commitHighlight = useCallback(() => {
    const opt = filteredOptions[highlightIndex];
    if (!opt) return;

    if (isMulti) {
      const set = new Set(selectedMulti);
      if (set.has(opt.value)) set.delete(opt.value);
      else set.add(opt.value);
      setMulti([...set]);
    } else {
      setSingle(opt.value);
      close();
      inputRef.current?.blur();
    }
  }, [
    filteredOptions,
    highlightIndex,
    isMulti,
    selectedMulti,
    setMulti,
    setSingle,
    close,
  ]);

  const onOptionMouseDown: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const onOptionClick = (opt: SelectOption) => {
    if (isMulti) {
      const set = new Set(selectedMulti);
      if (set.has(opt.value)) set.delete(opt.value);
      else set.add(opt.value);
      setMulti([...set]);
    } else {
      setSingle(opt.value);
      close();
    }
  };

  const onInputFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsFocused(true);
    if (!disabled) setOpen(true);
  };

  const onInputBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const next = e.relatedTarget as Node | null;
    if (listRef.current?.contains(next)) return;
    setIsFocused(false);
    close();
  };

  const onInputChange = (v: string) => {
    if (!open) setOpen(true);
    setFilter(v);
    setHighlightIndex(0);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;

    if (e.key === "Escape") {
      e.preventDefault();
      close();
      inputRef.current?.blur();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) openMenu();
      else
        setHighlightIndex((i) =>
          Math.min(i + 1, Math.max(0, filteredOptions.length - 1)),
        );
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) openMenu();
      else setHighlightIndex((i) => Math.max(0, i - 1));
      return;
    }

    if (e.key === "Enter" && open) {
      e.preventDefault();
      commitHighlight();
      return;
    }

    if (e.key === "Home" && open) {
      e.preventDefault();
      setHighlightIndex(0);
      return;
    }

    if (e.key === "End" && open) {
      e.preventDefault();
      setHighlightIndex(Math.max(0, filteredOptions.length - 1));
      return;
    }
  };

  const {
    inputClassNames,
    inputWrapperClassNames,
    innerFieldClassNames,
    chevronClassNames,
  } = buildVariantClasses(variant, isFocused, disabled);

  const activeDescendant =
    open && filteredOptions[highlightIndex]
      ? `${name}-option-${optionTestSlug(filteredOptions[highlightIndex].value)}`
      : undefined;

  const listboxClass =
    "absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-auto rounded-sm border border-lightgray bg-neutral py-1 shadow-lg dark:border-gray dark:bg-gray dark:text-white";

  return (
    <div ref={containerRef} className={`relative ${className}`.trim()}>
      <label htmlFor={name}>
        <span className="sr-only">{label}</span>

        <div className={inputWrapperClassNames.join(" ")}>
          <div className={innerFieldClassNames.join(" ")}>
            <input
              ref={inputRef}
              id={name}
              name={name}
              type="text"
              autoComplete="off"
              spellCheck={false}
              disabled={disabled}
              placeholder={placeholder}
              value={inputValue}
              aria-label={label}
              aria-expanded={open}
              aria-haspopup="listbox"
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-activedescendant={activeDescendant}
              role="combobox"
              data-testid={baseTestId}
              className={inputClassNames.join(" ")}
              onChange={(e) => onInputChange(e.target.value)}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onKeyDown={onKeyDown}
            />
            <div className={chevronClassNames.join(" ")} aria-hidden>
              <ChevronDown className="block shrink-0" />
            </div>
          </div>
        </div>
      </label>

      {open && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-multiselectable={isMulti}
          aria-label={label}
          data-testid={`${baseTestId}-listbox`}
          tabIndex={-1}
          className={listboxClass}
        >
          {filteredOptions.length === 0 ? (
            <li
              className="px-5 py-3 text-sm text-lightgray dark:text-icongray"
              role="presentation"
            >
              No matches
            </li>
          ) : (
            filteredOptions.map((opt, index) => {
              const selected = isMulti
                ? selectedMulti.includes(opt.value)
                : selectedSingle === opt.value;
              const highlighted = index === highlightIndex;
              const oid = `${name}-option-${optionTestSlug(opt.value)}`;
              return (
                <li
                  key={opt.value}
                  id={oid}
                  role="option"
                  aria-selected={selected}
                  data-testid={`${baseTestId}-option-${optionTestSlug(opt.value)}`}
                  data-option-value={opt.value}
                  className={[
                    "cursor-pointer px-5 py-3 text-sm text-primary dark:text-white",
                    highlighted
                      ? "bg-lightgray/50 dark:bg-white/10"
                      : "",
                    selected ? "font-semibold" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseDown={onOptionMouseDown}
                  onMouseEnter={() => setHighlightIndex(index)}
                  onClick={() => onOptionClick(opt)}
                >
                  {isMulti && (
                    <span className="mr-2 inline-block w-4 text-center" aria-hidden>
                      {selected ? "✓" : ""}
                    </span>
                  )}
                  {opt.label}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

export default Select;
