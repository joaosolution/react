
const Challenge = () => {

  const a=5;
  const b=6;
  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>

      <button onClick={() => console.log(a+b) }>Clique para ver a soma!</button>
      
    </div>
  );
};

export default Challenge;