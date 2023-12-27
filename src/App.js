import {useState} from "react";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    //const [date, setDate] = useState(Date());
    const date = new Date();
    console.log(date)
    date.setDate(date.getDate() + count)

    function handleMinus() {
        setCount(count - step);
    }

    function handlePlus() {
        setCount(count+step);
    }

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    function handleSlider(e) {
        setStep(Number(e.target.value))
    }

    return (
      <div>
          <div className="">
              <input type="range" min={"0"} max={"10"} value={step} onChange={(e) => handleSlider(e)}/>
              <span>Step: {step}</span>
          </div>

          <div className="">
              <button onClick={handleMinus}>-</button>
              <input type="text" value={count}/>
              <button onClick={handlePlus}>+</button>
          </div>

          <p>
              <span>
                  {count ===0 ? "Today is " : count === 1 ? `One day from now is ` : count > 1 ? `${count} days from today will be `: `${Math.abs(count)} days ago was ` }
              </span>
              <span>{date.toDateString()}</span>
          </p>

          {
              count !==0 ?
                  <div className="">
                      <button onClick={handleReset}>Reset</button>
                  </div>
                  : null
          }

      </div>
  );
}

export default App;
