import { useState } from "react";
import { Btn } from "./Btn.jsx";
export default function App() {
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [c4, setC4] = useState("");
  const [c5, setC5] = useState("");
  const [c6, setC6] = useState("");
  const [c7, setC7] = useState("");
  const [c8, setC8] = useState("");
  const [c9, setC9] = useState("");
  const [isXTern, setIsXTern] = useState(true);

  function checkWinner() {
    if (c1 === c2 && c1 === c3 && c1 !== "") return c1;
    if (c4 === c5 && c4 === c6 && c4 !== "") return c4;
    if (c7 === c8 && c7 === c9 && c7 !== "") return c7;
    if (c1 === c4 && c1 === c7 && c1 !== "") return c1;
    if (c2 === c5 && c2 === c8 && c2 !== "") return c2;
    if (c3 === c6 && c3 === c9 && c3 !== "") return c3;
    if (c1 === c5 && c1 === c9 && c1 !== "") return c1;
    if (c3 === c5 && c3 === c7 && c1 !== "") return c3;
    if (
      c1 !== "" &&
      c2 !== "" &&
      c3 !== "" &&
      c4 !== "" &&
      c5 !== "" &&
      c6 !== "" &&
      c7 !== "" &&
      c8 !== "" &&
      c9 !== ""
    )
      return "Draw";
  }
  const winner = checkWinner();
  return (
    <>
      <div className="mx-auto max-w-lg p-10 rounded">
        {!winner ? (
          <h1>{isXTern ? "X's Tern" : "O's Tern"}</h1>
        ) : winner == "Draw" ? (
          <h2 className="text-center">Game is draw</h2>
        ) : (
          <h2 className="text-center">Player {winner} is Winner</h2>
        )}

        <div className="grid grid-cols-3 gap-0.5 size-80 ">
          <button
            onClick={() => {
              if (c1 !== "" || winner) return;
              setC1(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c1}
          </button>
          <button
            onClick={() => {
              if (c2 !== "" || winner) return;
              setC2(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c2}
          </button>
          <button
            onClick={() => {
              if (c3 !== "" || winner) return;
              setC3(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c3}
          </button>
          <button
            onClick={() => {
              if (c4 !== "" || winner) return;
              setC4(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c4}
          </button>
          <button
            onClick={() => {
              if (c5 !== "" || winner) return;
              setC5(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c5}
          </button>
          <button
            onClick={() => {
              if (c6 !== "" || winner) return;
              setC6(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c6}
          </button>
          <button
            onClick={() => {
              if (c7 !== "" || winner) return;
              setC7(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c7}
          </button>
          <button
            onClick={() => {
              if (c8 !== "" || winner) return;
              setC8(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c8}
          </button>
          <button
            onClick={() => {
              if (c9 !== "" || winner) return;
              setC9(isXTern ? "X" : "O");
              setIsXTern(!isXTern);
            }}
            className="border-2 border-blue-900 h-full bg-blue-900 rounded font-bold px-2 py-1 hover:bg-blue-900 active:scale-95 text-amber-50"
          >
            {c9}
          </button>
        </div>
      </div>
      <div className=" flex justify-center pr-5">
        <Btn
          title="Restart"
          onClick={() => {
            setC1("");
            setC2("");
            setC3("");
            setC4("");
            setC5("");
            setC6("");
            setC7("");
            setC8("");
            setC9("");
            setIsXTern(true);
          }}
        />
      </div>
    </>
  );
}
