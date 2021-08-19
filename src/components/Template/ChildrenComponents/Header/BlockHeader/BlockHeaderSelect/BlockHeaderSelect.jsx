import React from "react";
import Select from "react-select";
import customSelect from "../../../../../../styles/customSelect";
// import useStylesBlockHeaderSelect from "./useStylesBlockHeaderSelect";
import useStylesBlockHeader from "../useStylesBlockHeader";

export default function BlockHeaderSelect({
  engagement,
  setEngagement,
  engagementOptions,
  engagementPlaceholder,
  label,
}) {
  // const classesSpecify = useStylesBlockHeaderSelect();
  const classesGeneral = useStylesBlockHeader();

  return (
    <div className={classesGeneral.blockHeader_item}>
      {!engagement ? (
        <Select
          options={engagementOptions}
          defaultValue={engagement}
          onChange={setEngagement}
          placeholder={engagementPlaceholder}
          styles={customSelect}
        />
      ) : (
        <p className={classesGeneral.blockHeader_value}>{engagement.label}</p>
      )}
      <p className={classesGeneral.blockHeader_description}>{label}</p>
    </div>
  );
}
