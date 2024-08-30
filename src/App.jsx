import { useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative container mx-auto p-6'>

       <div className='rounded-2xl shadow-lg bg-white w-[700px] mx-auto mt-20 p-6'>
        <h1 className='relative font-bold text-2xl text-zinc-800 right-60 mb-6'>Upload Files</h1>
        <form action="/upload" method='POST' encType='multipart/form-data' className='border-2 border-zinc-200 border-dashed rounded-lg bg-gray-50'>
      <div className="flex items-center justify-center w-full mt-4">
         <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 cursor-pointer dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" name='file' className="hidden" />
      </label>
      </div> 
          <input type="submit" value={'Submit'} className='relative border-t w-full px-4 py-3 rounded-s-md hover:bg-slate-500 hover:text-white cursor-pointer duration-300'/>
          
        </form>
       </div>
      </div>
    </>
  )
}

export default App
