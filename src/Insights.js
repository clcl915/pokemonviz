import React, { useEffect, useState } from "react";
import ColorViz from "./components/ColorViz";
import ShapeViz from "./components/ShapeViz";
import enterView from "enter-view";

export default function Insights() {
  const [currentContentSection, setCurrentContentSection] = useState('');
  useEffect(()=>{
    enterView({
      selector: ".upright",
      enter: function(el) {
        el.classList.add('entered');
        setCurrentContentSection('#upright')
      },
      exit: function(el) {
        el.classList.remove('entered');
      },
      progress: function(el, progress) {
        el.style.opacity = progress;
        console.log(progress)
      },
      offset: 0.5,
    });
  })
  return (
    <>
      <h2>
        <u>Insights</u>
      </h2>
      <div className="vizHighlight">
        <div className="vizDescription">
          <h2>Type Color Outliers</h2>
          <p>
            What are the traits of outliers when a Pokémon’s type isn’t the main
            color for that type?
          </p>
        </div>
        <ColorViz />
      </div>
      <div className="shapeHighlight">
        <ShapeViz currentContent={currentContentSection}/>
        <div className="shapevizContent">
          <div className="vizContent intro">
            <h2>Pokemon Shapes</h2>
            <p>After each new generation release, I always wonder the same question:</p>
            <p>How do they create so many new Pokemon? How can they be so creative and come up with such interesting creatures?</p>
            <br></br>
            <p>Eventually I noticed that some Pokemon started to look similar in shape, color, and size. For example, the starter Pokemon had a good chance of having a bird-like shape. Some of the blob Pokemon started to look similar too. So I wondered, how often do Pokemon shapes get repeated over generations? Do we have a generation with a lot of bird-like or dog-like shapes?</p>
            <br></br>
            <p>So ... I decided to visualize it!</p>
          </div>
        </div>
        <div className="shapevizContent">
          <div className="vizContent upright">
            <h3>The most popular shape used is the UPRIGHT shape with <span><b>189</b></span> Pokemon!</h3>
            <p>That's a little over 20% of all Pokemon! </p>
            <p>The shape of upright Pokemon look similar to dinosaurs, with a 2 legs and a tail. Some of these Upright Pokemon include: </p>
            <ul>
              <li>charmander</li>
              <li>mewtwo</li>
              <li>blaziken</li>
              <li>lucario</li>
            </ul>
          </div>
        </div>
        <div className="shapevizContent">
          <div className="vizContent">
            <h2>Pokemon Shapes</h2>
            <p>Key Questions</p>
            <ol>
              <li>How often do Pokémon shapes get repeated over generations? </li>
              <li>
                Do we have a generation with a lot of bird-like or dog-like
                shapes?
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
