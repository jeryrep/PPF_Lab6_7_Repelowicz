import './App.css';
import {CFooter} from "./components/CFooter";
import CHeader from "./components/CHeader";
import CContents from './components/CContents';
import COuter from "./components/COuter";


function App() {
    return (
        <div className="App">
            <CHeader aName="Jerzy" aFamily="Repelowicz"/>
            <CContents/>
            <COuter/>
            <CFooter weather="słoneczna" temp="25">
                <p>
                    Niebo jest bezchmurne, wiatr słaby.
                </p>
            </CFooter>
        </div>
    );
}

export default App;
