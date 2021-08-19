import { createUseStyles } from "react-jss";

const useStylesLoader = createUseStyles({
    loader_container :{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
    },

    loader_media : {
        height: "30vh",
        marginBottom: "5vh",
        animation: "App-logo-spin infinite 20s linear",
    },

    "@keyframes App-logo-spin" :{
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        }
      }
});

export default useStylesLoader;
