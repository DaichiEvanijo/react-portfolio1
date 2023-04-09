import Header from './components/Header';
import Home from './components/Home';
import PostPage from './components/PostPage';
import NewPost from './components/NewPost';
import About from './components/About';
import Missing from './components/Missing';
import Footer from './components/Footer';
import EditPost from './components/EditPost';
import{Route, Switch} from 'react-router-dom';

import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title="React Portfolio" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/edit/:id"component={EditPost} />
          <Route path="/about" component={About}/>
          <Route path="*" component={Missing}/>
        </Switch>
      </DataProvider>
      <Footer/>
    </div>
  );
}

export default App;
