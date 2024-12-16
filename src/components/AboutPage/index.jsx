import React, {useState, useRef} from "react";
import HomeButton from "../Misc/HomeButton";
import principles from "../../content/principles";

const AboutPage = () => {
    const [principle, setPrincipleText] = useState("");
    const [description, setDescriptionText] = useState("");
    const textBoxElement = useRef(null);

    function displayPrincipleText(event) {
        let selected;
        principles.forEach((p) => 
            {
                if (p.name === event.target.innerText) {
                    selected = p;
                }
            }
        );
        setPrincipleText(selected.name);
        setDescriptionText(selected.text)
        textBoxElement.current.classList.add("textbox-style");
    }

    function hidePrincipleText() {
        setPrincipleText("");
        setDescriptionText("");
        textBoxElement.current.classList.remove("textbox-style");
    }

    return (
      <div className="about-page container">
        <HomeButton />
        <div className="textbox container" ref={textBoxElement}>
          <h2>{principle}</h2> 
          <p>{description}</p>
        </div>
        <div className="main container">
          <div className="content container">
            <h1>Hello!</h1>
            <img
              src="https://picsum.photos/300/400"
              alt="profile"
              style={{ float: "right" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lectus ante, rhoncus ac nibh sed, ornare blandit ligula. Morbi eu
              diam pellentesque turpis ultricies congue. Donec tincidunt semper
              arcu, id varius nunc volutpat vel. Praesent dignissim semper nibh
              ut tincidunt. Donec sed ligula sem. Donec sed elementum felis.
              Integer vitae eros mauris. Mauris eu{" "}
              <span
                onMouseEnter={displayPrincipleText}
                onMouseLeave={hidePrincipleText}
              >
                justo
              </span>{" "}
              erat. Phasellus in placerat nibh. Donec a libero lorem. Maecenas
              non mauris eget ligula ultrices dapibus. In condimentum velit
              justo, et tincidunt nulla porta nec. Curabitur feugiat blandit
              neque non interdum. Sed sed mauris vel mi posuere hendrerit. Donec
              ac tellus nulla. Nulla facilisi.
            </p>
            <p>
              Sed aliquam laoreet auctor. In tempus eu metus a varius. Nunc
              fermentum odio sed lorem sollicitudin, quis malesuada nisi
              iaculis. Fusce accumsan finibus odio a malesuada. Mauris sit amet
              dolor erat. Donec pharetra neque a ex convallis condimentum.
              Phasellus lobortis pretium tortor, et facilisis mi suscipit
              rhoncus. Ut dapibus, dolor sed pulvinar ullamcorper, dui tellus
              euismod dui, sit amet cursus risus diam non est. Maecenas sed
              justo quis velit convallis mattis. Nullam sed leo et augue maximus
              consequat eu quis metus. Pellentesque nec turpis vitae ex blandit
              blandit. Aliquam pharetra ex vel purus ultricies, ac malesuada
              quam tincidunt. Integer tortor nisl, dictum sit amet massa in,
              tempus scelerisque sem. Cras vel lorem nec felis ultrices luctus
              et cursus felis. In bibendum metus ex, eget posuere urna interdum
              in.
            </p>
            <p>
              Fusce at dolor est. Maecenas aliquam sit amet magna vitae
              ultricies. Nulla iaculis at turpis a condimentum. Duis a accumsan
              sem. Sed nec risus tempus eros lobortis pellentesque a et neque.
              Donec et lacinia dolor. Sed lobortis elit in cursus sodales.
              Praesent tempor augue augue, at elementum tortor tincidunt sit
              amet. Maecenas ut ullamcorper metus. Proin sit amet augue eget
              ipsum volutpat aliquam. Vivamus varius ex vestibulum sem aliquam,
              id mollis massa venenatis. Praesent ac erat in tortor mollis
              eleifend. Donec sed nibh vel enim auctor porttitor id vel mi.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Phasellus enim tortor, aliquam sit amet
              orci id, egestas vulputate est. Nunc dapibus dui arcu, at commodo
              erat commodo faucibus. Ut faucibus eget felis ac euismod. Sed
              rhoncus sollicitudin libero vitae egestas. In vehicula nisl et
              metus posuere sagittis.
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutPage;