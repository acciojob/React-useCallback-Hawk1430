import React, { useCallback, useContext } from 'react'
import { ListContext } from './ListContext';

const SkillList = () => {
    const {list, setList} = useContext(ListContext)

    const handleSillDelete = useCallback((id)=>{
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    },[])

    if(list.length === 0) return <h1>Skill List</h1>;
  return (
    <>
        <h1>Skill List</h1>
        <ul id='skill-list'>
        {list.map((skill, idx) =>(
            <div id={`skill-number-${idx}`} key={idx}>
                <li onClick={() => handleSillDelete(skill.id)}>{skill.name}</li>
            </div>   
        ))}
        </ul>
        
    </>
  )
}

export default SkillList;