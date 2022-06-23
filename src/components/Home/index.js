import { useState, useEffect } from "react";

import "./Home.css"

import Card from "../Card";
import api from '../../services/api/api.mjs'

function Home() {
    const [books, setBooks] = useState();

    useEffect(() => {
        api
            .get('?_quantity=16')
            .then(res => {
                setBooks(res.data.data);
            })
            .catch(err => console.error('Ops! Ocorreu um pequeno erro no processo.'));
    }, [])

    return(
        <div className="book-collections">
            {
                books?.map(book => {
                    return <Card key={book.id} book={book} className='card'/>
                })
            }
        </div>
    );
}

export default Home;