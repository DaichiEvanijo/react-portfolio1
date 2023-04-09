import {useParams, Link} from 'react-router-dom';
import api from './api/posts';
import {useHistory} from 'react-router-dom';

import {useContext} from 'react';
import DataContext from '../context/DataContext';

const PostPage = () => {

  const {posts, setPosts} = useContext(DataContext);
  
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  const history = useHistory();

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
      const postList = posts.filter(post => post.id !== id);
      setPosts(postList);
      history.push('/');
    }catch(err){
      console.log(`Error: ${err.message}`)
    }
  }

  const check = () => {
    const result = window.confirm('Is it really ok to delete this post ? This action is not reversable');

    if(result){
      handleDelete(post.id);
    }else{
      history.push(`/post/${id}`);
    }

  }


  return (
    <main className='postpage'>
      <div className="wrapper">
        <article>
          {post &&
            <>
              <h2>{post.title}</h2>
              <p>{post.datetime}</p>
              <p>{post.body}</p>
              <Link to={`/edit/${post.id}`}><button>Edit Post</button></Link>
              <button onClick={check}>Delete Post</button>
            </> 
          }
          {!post &&
            <>
              <h2>Post not Found</h2>
              <Link to="/">Back to the homepage</Link>            
            </>
          }
        </article>
      </div>
    </main>
  )
}

export default PostPage