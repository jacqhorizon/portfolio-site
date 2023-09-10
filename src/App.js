import logo from './logo.svg';
import './App.css';
import LayoutContainer from './containers/layout'
import { ScrollerMotion } from 'scroller-motion'
import ScrollToHashElement from './components/scrollToHashElement'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       THIS IS MY WEBSITE
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://jacqkirkman.com"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       OEPN IT
    //     </a>
    //   </header>
    // </div>
    <>
        {/* <ScrollerMotion> */}
            <LayoutContainer />
        {/* </ScrollerMotion> */}
    </>
  );
}

export default App;
