import './Card.css';


function Card() {
    
    return (
        <figure>
            <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card"/>
            <h2>This is my Card</h2>
            <figcaption>
                <h3>Price : $ 1000</h3>
                <button>Buy Now</button>
            </figcaption>
        </figure>
    )

}


export default Card;