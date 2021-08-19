import React from "react";
import Template from "./components/Template/Template";


export default function PdfRender() {
  const [print, setPrint] = React.useState(true);

  return (
    <>
      <Template />
      <button className="print_hidden" onClick={() => window.print()}>
        Print this out!
      </button>
    </>
  );
}
