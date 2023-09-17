import './App.scss';
import Header from './Header/header';
import TopSection from './TopSection/TopSection';
import SkillsSection from './SkillsSection/SkillsSection';
import Particle from "./Particle/Particle";

function App() {
  return (
    <div className="App">
        <Particle/>

        <TopSection></TopSection>
        <SkillsSection></SkillsSection>
        


    </div>
  );
}

export default App;
