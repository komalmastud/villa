import ReactDOM from "react-dom/client";
import Card from "./Card";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <Card img="../assets/card2.jpg" title="Casa Simoes - Candolim" />
    <Card img="../assets/card3.jpg" title="Villa Amethyst - Saligao" />
    <Card img="../assets/card4.jpg" title="Sidhowal Lodge" />
    <Card img="../assets/card5.jpg" title="Out Of The Woods" />
  </>
);