
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Notes from './Components/Notes/Notes';


function App() {
  return (
    <div >
      <Header/>
      <Notes/>
      <Footer/>
    </div>
  );
}

export default App;
