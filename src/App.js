import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import HomeChatPage from './pages/HomeChatPage.tsx';
import History from './pages/History.tsx';
import WatchList from './pages/WatchList.tsx';

function App() {
  return (<>
   <Routes>
    <Route 
      path='/'  
      element={<Dashboard/>} 
      exact
    />
    <Route 
      path='/chat/new'
      element={<HomeChatPage/>}
      exact
    />
    <Route 
      path='/history'
      element={<History/>}
      exact
    />
     <Route 
      path='/watchlist'
      element={<WatchList/>}
      exact
    />
   </Routes>
  </>
  );
}

export default App;
