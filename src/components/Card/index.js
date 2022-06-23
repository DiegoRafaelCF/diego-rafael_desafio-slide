import './Card.css'

import { formatDate } from '../../utils/functions';

function Card({book}) {
    const {image, title, author, description, genre, published} = book;

    return(
        <div className="card">
            <img src={image} alt='imagem aleatória' />
            <h1>{title}</h1>
            <span>{author}</span>
            <p>{description}</p>
            <div className='more-infos'>
                <button>{genre}</button>
                <span>{formatDate(published)}</span>
            </div>
        </div>
    );
}

export default Card;