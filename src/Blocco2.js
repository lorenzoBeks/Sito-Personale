import "./Blocco2.css";
import Globe from "../src/Assets/globe.png"
import Team from "../src/Assets/team.png"

export default function Blocco2(){

    return(
<div>
        <section id="strategic">
        <img src={Globe} alt="" />
        <div className="description">
            <h2>
                strategic engineering and design for international top
                brands
            </h2>
            <div></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi risus duis nibh laoreet. Malesuada luctus tincidunt
                tortor consectetur netus facilisi dapibus laoreet orci.
            </p>
        </div>
    </section>
    
    <section id="team">
        <div>
            <h1>We work with the Great Team</h1>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi risus duis nibh laoreet. Malesuada luctus tincidunt
                tortor consectetur netus facilisi dapibus laoreet orci.
                Viverra amet maecenas consectetur tincidunt felis, pretium
                posuere ut sapien. Cursus lacus vitae purus est viverra eu
                ornare tellus augue. Proin risus, sed diam ac. Aliquet.
            </p>
        </div>
        <div>
        <img src={Team} alt="img01" />
        </div>
    </section>
    </div>
)
}
