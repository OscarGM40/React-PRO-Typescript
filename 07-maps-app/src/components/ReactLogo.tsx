import reactLogo from "./../logo.svg";

const ReactLogo = () => {
  return <img src={reactLogo} alt="react-logo" style={{
    position: "fixed",
    bottom:"20px",
    right:"20px",
    width:"130px",
    zIndex:9,
  }}/>;
};
export default ReactLogo;
