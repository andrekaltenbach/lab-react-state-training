import './App.css';
import LikeButton from './components/Likebutton';
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton /> <LikeButton />
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
