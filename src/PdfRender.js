import React from "react";
import Template from "./components/Template/Template";


export default function PdfRender() {
  return (
    <>
      <Template />
      <button className="print_hidden" 
      onClick={() => window.print()}
      >
        Print this out!
      </button>
    </>
  );
}
