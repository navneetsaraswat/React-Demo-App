import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CreateUser from './CreateUser';
import UsersList from './UsersList';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

import {Button,Navbar,Nav,FormControl,Form} from 'react-bootstrap';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
    //     <Home></Home>
    //     <About></About>
    //     <Contact></Contact>
    //   </header>
    // </div>
    <>       
    <Navbar bg="primary" variant="dark">      
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        <Nav.Link href="/CreateUser">CreateUser</Nav.Link>
        <Nav.Link href="/UsersList">UsersList</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>  
    <Router>
      <div>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/CreateUser">
            <CreateUser />
          </Route>
          <Route path="/UsersList">
            <UsersList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
  );
}
export default App;
