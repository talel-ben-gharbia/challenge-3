import { useState } from "react";
import "./styles.css";
const faqs = [
  {
    title: "where are these chairs assembled ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hicquis amet accusantium deserunt modi dicta accusamus dolorem asperioresmolestias.",
  },
  {
    title: "how long do i have to return my chair ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hicquis amet accusantium deserunt modi dicta accusamus dolorem asperioresmolestias.",
  },
  {
    title: " Do you ship to countries outside the EU ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hicquis amet accusantium deserunt modi dicta accusamus dolorem asperioresmolestias.",
  },
];
export default function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  return (
    <div>
      {data.map((ele, i) => (
        <AccordianItem number={i} title={ele.title} text={ele.text} />
      ))}
    </div>
  );
}

function AccordianItem({ number, title, text }) {
  const [isOpen, setIsopen] = useState(true);

  const handleToglle = () => {
    setIsopen((curr) => !curr);
  };
  return (
    <div onClick={handleToglle} className={`card ${isOpen ? "open" : ""}`}>
      <div className="card-header">
        <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>

      <div>{isOpen && <p>{text}</p>}</div>
    </div>
  );
}
