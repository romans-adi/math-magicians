import React from 'react';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/Quote/Quote';

function App() {
  return (
    <div className="container">
      <Calculator />
      <QuoteDisplay />
    </div>
  );
}

export default App;
