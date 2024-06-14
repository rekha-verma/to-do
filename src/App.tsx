import './App.css';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import ToDoList from './pages/ToDoList';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container m-auto min-h-screen'>
        <ToDoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
