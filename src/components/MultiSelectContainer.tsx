import React from "react";
import MultiSelect from "./MultiSelect";

type Props = {
  setIsBlur: (value: boolean) => void;
}

const MultiSelectContainer: React.FC<Props> = ({ setIsBlur }) => {
  return (
    <div className="rounded border border-blue-500 p-2 flex gap-6">
      <MultiSelect
        label="Select 1"
        onToggle={setIsBlur}
      />
      <MultiSelect
        label="Select 2"
        onToggle={setIsBlur}
      />
    </div>
  )
}

export default MultiSelectContainer;
