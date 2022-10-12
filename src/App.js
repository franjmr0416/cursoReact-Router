import { Routes, Route, Link, useMatch, NavLink } from 'react-router-dom';

const Proyecto = () => {
  const match = useMatch('/portafolio/:proyecto_id');
  const { proyecto_id } = match.params;

  return <h1>Proyecto {proyecto_id}</h1>;
};

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink
            end
            to={'proyecto-1'}
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
          >
            Proyecto 1
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to={'proyecto-2'}
            className={({ isActive }) =>
              'nav-link' + (isActive ? 'activated' : '')
            }
          >
            Proyecto 2
          </NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path={':proyecto_id'} element={<Proyecto />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to='/'>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink end to='/portafolio'>
              Portafolio
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path='/' element={<h1>Inicio</h1>} />
          <Route path='/portafolio/*' element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
