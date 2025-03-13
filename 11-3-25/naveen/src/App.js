import './App.css';

function App() {
  const x = 4;
  let text = "Vite";

  if (x < 10) text = "React";

  return (
    <>
      <p>{text}</p>
      {(() => {
        if (x < 5) {
          text = "Vite";
        }
        return <p>{text}</p>;
      })()}
    </>
  );
}

export default App;
