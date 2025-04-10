import React from 'react'
import useApiContext from '../Contexts/ApiContext';
import TesztKerdes from './TesztKerdes';

function TesztKerdesek() {
    const { tesztekLista } = useApiContext();
  return (
    <div className='tesztek'>
            {tesztekLista.map((adat, index)=>{
                return <TesztKerdes adat={adat} key={index}/>
            })}
    </div>
  )
}

export default TesztKerdesek



