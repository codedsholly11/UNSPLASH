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
    <div className='flex flex-col gap-[10px] h-[100%] w-[100%] items-center  px-[20px] md:bg-white bg-purple-100'>
    <div className=''>
      <div className=''>
        <h1 className='font-sans text-4xl md:text-center text-start py-[20px] '>fancy<span className='text-purple-700'>pix</span></h1>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <input onChange={(e)=> setSearch(e.target.value)}  className='md:w-[20vw] w-[100%] md:h-[7vh] h-[10vh] border-2 rounded-lg px-[10px]' type='text'placeholder='search for images'></input>
        <button onClick={fetchApi}  className='bg-cyan-300 px-[10px] md:h-[7vh] h-[8vh] md:w-[10vw] w-[90vw] rounded-lg text-2xl '>{loading? 'submitting' :'submit'}</button>
      </div>
    </div>
      <div className='px-[] text-xl text-center text-green-600'>
        <p> fancy<span className='text-purple-700'>pix. </span>your go-to place for premium images that beautify and elevate your works</p>
      </div>
     {search && (
      <div className='flex flex-wrap items-center justify-center gap-[20px]'>
      {images.map((image,index) => (
         <div className='w-[95%] h-[200px]' key={index}>
           <img src={image.urls.small} className='h-[100%] w-[100%]' alt={image.description}/>
         </div>
       ))}
      </div>
     )
     }


     <h1 className='text-purple-700 pb-[15px]'>Designed By:- @CODEDSHOLLY</h1>
    </div>
  )
}

export default App

