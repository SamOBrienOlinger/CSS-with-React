import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWIthPrevState';

function App() {
  return (
    <div>
      {/* Add your components here */}
      {/* <Sidebar /> */}
      {/* <StatefulGreeting /> */}
      {/* <StatefulGreetingWithCallback /> */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;