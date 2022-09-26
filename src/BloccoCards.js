import  "./BloccoCards.css";
import Card1 from "../src/Assets/mobile app development 1.png"
import Card2 from "../src/Assets/web-development 1.png"
import Card3 from "../src/Assets/Web-Designing 1.png"


export default function BloccoCards(){

    

    return(


        <div className="cards">
                <div className="card">
                <img src={Card1} alt="" />
                    <h3>Mobile Apps</h3>
                    <p className="ClassiP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In dictum mauris non pellentesque accumsan. Nec
                        pellentesque eget.
                    </p>
                </div>
                <div className="card">
                <img src={Card2} alt="" />
                    <h3 id="H3">Website Apps</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In dictum mauris non pellentesque accumsan. Nec
                        pellentesque eget.
                    </p>
                </div>
                <div className="card">
                <img src={Card3} alt="" /> 
                    <h3>UI UX Design</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In dictum mauris non pellentesque accumsan. Nec
                        pellentesque eget.
                    </p>
                </div>
            </div>

    )
}