import './App.scss';
import Header from './Components/Header/Header';
import HeaderH2 from './Components/Header/HeaderH2';
// import Form from "./Components/UI/Form";
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Form/> */}
      <HeaderH2/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
