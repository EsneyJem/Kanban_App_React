import './App.css';
import Kanban from './components/kanban/Kanban';

function App() {
  return (
    <div style={{padding: "50px"}}>
     <h1 style={{marginBottom:"20px"}}>Kanban UI</h1>
     <div>
     <Kanban />
     </div>
    </div>
  );
}

export default App;
