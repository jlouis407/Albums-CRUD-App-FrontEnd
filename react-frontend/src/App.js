import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import ListAlbumsComponent from './components/ListAlbumsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAlbumComponent from './components/CreateAlbumComponent';
import UpdateAlbumComponent from './components/UpdateAlbumComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListAlbumsComponent}></Route>
                <Route path = "/albums" component = {ListAlbumsComponent}></Route>
                <Route path = "/add-album/:id" component = {CreateAlbumComponent}></Route>
              
              {/* <Route path = "/update-album/:id" component = {UpdateAlbumComponent}></Route> }*/}
              
              </Switch>
             </div>
           <FooterComponent/>
      </Router>
    </div>
   
  );
}

export default App;
