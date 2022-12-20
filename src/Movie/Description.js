import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({movieList}) => {

  const params = useParams()
  const mov = movieList.find(el=>el.id == params.id)

  return (
          <div className='description'> 
            <h4> Description: </h4> 
            <div> {mov.Description} </div>
            <h4> Trailer </h4> 
            <iframe width="560" height="315" src={mov.trailer} controls autoplay > </iframe>
          </div>
  )
}

export default Description