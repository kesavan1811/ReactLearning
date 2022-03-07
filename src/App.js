import './App.css';
import DropDown from './components/dropdown';
import UserFilter from './components/Filter';
import ReactFirebaseFileUpload from './components/firebase_Picture/Index';

function App() {

  return (
    <div className="App">
      {/* <ReactFirebaseFileUpload/> */}
      {/* <DropDown/> */}
      <UserFilter/>
    </div>
  );
}

export default App;
