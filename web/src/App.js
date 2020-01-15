import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://s2.glbimg.com/rRsNxJQKU9ZuKK6MFbztcdj-D4U=/186x105/top/smart/filters:strip_icc()/s2.glbimg.com/eYLCIEb_NRyuGhwlDjLoB63wOTE=/574x110:841x260/267x150/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/A/C/DykZzlRIqciBupQzSOdQ/jfcrz-150120jcrz74835572.jpg"/>
              <div className="user-info">
                <strong>Jair Bolsonaro</strong>
                <span>Java, React, Node.js</span>
              </div>
            </header>
            <p>Ta ok? Paulo Guedes</p>
            <a href="https://github.com/luizfcharry">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://s2.glbimg.com/rRsNxJQKU9ZuKK6MFbztcdj-D4U=/186x105/top/smart/filters:strip_icc()/s2.glbimg.com/eYLCIEb_NRyuGhwlDjLoB63wOTE=/574x110:841x260/267x150/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/A/C/DykZzlRIqciBupQzSOdQ/jfcrz-150120jcrz74835572.jpg"/>
              <div className="user-info">
                <strong>Jair Bolsonaro</strong>
                <span>Java, React, Node.js</span>
              </div>
            </header>
            <p>Ta ok? Paulo Guedes</p>
            <a href="https://github.com/luizfcharry">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://s2.glbimg.com/rRsNxJQKU9ZuKK6MFbztcdj-D4U=/186x105/top/smart/filters:strip_icc()/s2.glbimg.com/eYLCIEb_NRyuGhwlDjLoB63wOTE=/574x110:841x260/267x150/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/A/C/DykZzlRIqciBupQzSOdQ/jfcrz-150120jcrz74835572.jpg"/>
              <div className="user-info">
                <strong>Jair Bolsonaro</strong>
                <span>Java, React, Node.js</span>
              </div>
            </header>
            <p>Ta ok? Paulo Guedes</p>
            <a href="https://github.com/luizfcharry">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://s2.glbimg.com/rRsNxJQKU9ZuKK6MFbztcdj-D4U=/186x105/top/smart/filters:strip_icc()/s2.glbimg.com/eYLCIEb_NRyuGhwlDjLoB63wOTE=/574x110:841x260/267x150/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/A/C/DykZzlRIqciBupQzSOdQ/jfcrz-150120jcrz74835572.jpg"/>
              <div className="user-info">
                <strong>Jair Bolsonaro</strong>
                <span>Java, React, Node.js</span>
              </div>
            </header>
            <p>Ta ok? Paulo Guedes</p>
            <a href="https://github.com/luizfcharry">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;