import React, { useState } from "react";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [emi, setEmi] = useState(null);
  const [interest, setInterest] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(term);

    if (p && r && n) {
      const emiVal = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emiVal * n;
      const totalInterest = totalPayment - p;

      setEmi(emiVal.toFixed(2));
      setTotal(totalPayment.toFixed(2));
      setInterest(totalInterest.toFixed(2));
    }
  };

  return (
    <div className="card p-4 shadow-lg emi-card">
      <h2 className="text-center mb-4 text-primary">EMI Calculator</h2>
      <form onSubmit={calculateEMI}>
        <div className="mb-3">
          <label>Principal Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Interest Rate (Annual %)</label>
          <input
            type="number"
            className="form-control"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Loan Term (Months)</label>
          <input
            type="number"
            className="form-control"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-100">Calculate EMI</button>
      </form>

      {emi && (
        <div className="result mt-4 p-3 bg-light rounded">
          <h5 className="text-success">Summary:</h5>
          <p><strong>Monthly EMI:</strong> ₹{emi}</p>
          <p><strong>Total Interest:</strong> ₹{interest}</p>
          <p><strong>Total Payment:</strong> ₹{total}</p>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
