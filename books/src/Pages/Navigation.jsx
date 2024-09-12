import { Link } from 'react-router-dom';
import '../App.css';
import Search from '../components/Search';
const Navigation = () => {
  return (
    <nav className='header1'>
      <ul className='headerlist'>
        <li>
          <Link className='navItems' to='/home'>Home</Link>
        </li>
        <li>
          <Link className='navItems' to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
