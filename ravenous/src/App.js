import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import './App.css';

const mockBusiness = {
  image: 'IDOScard.png',
  name: 'I Dream of Sweets',
  address: '824 Noyes St.',
  city: 'Evanston',
  state: 'IL',
  zipcode: '60202',
  category: 'Cafe',
  rating: 3,
  review_count: 2,
};

const mockBusinessList = [mockBusiness, mockBusiness, mockBusiness];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
      </header>
      <main>
        <SearchBar />
        <BusinessList businesses={mockBusinessList} />
      </main>
    </div>
  );
}

export default App;
