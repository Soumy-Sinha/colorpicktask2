import './index.css'
import './App.css';
import react from 'react';
import ColorItem from './color-item'
// import color-item from './color-item'
function App() {
  const colors=['#f54254','#5af542','#5af542','#ddf542','#f542d1','#42f5dd','#f5a742','#a742f5','#b362ae','#62b372','#ab4211','#348573','#26050a','#c2a919'];
  const setTheme=(color)=>{
    document.documentElement.style.setProperty('--bg-color',color)
  }
  const setColor=(event)=>{
    const currentColor = event.target.style.getPropertyValue('--bg-color')
    setTheme(currentColor)
    console.log(currentColor);
  }
  return (
    <div className="App">
      <div className="color-switcher">
        <h1 className="heading">Color picker</h1>
        <div className="color-list">
          {colors.map((color , idx)=> < ColorItem setColor={setColor} color={color}/>)}
        </div>
        {/* <h3 className='btn'>Pick a color</h3> */}
      </div>
    </div>
  );
}

export default App;
