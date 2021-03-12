import './App.css';  
import Profil from './profil/Profil';


function App() {  
  function handleName(name){ 
    alert(name); 
    } 
    
  return (
    <div style={{backgroundColor:'#f14668'}}className="App">
      <h1 style={{textShadow:'3px 2px '}}>HELLO WORLD !</h1> 
      <Profil fullName="Dorra Elkahla" bio="keep smiling"  profession="A Full Stack Student" 
                  handleName={handleName} >
      <img style={{border:'solid 5px #1e212d'}} src="./img/stay-positive.jpg" alt="" /></Profil>
    </div>
  );
}

export default App; 


