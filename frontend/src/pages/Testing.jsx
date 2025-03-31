import React from 'react';

function Testing() {
  const handlePayment = () => {
    window.location.href = "upi://pay?pa=9784541430@ptsbi&pn=Mayank&am=100&cu=INR";
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with Google Pay</button>
    </div>
  );
}

export default Testing;
