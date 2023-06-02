import BaseColaboradores from './BaseColaboradores';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(BaseColaboradores)
  const [filtroColaborador, setFiltroColaborador] = useState([]);

  const handleFiltroColaborador = (array) => {
    setFiltroColaborador(array);
  };

  return (
    <div className="App">
      <Header data={data} onFiltroColaborador={handleFiltroColaborador}/>
      <Main data={data} setData={setData}/>
      <Section data={filtroColaborador.length > 0 ? filtroColaborador : data} />
    </div>
  );
}

export default App;
