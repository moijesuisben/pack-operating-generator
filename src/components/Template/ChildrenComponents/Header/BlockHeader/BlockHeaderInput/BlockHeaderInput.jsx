import React from "react";
import useStylesBlockHeaderInput from "./useStylesBlockHeaderInput";
import useStylesBlockHeader from "../useStylesBlockHeader";

export default function BlockHeaderInput({
  label,
  placeholder,
  ConfirmationLabel,
}) {
  const classesSpecify = useStylesBlockHeaderInput();
  const classesGeneral = useStylesBlockHeader();

  const [input, setInput] = React.useState("");
  const [form, setForm] = React.useState(true);

  const handleSubmitBlockHeaderInput = (event) => {
    event.preventDefault();
    setForm(false);
  };

  return (
    <>
      <div className={classesGeneral.blockHeader_item}>
        {form ? (
          <form
            onSubmit={handleSubmitBlockHeaderInput}
            className={classesSpecify.blockHeaderInput_block}
          >
            <input
              className={classesSpecify.blockHeaderInput_input}
              placeholder={placeholder}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" value={ConfirmationLabel} />
          </form>
        ) : (
          <p className={classesGeneral.blockHeader_value}>{input}</p>
        )}
        <p className={classesGeneral.blockHeader_description}>{label}</p>
      </div>
    </>
  );
}
