import { useState } from 'react';
import './App.css';

const accessKey = "bydi0qxYprjEB4FVQo-WR9FIC3jFEU2_Gqd0p-xey4A";

function App(){
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

  const searchImages = () =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {
    setImages(data.results);
  })
  .catch((error)=>{
 alert("Failed to fetch images. Please try again later.")
  })
  }
  // const searchImages = async () => {
  //   if (!query) return;

  //   try{
  //     const response = await fetch (url);
  //     const data = await response.json();
  //     setImages(data.results);
  //   }
  //   catch (error) {
  //     alert("Failed to fetch images. Please try again later.");
  //   }
  // };

  return(
    <>
    <h1 className='text-4xl font-bold font-sans border-b-4 border-emerald-600 pb-4 text-center text-emerald-600 '>Dynamic Image Gallery</h1>

    <div className="image-gallery flex justify-center mt-6 mb-4">
      <input type="text" placeholder='Search for image...' value={query} onChange={(e)=> setQuery(e.target.value)} className='p-2 border border-gray-300 rounded-l-lg w-72 focus:outline-none'/>
      <button onClick={searchImages} className='bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition'>Search</button>
    </div>

    <div className="gallery-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
      {images.map((img)=>{
        return(
         <div key={img.id} className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <img
        src={img.urls.small}
        alt={img.alt_description}
        className="w-full h-60 object-cover"
      />
    </div>
        )
       
      })}
    </div>
    </>
  )

}

export default App; 

