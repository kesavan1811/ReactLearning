import './App.css';
import Dragndrop from './components/dragNdrop';
import DropDown from './components/dropdown';
import UserFilter from './components/Filter';
import ReactFirebaseFileUpload from './components/firebase_Picture/Index';
import Charts from './components/googlecharts';
import Googlecharts from './components/googlecharts/Charts/Calendar';
import CalendarReact from './components/Calendar';
import ClipBoard from './components/Clipboard';
import FacebookLoginReact from './components/FacebookLogin';
import PrintReact from './components/PrintReact';

function App() {

  return (
    <div className="App">
      {/* <ReactFirebaseFileUpload/> */}
      {/* <DropDown/> */}
      {/* <UserFilter/> */}
      {/* <Dragndrop/> */}
      {/* <Charts/> */}
      {/* <CalendarReact/> */}
      {/* <ClipBoard/> */}
      {/* <FacebookLoginReact/> */}
      <PrintReact/>
    </div>
  );
}

export default App;
