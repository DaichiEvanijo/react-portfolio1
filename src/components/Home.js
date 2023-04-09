import Feed from './Feed';

import {useContext} from 'react';
import DataContext from '../context/DataContext';


const Home = () => {

  const {searchResults, fetchError, isLoading} = useContext (DataContext);
  
  return (
    <main className='home'>
      {isLoading && <p>Loading posts..</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? 
        <Feed posts={searchResults} /> :
        <p>No post to display</p>)}
    </main>
  )
}

export default Home