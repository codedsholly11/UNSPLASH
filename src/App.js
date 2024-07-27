import React, { useState } from 'react'

const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
    async function  fetchApi(e){
      if(!search){
        return alert("pls input")
      }
      e.preventDefault();

     setLoading(true)
      try {
        const baseurl =`https://api.unsplash.com/search/photos`
        const response = await fetch(`${baseurl}?page=1&query=${search}&client_id=sBtBSIn_l2eq_DqLfdvTYpZAQUWbXpfQE5PxNSWXoU8`)
        .then((res)=>res.json())
        if (response){
          setImages(response.results)
          setSearch(response)
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
      }

    }
  return (
    <div className='flex flex-col gap-[10px]'>
      <input onChange={(e)=> setSearch(e.target.value)}  className='w-[20vw] h-[7vh] border-2 rounded-lg' type='text'></input>
      <button onClick={fetchApi}  className='bg-cyan-300 px-[10px] h-[7vh] w-[10vw] rounded-lg'>{loading? 'submitting' :'submit'}</button>
     {search && (
      <div>
      {images.map((image,index) => (
         <div key={index}>
           <img src={image.urls.small} alt={image.description}/>
         </div>
       ))}
      </div>
     )

     }
    </div>
  )
}

export default App

