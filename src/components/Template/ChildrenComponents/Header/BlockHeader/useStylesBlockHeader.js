import { createUseStyles } from "react-jss";

const useStylesBlockHeader = createUseStyles({
  blockHeader_container: {
    display: "flex",
    flexDirection: "row",

    "& > *:nth-child(2)": {
      margin: "0 1vw",
    },
  },
  blockHeader_item: {
    backgroundColor: "#0382c4",
    borderRadius: 15,
    minWidth: "300px",
    padding: "20px 40px",
    boxShadow: "0 6px 30px 0 rgba(0, 0, 0, 0.16)",
  },

  blockHeader_value: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#f8f9fa",
    textAlign: "center",
    margin: "8px auto 0 auto",
  },

  blockHeader_description: {
    margin: "20px auto 0 auto",
    fontSize: 15,
    fontWeight: 600,
    color: "#f8f9fa",
    textAlign: "center",
  },
});

export default useStylesBlockHeader;
