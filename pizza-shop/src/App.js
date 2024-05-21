import './scss/app.scss';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Error />
        </div>
      </div>
    </div>
  );
}

export default App;
