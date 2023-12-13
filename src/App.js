import './App.css';
import AddGroup from './components/Group/AddGroup';

import GroupList from './components/Group/GroupList';


function App() {
  
  return (
    <div className="App">
      <h2>Task Manager</h2>
      <div className='main' id='customScroll'>
        
        <GroupList/>
        <AddGroup/>
      
        
      </div>
    </div>
  );
}

export default App;
