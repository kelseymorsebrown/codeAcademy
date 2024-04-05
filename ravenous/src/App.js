import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
      </header>
      <body>
        <SearchBar />
        <BusinessList />
      </body>
    </div>
  );
}

export default App;
