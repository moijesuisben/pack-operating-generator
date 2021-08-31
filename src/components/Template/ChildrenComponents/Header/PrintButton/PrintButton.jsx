import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStylesPdfRender = createUseStyles({
  pdfRender_button: {
    padding: "7px 15px",
    backgroundColor: "inherit",
    border: "1px solid #495057",
    borderRadius: "5px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    color: "#495057",
    marginBottom: "2vh",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#58a1a3",
      borderColor: "#58a1a3",
      color: "#FFFFFF",
    },
  },
});

export default function PrintButton({ printButtonLabel }) {
  const classes = useStylesPdfRender();
  return (
    <button
      onClick={() => window.print()}
      className={clsx(classes.pdfRender_button, "print_hidden")}
    >
      {printButtonLabel}
    </button>
  );
}
