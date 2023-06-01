import React, {useState} from "react";
import './style.css'



function App() {

  const images = [
    "images/26-500x200.jpg",
    "images/431-500x200.jpg",
    "images/516-500x200.jpg",
    "images/785-500x200.jpg",
    "images/874-500x200.jpg"
  ]

  const [selectedImg,setSelectedImg] = useState(images[0])

  return (
    <div className="App">
      <div className="container">
      <img src={selectedImg} alt="selected" className="selected"/>
      </div>
      <div className="imgContainer">
        {images.map((img,index) => {
          return <img key={index} src={img} alt="gallery" onClick={() => {
            setSelectedImg(img)
          }}/>
        })}
      </div>

    </div>
  );
}

export default App;
