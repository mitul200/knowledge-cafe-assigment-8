import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <ToastContainer />
    </div>
  );
};

export default App;
