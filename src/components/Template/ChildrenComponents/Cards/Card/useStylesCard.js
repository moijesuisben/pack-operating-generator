import { createUseStyles } from "react-jss";

const useStylesCard = createUseStyles({
  card_item: {},

  card_button_delete: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1vh",
    "& > *": {
      padding: "7px 15px",
      backgroundColor: "inherit",
      border: "1px solid #495057",
      borderRadius: "5px",
      fontFamily: "Montserrat",
      fontWeight: 600,
      color: "#495057",
    },
    "& > *:hover": {
      cursor: "pointer",
      backgroundColor: "#ec7677",
      borderColor: "#ec7677",
      color: "#FFFFFF",
    },
  },

  card_container: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 15,
    boxShadow: "0 6px 30px 0 rgba(0, 0, 0, 0.16)",
    width: "398px",
    minHeight: "298px",
    padding: "25px 0",
    margin: "0 0.5vw 2.5vh 0.5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
  },

  card_block: {
    width: "85%",
    "&:nth-child(2)": {
      marginTop: "50px",
    },

    "&:nth-child(3)": {
      marginTop: "50px",
    },
  },

  card_information: {
    fontSize: "25px",
    fontWeight: 600,
    margin: 0,
    color: "#f8f9fa",
  },

  card_time: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#f8f9fa",
  },

  card_label: {
    margin: "10px 0",
    fontSize: "15px",
    fontWeight: 500,
    color: "#f8f9fa",
  },

  card_listTopics: {
    listStyle: "none",
    padding: 0,
  },

  card_title: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#f8f9fa",
  },
});

export default useStylesCard;
