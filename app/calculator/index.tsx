const CalculatorContainer = () => {
  return (
    <div className="flex justify-center items-center w-9/12 h-96 bg-sky-200 shadow-2xl shadow-slate-950">
      <div className="flex justify-center items-center w-5/6 h-auto">
        <div className="bg-slate-400 w-6/12 p-20">
          <div>
            <h1>Mortgage Calculator</h1>
            <button>Clear All</button>
          </div>
          <div>form</div>
        </div>
        <div className="w-6/12 bg-black p-20">
          <div>
            <h1>Your results</h1>
            <p>
              Your results are shosn based on the information provided. To
              adjust the result, edit the form and click{' '}
              <span className="font-semibold">calculate repayments </span>
              again.
            </p>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContainer;
