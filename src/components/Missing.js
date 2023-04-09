import {Link} from 'react-router-dom';

const Missing = () => {
  return (
    <main className='missing'>
      <div className="wrapper">
        <h2>Page Not Found</h2>
        <p><Link to="/">Back to the homepage</Link></p>
      </div>
    </main>
  )
}

export default Missing