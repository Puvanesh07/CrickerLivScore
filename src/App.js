import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import {BrowserRouter as Router,Switch,Route,useParams} from 'react-router-dom'
import NewsPage from './Pages/Newspage/NewsPage';
import Rankingpage from './Pages/RankingsPage/Rankingpage';
import Leaguepage from './Pages/LeaguePage/Leaguepage';
import DetailedLivescore from './Pages/Homepage/DetailedLive/DetailedLivescore';
import FOW from './Pages/Homepage/DetailedLive/FOW';
import Commentary from './Pages/Homepage/DetailedLive/Commentary';
import Overwise from './Pages/Homepage/DetailedLive/Overwise';


function App() {
  return (
    <div className="App">

      {/* Navigation part */}
      
       
          
       <Router>
         <Switch>
           <Route exact path='/' component={Homepage}/>
           <Route path='/news' component={NewsPage}/>
           <Route path='/ranking' component={Rankingpage}/>
           <Route path='/league' component={Leaguepage}/>
           <Route path='/detaillive/:Eid' component={DetailedLivescore}/>
           <Route path='/fow/:Eid' component={FOW}/>
           <Route path='/commentary/:Eid' component={Commentary}/>
           <Route path='/overwise/:Eid' component={Overwise}/>
         </Switch>
       </Router>
      
      


    </div>
  );
}

export default App;
