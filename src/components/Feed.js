import {Link} from 'react-router-dom';

const Feed = ({posts}) => {
  return (
    <main className='feed'>
      <h1>Welcome to my blog post website!!</h1>
      {posts.map(post => (
        <article key={post.id} className='singlearticle'>
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p>{post.datetime}</p>
          <p>
            {(post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...`}
          </p>
        </article>
      ))}    
    </main>
    
  )
}

export default Feed