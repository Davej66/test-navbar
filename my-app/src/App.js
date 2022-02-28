import css from "./components/css/NavBarSimple.module.css";
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.NavBar}>
      {<NavBarSimple />}
    </div>
  );
}

export default App;