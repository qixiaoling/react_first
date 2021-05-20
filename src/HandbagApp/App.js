import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Tile from "./components/Tile";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";


function App() {
    return (
        <>
            <nav>
                <Button type="button" text="to the collection" disabled={false}/>
                <Button type="button" text="shop all bags" disabled={false}/>
                <Button type="button" text="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product
                    redLabel="Best seller"
                    imgUrl={bag_1}
                    bagName="The handy bag"
                    price='400'/>
                <Product
                    redLabel="Best seller"
                    imgUrl={bag_2}
                    bagName="The stylish bag"
                    price='250'/>
                <Product
                    redLabel="New collection"
                    imgUrl={bag_3}
                    bagName="The simple bag"
                    price='300'/>
                <Product
                    redLabel="New collection"
                    imgUrl={bag_4}
                    bagName="The trendy bag"
                    price='150'/>

            </main>
            <footer>
                <Tile
                     title = 'THE BRAND'
                     content = 'Lorem Ipsum is simply dummy text of the printing
                     and typesetting industry.'
                />
                <Tile
                    imgUrlile = {brand}
                />
                <Tile
                    title = 'OUR STORY'
                    content = 'Lorem Ipsum is simply dummy text of the printing
                     and typesetting industry.'
                />
                <Tile
                    imgUrlile = {story}
                />

            </footer>
        </>


    );
}

export default App;



