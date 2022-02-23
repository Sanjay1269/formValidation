import logo from './logo.svg';
import './App.css';
import FormValidation from './components/FormValidation';
import MultipleInputs from './components/MultipleInputs';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function App() {
  return (
    // <Router>
    //   <div className="App">
        
    //     {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //     <div>
    //       <nav>
    //         <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    //           <Link to="/">App</Link>
    //           <Link to="/formvalidation">Form Validation</Link>
    //           <Link to="/multipleinput">Multiple Inputs</Link>
    //         </div>
    //       </nav>
    //     </div>
    //     <div>
    //       <Route path="/" component={App} />
    //       <Route exact={true} path="/formvalidation" component={FormValidation} />
    //       <Route exact={true} path="/multipleinput" component={MultipleInputs} />
    //     </div>
    //   </div>
    // </Router >

    <div className='App'>
      {/* <MultipleInputs/>  */}
      <FormValidation/>
    </div>

  );
}

export default App;
