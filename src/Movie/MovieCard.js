import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./Movie.css"
import { Rating } from 'react-simple-star-rating'




const MovieCard = ({ mov }) => {
    return (
        <Card className='card' style={{ width: '16rem' }}>
            <Card.Img variant="top" src={mov.posterURL} />
            <Card.Body>
                <Card.Title className='title'>{mov.Title}</Card.Title>
                <Card.Text className='text'>{mov.Description}</Card.Text>
                <Rating initialValue={mov.rating} readonly />
            </Card.Body>
        </Card>
    )
}

export default MovieCard