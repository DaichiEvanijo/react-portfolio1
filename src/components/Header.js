import {Link} from 'react-router-dom';

import {useContext} from 'react';
import DataContext from '../context/DataContext';

const Header = ({title}) => {

  const {search,setSearch} = useContext(DataContext);
  
  return (
    <header>
      <h1><Link to="/">{title}</Link></h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Seach Post</label>
        <input type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/post">New Post</Link></li>
        <li><Link to ="/about">About</Link></li>
      </ul>
  </header>    
  )
}

export default Header