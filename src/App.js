import React,{useState} from 'react';
import data from './data'
import Card from './Card';

const App = ()=> {
  const [people,setPeople] = useState(data)
  const clearPerson = (id)=>{
    const newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }
  return (
  <div className="card">
      <div className='top'><h1>{data.length} birthdays today</h1></div>
      {people.map((info,index)=>{
        return <Card {...info} key={index} clearPerson={clearPerson}/>
      })}
      <div className='btn-container'>
        <button button className='btn' onClick={()=> setPeople([])}>Clear All</button>
      </div> 
  </div>
  )
}


export default App