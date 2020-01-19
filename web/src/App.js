import React from 'react';

import './global.css';
import './App.css';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que o componente pai passa para o componente filho.
// Estado: Informações mantidas pelo componente. (Imutabilidade).


function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group"></div>


          <div class="input-block">
            <label htmlFor="username_github">Usuário</label>
            <input name="github_username" id="username_github" required/>
          </div>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
