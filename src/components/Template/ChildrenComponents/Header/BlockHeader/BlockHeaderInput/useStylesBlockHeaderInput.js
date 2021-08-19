import { createUseStyles } from "react-jss";

const useStylesBlockHeaderInput = createUseStyles({
  blockHeaderInput_block: {
    height: "36px",
    backgroundColor: "white",
    borderRadius: "4px",
    border: "1px solid #cccccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > *": {
      height: "20px",
      padding: "0 8px",
      border: "none",
      backgroundColor: "white",
    },

    "& > *:nth-child(1)": {
      flex: 2,
      borderRight: "1px solid #cccccc",
    },

    "& > *:nth-child(2)": {
      color: "#c5c5c5",
      fontFamily: "Montserrat",
      fontWeight: 500,
    },
  },

  blockHeaderInput_input: {
    "&::placeholder": {
      fontFamily: "Montserrat",
      color: "#6D7D85",
      fontSize: "14px",
      fontWeight: 400,
    },
  },
});

export default useStylesBlockHeaderInput;
