import React from 'react'
import TileConditional from "./TileConditional";
import brand from "../assets/brand.png";
import story from "../assets/our_story.png";

function Tile(props){


    return(
                <>
                    {props.title ?
                        <section>
                            <h2>{props.title}</h2>
                            <p>{props.content}</p>
                        </section>:
                        <>
                            <TileConditional imgUrlile = {brand}/>
                            <TileConditional imgUrlile = {story}/>
                        </>}
                </>


    )


}
export default Tile;