import { createUseStyles } from "react-jss";

const useStylesHeader = createUseStyles({
  header_container: {
    width: "100%",
    margin: "5vh 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > *": {
      margin: "0 auto",
    },
  },
  header_languageSelect: {
    width: "20%",
    marginBottom: "2vh",
  },
  header_title: {
    fontSize: "35px",
    fontWeight: 700,
    lineHeight: "43px",
    color: "#495057",
  },
  header_description: {
    margin: "2.5vh 0 4vh 0",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24px",
    color: "#495057",
  },
});

export default useStylesHeader;
