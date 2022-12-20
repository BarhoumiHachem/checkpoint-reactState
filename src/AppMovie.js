import { useState } from 'react';
import MovieList from './Movie/MovieList';
import "./Movie/Movie.css";
import { v4 as uuidv4 } from 'uuid';
import Filter from './Movie/Filter'
import { Routes, Route } from 'react-router-dom';
import Description from './Movie/Description';
import MovieCard from './Movie/MovieCard';

function App() {
    const [filter, setFilter] = useState("")
    const [rating, setRating] = useState("")
    const [movieList, setMovieList] = useState([
        {   Title: "Black Adam 2022",
            posterURL: "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            Description: "Dans l’antique Kahndaq, l’esclave Teth Adam avait reçu les super-pouvoirs des dieux. Mais il en a fait usage pour se venger et a fini en prison. ",
            rating: 5,
            id: uuidv4(),
            trailer: "https://www.youtube.com/embed/X0tOpBuYasI",
        },
        {   Title: "L'amant de lady chatterley",
            posterURL: "https://www.tirexo.tel/img/films/fa28d726bb2282b516251c2cbaf346c3.jpg",
            Description: "En épousant Sir Clifford Chatterley Connie est devenue, Connie est devenue Lady Chatterley, s'assurant par là une vie de privilèges et d'abondance.",
            rating: 4,
            id: uuidv4(),
            trailer: "https://www.youtube.com/embed/a-85C7rV2_w",
        },
        {   Title: "Falcon Lake",
            posterURL: "https://img5.cdn.cinoche.com/images/cae162cbe691eb560372b6d697c603e6.jpg",
            Description: "Inspiré de l'histoire d'un homme prêt à tout pour défendre sa famille . Peter, s'enfuit au péril de sa vie pour retrouver sa famille, l'amour pour les siens.",
            rating: 3,
            id: uuidv4(),
            trailer: "https://www.youtube.com/embed/FD53_NiyPxc",
        },
        {   Title: "Top Gun: Maverick 2022",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
            Description: "Après avoir été l’un des meilleurs pilotes de la Marine américaine pendant plus de trente ans, Pete 'Maverick' continue à repousser ses limites en tant que pilote d'essai.",
            rating: 5,
            id: uuidv4(),
            trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
        },
        {   Title: "Enola Holmes 2 2022",
            posterURL: "https://fr.web.img3.acsta.net/pictures/22/10/12/10/52/2210923.jpg",
            Description: "Chargée, pour sa première affaire officielle, de percer le mystère d'une jeune disparue, la détective Enola doit solliciter l'aide de ses amis… et de son frère Sherlock.",
            rating: 2,
            id: uuidv4(),
            trailer: "https://www.youtube.com/embed/KKXNmYoPkx0",
        },
        {   Title: "Emancipation 2022",
            posterURL: "https://m.media-amazon.com/images/M/MV5BOGYxYTY3MzctNjRmMS00NTFhLWJmOGQtNjg0NWUxZDhhM2E2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            Description: "Inspiré de l'histoire vraie d'un homme prêt à tout pour défendre sa famille et sa liberté. Peter, un esclave, s'enfuit au péril de sa vie pour retrouver sa famille.",
            rating: 1,
            id: uuidv4(),
            trailer: "https://www.youtube.com/embed/wafyhTpWpUs",
        }
    ])

    const handelFilter =(val)=>{
        setFilter(val)    }

    const handelAddMovie =(val)=>{
    setMovieList([...movieList,val])}

    const handleRating = (val) => {
        setRating(val)}

    

    return (
        <div>
            <Filter handelFilter={handelFilter} handelAddMovie={handelAddMovie} handleRating={handleRating}/>
            <Routes>
                <Route path='/' element={<MovieList list={movieList.filter(elm=>elm.Title.toUpperCase().includes(filter.toUpperCase()) && elm.rating>=rating)} />}/>
                <Route path='description/:id' element={<Description movieList={movieList}/>} />
                <Route path='*' element={<h1> 404 Not Found</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
