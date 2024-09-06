import './App.css';

const tg = window.Telegram.WebApp;


function App() {

  /*useEffect(()=> {
    tg.ready();
  }, [])*/
  
  const onClose = () =>{
    tg.close();
  }
  return (
    <div className="App">
      work
      <button onClick= {onClose}>Закрыть</button>
    <h1>hello</h1>
    </div>
  );
}

export default App;
