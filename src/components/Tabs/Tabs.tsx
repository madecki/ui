import { useCallback, useEffect, useState } from "react";

export interface Tab {
  label: string;
  value: string;
  isActive?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  onTabClick: (value: Tab["value"]) => void;
  className?: string;
}

export const Tabs = ({ tabs, onTabClick, className = "" }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab["value"] | undefined>(
    tabs.find((tab) => tab.isActive)?.value
  );

  const handleTabClick = useCallback(
    (value: Tab["value"]) => {
      setActiveTab(value);
      onTabClick(value);
    },
    [onTabClick]
  );

  useEffect(() => {
    if (!activeTab && tabs.length > 0) {
      handleTabClick(tabs[0].value);
    }
  }, [tabs, activeTab, handleTabClick]);

  return (
    <div className={`flex gap-4 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={`text-white border-b pb-2 cursor-pointer transition-colors ${
            activeTab === tab.value
              ? "border-b-white"
              : "border-b-transparent hover:border-b-white/50"
          }`}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
