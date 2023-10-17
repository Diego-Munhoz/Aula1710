import njr from './img/neymarImage.png';
import reus from './img/reusImagem.jpg';
import Noticia from './components/NoticiaComponentes';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Neymar JR 10</h1>
      <img src={njr} alt='Jogador de futebol Neymar Junior' />
      <h1>Olha só que Legal</h1>
      <Noticia 
      titulo="Reus 11"
      image={reus}
      alt="Jogador de Futebol Marcos Reus"
      descricao="Jogador do Borussia Dortmund"
      categoria="Futebol"
      />
    </div>
  );
}

export default App;
