import React from 'react';
import './App.css'
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';
import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';


function App() {
    function sayHi() {
        console.log('hallo');
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/">Shop</a>
                    </li>
                    <li>
                        <a href="/">Ons verhaal</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <header>
                <h1>Fruit perfection</h1>
                <button type="button" onClick={sayHi}>Shop nu</button>
            </header>
            <main>
                <article className="product">
                    <img
                        src={citroenen}
                        alt="Citroen"
                    />
                    <h2 className="product-name">Citroen</h2>
                    <p className="product-description">
                        Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
                        Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het
                        sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel.
                    </p>
                </article>
                <article className="product">
                    <img
                        src={limoenen}
                        alt="Limoen"
                    />
                    <h2 className="product-name">Limoen</h2>
                    <p className="product-description">
                        Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                        (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en
                        groen.
                    </p>
                </article>
                <article className="product">
                    <img
                        src={ijsblokjes}
                        alt="IJsblokjes"
                    />
                    <h2 className="product-name">IJsblokjes</h2>
                    <p className="product-description">
                        Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt
                        in een diepvriezer door water in een plastic vorm te laten bevriezen.
                    </p>
                </article>
            </main>
        </>
    );
}

export default App
