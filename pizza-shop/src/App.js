import './scss/app.scss';
import Header from './components/Header.jsx';
import Categories from './components/Categories';
import Sort from './components/Sort.jsx';
import ItemsList from './components/ItemsList.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [pizzas, setPizzas] = useState([]);

  // useEffect(() => {
  //   fetch('https://6637bb3c288fedf693812f99.mockapi.io/pizza-react')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setPizzas(json.data);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //       alert('Ошибка с подгрузкой данных');
  //     });
  // }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>

          <ItemsList />
        </div>
      </div>
    </div>
  );
}

export default App;
