import {useState, useEffect} from 'react';
import api from './api/posts';
import {format} from 'date-fns';
import { useParams, Link, useHistory } from 'react-router-dom';

import {useContext} from 'react';
import DataContext from '../context/DataContext';

const EditPost = () => {
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const history = useHistory();
  
  const {posts, setPosts} = useContext(DataContext);
  
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id)

  useEffect(() => {
    if(post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody])

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd,yyyy pp');
    const updatedPost = {id, title:editTitle, datetime, body:editBody};
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? {...response.data} : post));
      setEditTitle('');
      setEditBody('');
      history.push('/');
    } catch(err){
      console.log(`Error: ${err.message}`)
    }
  }
  
  
  return (
    <main className='editpost'>
      <div className="wrapper">
        {editTitle &&
          <>
            <h2>EditPost</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="editTitle">Title</label>
              <input id="editTitle" type="text" required value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
              <label htmlFor="editBody">Post</label>
              <textarea id="editBody" cols="100" rows="30" required value={editBody} onChange={(e) => setEditBody(e.target.value)}></textarea>
              <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
            </form>
          </>
        }
        {!editTitle &&
          <>
            <h2>post doesn't exist</h2>
            <p><Link to="/">Back to my homepage</Link></p>
          </>
        }
      </div>
    </main>
  )
}

export default EditPost