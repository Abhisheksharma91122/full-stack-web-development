import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {" "}{" "}
      <div className="fixed inset-0 bg-slate-950/45" />{" "}
      <div className="relative w-full max-w-lg">
        {" "}{" "}
        <div className="rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl overflow-hidden">
          {" "}{" "}
          <div className="px-6 pt-7 pb-5 border-b border-slate-200">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                {" "}
                <span className="text-xl font-semibold">$</span>{" "}
              </div>{" "}
              <div>
                {" "}
                <h1 className="text-xl font-semibold text-slate-900">
                  {" "}
                  Currency Converter{" "}
                </h1>{" "}
                <p className="text-sm text-slate-500">
                  {" "}
                  Convert currencies quickly and easily{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}{" "}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="p-6"
          >
            {" "}{" "}
            <div>
              {" "}
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />{" "}
            </div>{" "}{" "}
            <div className="relative h-10">
              {" "}
              <div className="absolute left-0 right-0 top-1/2 border-t border-slate-200" />{" "}
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-slate-800 text-white shadow-md transition-all duration-200 hover:bg-blue-600 hover:scale-105 active:scale-95 cursor-pointer"
                title="Swap currencies"
              >
                {" "}
                ⇅{" "}
              </button>{" "}
            </div>{" "}{" "}
            <div className="mb-6">
              {" "}
              <InputBox
                label="To"
                amount={convertedAmount.toFixed(3)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />{" "}
            </div>{" "}{" "}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.99] cursor-pointer"
            >
              {" "}
              Convert {from.toUpperCase()} → {to.toUpperCase()}{" "}
            </button>{" "}
          </form>{" "}{" "}
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-3">
            {" "}
            <p className="text-center text-xs text-slate-500">
              {" "}
              Enter an amount and select your currencies to convert.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
