import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import useFetch from "../useFetch";
import { create } from "d3";

export default function ShapeViz({ currentContent }) {
  const svgRef = useRef();
  const shapeSprites = [
    "https://archives.bulbagarden.net/media/upload/thumb/1/17/Body01.png/32px-Body01.png",
    "https://archives.bulbagarden.net/media/upload/thumb/7/7a/Body02.png/32px-Body02.png",
    "https://archives.bulbagarden.net/media/upload/thumb/d/d3/Body03.png/32px-Body03.png",
    "https://archives.bulbagarden.net/media/upload/thumb/2/2c/Body04.png/32px-Body04.png",
    "https://archives.bulbagarden.net/media/upload/thumb/d/da/Body05.png/32px-Body05.png",
    "https://archives.bulbagarden.net/media/upload/thumb/8/88/Body06.png/32px-Body06.png",
    "https://archives.bulbagarden.net/media/upload/thumb/b/bc/Body07.png/32px-Body07.png",
    "https://archives.bulbagarden.net/media/upload/thumb/c/cc/Body08.png/32px-Body08.png",
    "https://archives.bulbagarden.net/media/upload/thumb/9/98/Body09.png/32px-Body09.png",
    "https://archives.bulbagarden.net/media/upload/thumb/9/97/Body10.png/32px-Body10.png",
    "https://archives.bulbagarden.net/media/upload/thumb/3/36/Body11.png/32px-Body11.png",
    "https://archives.bulbagarden.net/media/upload/thumb/4/45/Body12.png/32px-Body12.png",
    "https://archives.bulbagarden.net/media/upload/thumb/0/09/Body13.png/32px-Body13.png",
    "https://archives.bulbagarden.net/media/upload/thumb/4/4b/Body14.png/32px-Body14.png",
  ];
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [shapes, setShapes] = useState([]);
  const [allShapes, setAllShapes] = useState([]);
  const [isLoadingEachData, setLoadingEachData] = useState(true);
  const [isSorting, setSorting] = useState(true);
  console.log(currentContent)
  const getShapes = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-shape/`);
      if (!res.ok) {
        throw Error("could not fetch data");
      }
      const data = await res.json();

      function getShapeCount(result) {
        console.log("how many times");
        result.forEach(async (shape, index) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon-shape/${shape.name}`
          );
          const data = await res.json();
          // console.log(data);
          setShapes((currentList) => {
            currentList = [...currentList,
            {
              name: data.name,
              count: data.pokemon_species.length,
              sprite: shapeSprites[index],
            }]
            currentList.sort((a, b) => (a.count < b.count ? 1 : -1));
            return currentList
          });
        });
        console.log(shapes)
        setLoadingEachData(false);
      }
      getShapeCount(data.results);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  
  useEffect(() => {
    console.log(currentContent)
    console.log("before get shapes");
    getShapes();
  }, []);
  useEffect(()=>{
    console.log(currentContent)
    if (currentContent){
      console.log(d3.select(svgRef.current).selectAll(`.shapes:not(${currentContent})`).transition().attr('opacity',0.4))
    }
  },[currentContent]);

  useEffect(() => {
    console.log(shapes)
    console.log(isLoadingEachData);
    if (isLoadingEachData == false && shapes.length > 5) {
      // const sortedShapes = shapes.sort(
      //   (a, b) => parseFloat(b.count) - parseFloat(a.count)
      // );
      // console.log(sortedShapes);
      setAllShapes(
        shapes.reduce((acc, d) => {
          for (let i = 0; i < d.count; i++) {
            acc.push(d);
          }
          return acc;
        }, [])
      );
      setSorting(false)

    }
  }, [isLoadingEachData, shapes]);
  useEffect(() => {
    console.log("making svg");
    console.log(allShapes);
    // console.log(totalShapes)
    const w = 600;
    const h = 4000;
    const numRows = 50;
    const numCols = 15;
    //padding for the grid
    var xPadding = 10;
    var yPadding = 15;

    //horizontal and vertical spacing between the icons
    var hBuffer = 40;
    var wBuffer = 40;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      // .style("background-color", "fcfcfc")
      .attr("fill", "orange")
      .style("float","right")
    ;
    const tooldiv = d3.select('#shapeViz').append('div').style('visibility','hidden').style('position','absolute');
    svg
      .selectAll(".shapes")
      .data(allShapes)
      .enter()
      .append("g")
      .attr("class", "shapes")
      .attr("id", (d, i) => {
        return d.name;
      })
      .attr("transform", function (d, i, j) {
        var remainder = i % numCols; //calculates the x position (column number) using modulus
        var whole = Math.floor(i / numCols); //calculates the y position (row number)
        return (
          "translate(" +
          (xPadding + remainder * wBuffer) +
          "," +
          (yPadding + whole * hBuffer) +
          ")"
        );
      })
      .on('mouseover',(e,d)=>{
        // console.log(e,d)
        tooldiv.style('visibility','visible').text(`${d.name}`).style('color','red').attr('font-weight','bolder')
      })
      .on('mousemove',(e,d)=>{
        tooldiv.style("top", (e.pageY-10)+"px").style("left",(e.pageX+10)+"px");
      })
      .on('mouseout',(e,d)=>{
        tooldiv.style('visibility','hidden')
      })
      .append("svg:image")
      .attr("width", 28)
      .attr("height", 28)
      .attr("opacity",1)
      .attr("xlink:href", function (d) {
        return d.sprite;
      });
  }, [isSorting]);
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div style={{ textAlign: "center" }}>Loading...</div>}
      {/* {console.log(isLoading)} */}
      {!isLoading && (
        <div id="shapeViz">
          {/* {console.log(isLoading)} */}
          {allShapes.length > 0 && <svg ref={svgRef}></svg>}
          {/* {console.log("shapes ", shapes)} */}
          {/* {console.log("allshapes", allShapes)} */}
        </div>
      )}
    </>
  );
}
