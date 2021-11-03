import './App.css';
import FooterComponent from './components/FooterComponent/FooterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import UseEffectComponent from './components/UseEffectComponent/UseEffectComponent';
import UseStateComponent from './components/UseStateComponent/UseStateComponent';

const App = () => {
  return (
    <div className="App">
      <HeaderComponent/>
      
      <div className="row">
        <div className="col"><UseStateComponent/></div>
        <div className="col"><UseEffectComponent/></div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
