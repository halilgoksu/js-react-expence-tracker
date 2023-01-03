import React from "react";

const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
