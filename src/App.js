import { useEffect } from 'react';
import './App.css';
import AddGroup from './components/Group/AddGroup';
import { fromStorage } from './store/groupSlise';
import { fromStorage as fromStorageTask } from './store/taskSlice';
import GroupList from './components/Group/GroupList';
import { useDispatch } from 'react-redux';


function App() {
  const groupStorage = localStorage.getItem("groups");
  const taskStorage = localStorage.getItem("tasks");
  const dispatch = useDispatch();

  useEffect(() => {
    if (groupStorage){
      dispatch(fromStorage());
    }
    if (taskStorage){
      dispatch(fromStorageTask());
    }
    else {
      localStorage.setItem("groups", JSON.stringify({groups: []}));
      localStorage.setItem("tasks", JSON.stringify({tasks: []}));
    }
  }, [dispatch, groupStorage, taskStorage]);
  
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
