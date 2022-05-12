import React, { useEffect, useState } from "react";
import ColorViz from "./components/ColorViz";
import ShapeViz from "./components/ShapeViz";
import enterView from "enter-view";

export default function Insights() {
  const [currentContentSection, setCurrentContentSection] =
    useState(".upright");
  const [currentShift, setCurrentShift] =
    useState(0);
  useEffect(() => {
    enterView({
      selector: ".upright",
      enter: function (el) {
        el.classList.add("entered");
        console.log("entered upright")
        setCurrentContentSection("upright");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from upright");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("upright");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".quadruped",
      enter: function (el) {
        el.classList.add("entered");
        console.log("entered quad")
        setCurrentContentSection("quadruped");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from quad");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("quadruped");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".humanoid",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("humanoid");
        setCurrentShift(-230)
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from humanoid");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          if (currentContentSection == 'wings'){
            setCurrentShift(0)
          }
          setCurrentContentSection("humanoid");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".wings",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("wings");
        setCurrentShift(-450)
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from wings");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          if (currentContentSection == 'arms'){
            setCurrentShift(-230)
          }
          setCurrentContentSection("wings");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".arms",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("arms");
        setCurrentShift(-600)
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from arms");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          if (currentContentSection == 'ball'){
            setCurrentShift(-450)
          }
          setCurrentContentSection("arms");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".ball",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("ball");
        setCurrentShift(-720)
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from ball");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          if (currentContentSection == 'armor'){
            setCurrentShift(-600)
          }
          setCurrentContentSection("ball");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".armor",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("armor");
        setCurrentShift(-770)
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from armor");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          if (currentContentSection == 'fish'){
            setCurrentShift(-720)
          }
          setCurrentContentSection("armor");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".fish",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("fish");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from fish");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("fish");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".blob",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("blob");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from blob");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("blob");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".squiggle",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("squiggle");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from squiggle");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("squiggle");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".tentacles",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("tentacles");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from tentacles");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("tentacles");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".legs",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("legs");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from legs");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("legs");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".bug-wings",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("bug-wings");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from bug-wings");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("bug-wings");
        }
      },
      offset: 0.75,
    });
  });
  useEffect(() => {
    enterView({
      selector: ".heads",
      enter: function (el) {
        el.classList.add("entered");
        setCurrentContentSection("heads");
      },
      exit: function (el) {
        el.classList.remove("entered");
        console.log("exit from heads");
        setCurrentContentSection("noSelection");
      },
      progress: function (el, progress) {
        // el.style.opacity = progress;
        console.log(progress);
        if (progress > 0.75) {
          setCurrentContentSection("noSelection");
        }
        else{
          setCurrentContentSection("heads");
        }
      },
      offset: 0.75,
    });
  });
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <h2>
        <u>Insights</u>
      </h2>
      {/* <div className="vizHighlight">
        <div className="vizDescription">
          <h2>Type Color Outliers</h2>
          <p>
            What are the traits of outliers when a Pokémon’s type isn’t the main
            color for that type?
          </p>
        </div>
        <ColorViz />
      </div> */}
      <div className="shapeHighlight">
        <ShapeViz currentContent={currentContentSection} currentShift={currentShift} />
        <div>
          <div className="shapevizContent">
            <div className="vizContent intro">
              <h2>Pokemon Shapes</h2>
              <p>
                After each new generation release, I always wonder the same
                question:
              </p>
              <p>
                How do they create so many new Pokemon? How can they be so
                creative and come up with such interesting creatures?
              </p>
              <br></br>
              <p>
                Eventually I noticed that some Pokemon started to look similar
                in shape, color, and size. For example, the starter Pokemon had
                a good chance of having a bird-like shape. Some of the blob
                Pokemon started to look similar too. So I wondered, how often do
                Pokemon shapes get repeated? Do we have a lot of bird-like or dog-like shapes?
              </p>
              <br></br>
              <p>So ... I decided to visualize it!</p>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent upright">
              <h3>
                The most popular shape is the UPRIGHT shape with{" "}
                <span>
                  <b>189</b>
                </span>{" "}
                Pokemon!
              </h3>
              <p>That's a little over 20% of all Pokemon! The shape of upright Pokemon look similar to dinosaurs, with 2 legs and a tail. </p>
              <p>
                Some of these Upright Pokemon include:{" "}
              </p>
              <ul>
                <li>#4 charmander</li>
                <li>#150 mewtwo</li>
                <li>#257 blaziken</li>
                <li>#448 lucario</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent quadruped">
              <h3>
                The Quadruped shape -{" "}
                <span>
                  <b>167</b>
                </span>{" "}
                Pokemon!
              </h3>
              <p>I assumed that this shape was the most popular, but actually it ranks second accounting for roughly 18% of all Pokemon. There are so many memorable Pokemon from the earlier generations that have this quadruped shape with 4 legs. </p>
              <p>
                Some of these Quadruped Pokemon include:{" "}
              </p>
              <ul>
                <li>#1 bulbasaur</li>
                <li>#25 pikachu</li>
                <li>#133 eevee</li>
                <li>#387 turtwig</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent humanoid">
              <h3>
                The Humanoid shape -{" "}
                <span>
                  <b>136</b>
                </span>{" "}
                Pokemon!
              </h3>
              <p>Human shape?</p>
              <p>
                I guess the creators got inspired by us! Pokemon with
                the humanoid shape have two legs but no tail. Although most don't look like humans, most do look like they can walk and run like us! 
              </p>
              <p>Some of these Humanoid Pokemon include:</p>
              <ul>
                <li>#39 jigglypuff</li>
                <li>#122 mr.mime</li>
                <li>#124 jynx</li>
                <li>#143 snorlax</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent wings">
              <h3>
                The Wings shape -{" "}
                <span>
                  <b>80</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>The flying Pokemon!</p>
              <p>Almost all of these Wing shape Pokemon are flying types! This categories holds the bats and the birds of the Pokemon world. </p>
              <p>Some of these Wings Pokemon include:</p>
              <ul>
                <li>#41 zubat</li>
                <li>#42 golbat</li>
                <li>#142 aerodactyl</li>
                <li>#468 togekiss</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent arms">
              <h3>
                The Arms shape -{" "}
                <span>
                  <b>47</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>Geodude!</p>
              <p>
                These Arms Pokemon aren't your typical Pokemon. Most are Fairy types and Ghost types. They don't have a body, but they have a big head and strong arms. 
              </p>
              <p>Some of these Arms Pokemon include:</p>
              <ul>
                <li>#74 geodude</li>
                <li>#89 muk</li>
                <li>#93 haunter</li>
                <li>#436 Drifblim</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent ball">
              <h3>
                The Ball shape -{" "}
                <span>
                  <b>41</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>only a head!</p>
              <p>
                These balls have only a head! No body, arms, or legs! This category is where you will find the electric ball pokemon and the grass cacoon pokemon.  
              </p>
              <p>Some of these Ball Pokemon include:</p>
              <ul>
                <li>#101 electrode</li>
                <li>#90 shellder</li>
                <li>#201 unown</li>
                <li>#rotom</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent armor">
              <h3>
                The Armor shape -{" "}
                <span>
                  <b>40</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>the insectoid body pokemon</p>
              <p>
                Any pokemon with a body that looks like an insect is here! A ton of bug types fall into this category. Surprisingly, there's quite a number of insect looking pokemon out there
              </p>
              <p>Some of these Armor Pokemon include:</p>
              <ul>
                <li>#10 caterpie</li>
                <li>#13 weedle</li>
                <li>#98 krabby</li>
                <li>#452 drapion</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent fish">
              <h3>
                The Fish shape -{" "}
                <span>
                  <b>39</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>the water types!</p>
              <p>
                Most of the water types are in the fish category. Pokemon's category is fish but actually all pokemon with fins are here. We can find Magikarp, Seel, and some other water types here. 
              </p>
              <p>Some of these Fish Pokemon include:</p>
              <ul>
                <li>#86 seel</li>
                <li>#129 magikarp</li>
                <li>#319 sharpedo</li>
                <li>#364 sealeo</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent blob">
              <h3>
                The Blob shape -{" "}
                <span>
                  <b>38</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>Wobbuffettt</p>
              <p>
               The Blobs contain pokemon with a head and a base. Team Rocket's iconic Wobbuffet is used as the icon! 
              </p>
              <p>Some of these Blob Pokemon include:</p>
              <ul>
                <li>#202 wobbuffet</li>
                <li>#230 kingdra</li>
                <li>#583 vanilite</li>
                <li>#607 litwick</li>

              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent squiggle">
              <h3>
                The Squiggle shape -{" "}
                <span>
                  <b>37</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>The long bodies</p>
              <p>
                Surprisingly there are quite the number of long bodied pokemon. This contains the long rock Pokemon Onix and the snake Pokemon Arbok
              </p>
              <p>Some of these Squiggle Pokemon include:</p>
              <ul>
                <li>#24 arbok</li>
                <li>#95 onix</li>
                <li>#350 milotic</li>
                <li>#384 rayquaza</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent tentacles">
              <h3>
                The Tentacles shape -{" "}
                <span>
                  <b>23</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>a lot of legs</p>
              <p>
                These Pokemon have more than 4 legs! Find the squids and octopus here!
              </p>
              <p>Some of these Tentacles Pokemon include:</p>
              <ul>
                <li>#72 tentacool</li>
                <li>#455 carnivine</li>
                <li>#487 giratina</li>
                <li>#593 jellicent</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent legs">
              <h3>
                The Legs shape -{" "}
                <span>
                  <b>23</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>head + legs</p>
              <p>
                A head, legs, but no arms! This category contains a lot of small sized Pokemon like Torchic and Oddish! The cuties!
              </p>
              <p>Some of these Legs Pokemon include:</p>
              <ul>
                <li>#43 oddish</li>
                <li>#103 exeggutor</li>
                <li>#255 torchic</li>
                <li>#298 azurill</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent bug-wings">
              <h3>
                The Bug-Wings shape -{" "}
                <span>
                  <b>20</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>as the name suggests ... bugs</p>
              <p>
                If you can think of a bug type, it's probably in this Bug-Wings category! The butterflies, bees, scythers, moths! Majority are Bug Type and/or Flying type. 
              </p>
              <p>Some of these Bug-Wings Pokemon include:</p>
              <ul>
                <li>#12 butterfree</li>
                <li>#123 scyther</li>
                <li>#269 dustox</li>
                <li>#284 masquerain</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent heads">
              <h3>
                The Heads shape -{" "}
                <span>
                  <b>16</b>
                </span>{" "}
                Pokemon
              </h3>
              <p>finally the multiple heads pokemon</p>
              <p>
                There are only 16 Pokemon out of the 896 that have more than 1 head! There are the duos and trios of the Pokemon world.
              </p>
              <p>Some of these Heads Pokemon include:</p>
              <ul>
                <li>#51 dugtrio</li>
                <li>#82 magneton</li>
                <li>#102 exeggcute</li>
                <li>#110 weezing</li>
              </ul>
            </div>
          </div>
          <div className="shapevizContent">
            <div className="vizContent ">
              <p>After visualizing all 896 Pokemon by shape, I definitely had the wrong assumptions. I thought there was a lot of dog-like and bird-like pokemon. But in actuality, the most common shape is the Upright shape (2 legs and a tail). Dog-like or 4 legged Pokemon came in a close second. Bird-like or wingged Pokemon came in 4th. </p>
              <p>It's interesting to see all the Pokemon visualized to just it's general shape. Each Pokemon's individual shape, size, and color draws in the attention that it's often overlooked that the creators are using similar outlines but tweaking them a little bit. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
