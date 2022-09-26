import "./Blocco4.css";
import Slider01 from "../src/Assets/globe.png"
import {ReactComponent as Bullet} from "./Assets/bulletArrow.svg"


export default function Blocco4(){

    return(

        
        <section id="portfolio">
        <div className="slider">
            <button id="left">
            <Bullet/> 
            </button>
            <img src={Slider01} alt="img01" />
            <button id="right">
            <Bullet/>  
            </button>
        </div>

        <div className="text">
            <h1>Portfolio</h1>

            <hr />

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi risus duis nibh laoreet. Malesuada luctus tincidunt
                tortor consectetur netus facilisi dapibus laoreet orci.
                Viverra amet maecenas consectetur tincidunt felis, pretium
                posuere ut sapien. Cursus lacus vitae purus est viverra eu
                ornare tellus augue. Proin risus, sed diam ac. Aliquet.
            </p>

            <button>View All</button>
        </div>
    </section>
    

)
}