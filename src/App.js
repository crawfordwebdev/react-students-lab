import './App.css';
import { students } from './data'
import Student from './Student';

function App() {
  return (
    <div className="App">
      {students.map(student => 
        <Student student={student}/>
      )}

    </div>
  );
}

export default App;
