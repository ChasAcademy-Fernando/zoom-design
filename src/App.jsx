import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import Buttons from './components/Buttons'
import Alert from './components/Alert'
import { useRef } from 'react'

function App() {
  

  const todoRef = useRef('');

  function OnClick (){
    todoRef == todoRef.current.value
  }
  return (
    <div className=''>
     <div className=' text-center p-5'>
      <h1 className=' text-5xl'>Todo List</h1>
      <form action="submit">
        <input type="text" onClick={OnClick} />
      </form>
     </div>
    </div>
  )
}

export default App
