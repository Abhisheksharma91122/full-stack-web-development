import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/10 ${className}`}
    >
      {" "}
      <div className="flex items-end justify-between gap-4">
        {" "}{" "}
        <div className="min-w-0 flex-1">
          {" "}
          <label
            htmlFor={amountInputId}
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500"
          >
            {" "}
            {label}{" "}
          </label>{" "}
          <input
            id={amountInputId}
            className="w-full bg-transparent text-2xl font-semibold text-slate-900 outline-none placeholder:text-slate-300 disabled:cursor-not-allowed disabled:text-slate-400"
            type="number"
            placeholder="0.00"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />{" "}
        </div>{" "}{" "}
        <div className="w-28 shrink-0">
          {" "}
          <label
            htmlFor={`${amountInputId}-currency`}
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500"
          >
            {" "}
            Currency{" "}
          </label>{" "}
          <select
            id={`${amountInputId}-currency`}
            className="w-full cursor-pointer appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold uppercase text-slate-700 outline-none transition hover:bg-slate-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-50"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {" "}
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {" "}
                {currency}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default InputBox;
