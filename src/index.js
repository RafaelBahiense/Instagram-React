import ReactDOM from "react-dom";
import Navbar from "./Navbar/Navbar";
import Corpo from "./Corpo/Corpo";
import FundoMobile from "./FundoMobile/FundoMobile";

function App() {
    return (
    <>
        <Navbar />
        <Corpo />
        <FundoMobile />
    </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));