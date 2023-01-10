import './App.css';
import Footer from './compoments/Footer/Footer';
import Header from './compoments/Header/Header';

function App() {
  const name = "Sangram Behera";
  return (
    // jsx 
    <div className="App">
      <header className="App-header">
        <p>
           React Course in Hindi 
        </p>
        <div>
            <label htmlFor="name">Name<span style={{color:"red"}}>* </span>: </label>
            <input type="text" name="name" id="name"  value={name}/>
        </div>
        <Header name={'Sangram'}/>
        <Footer name={'Copyright @ SAIS 2022-2023.'}/>
      </header>
    </div>
  );
}

export default App;
