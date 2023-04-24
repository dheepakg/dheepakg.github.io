const svg = d3
  .select(".canvas")
  .append("svg")
  .attr("width", 900)
  .attr("height", 600);

const LINE_ORIGIN = 70;
const TEXT_ORIGIN = 20;

const graph = svg.append("g").attr("width", 500).attr("height", 400);

graph
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 900)
  .attr("height", 500)
  .attr("fill", "#fff1e5")
  .attr("stroke", "black")
  .attr("stroke-width", 3);

d3.json(
  "https://raw.githubusercontent.com/dheepakg/dheepakg.github.io/main/post/2023/04/visualization-post-grouped-by-years-d3/details.json"
).then((data) => {
  // Sclaing
  // Defines the year line
  const y = d3
    .scaleBand()
    .domain(data.map((item) => item.year))
    .range([50, 500])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  // Defines position of dot
  const x = d3.scaleLinear().domain([1, 365]).range([LINE_ORIGIN, 730]);

  // console.log(d3.extent(["2021-01-02", "2021-12-30"]));

  const lines = graph.selectAll("line").data(data);
  const texts = lines.select("text").data(data);
  const circles = lines.select("circle").data(data);

  texts
    .enter()
    .append("text")
    .text((d) => d.year)
    .attr("x", TEXT_ORIGIN)
    .attr("y", (d) => y(d.year) + 5)
    .attr("font-size", 18)
    .attr("font-weight", "Bold");

  console.log(data.year);

  // Below texts are for right side text showing count of posts per year
  texts
    .enter()
    .append("text")
    .text((d) => d.yearly_count + " posts")
    .attr("x", TEXT_ORIGIN + 730)
    .attr("y", (d) => y(d.year) + 5)
    .attr("fill", "grey")
    .attr("font-size", 15);

  lines
    .append("line")
    .attr("x1", LINE_ORIGIN)
    .attr("y1", (d) => y(d.year))
    .attr("x2", 365 * 1.5)
    .attr("y2", (d) => y(d.year))
    .attr("stroke", "#add8e6")
    .attr("stroke-width", 10);

  lines
    .enter()
    .append("line")
    .attr("x1", LINE_ORIGIN)
    .attr("y1", (d) => y(d.year))
    .attr("x2", 365 * 2.0)
    .attr("y2", (d) => y(d.year))
    .attr("stroke", "#add8e6")
    .attr("stroke-width", 10);

  circles
    .enter()
    .append("circle")
    .attr("r", 4)
    .attr("cx", (d) => x(d.doy))
    .attr("cy", (d) => y(d.year))
    .attr("fill", "black")
    .attr("stroke-width", 1)
    .attr("stroke", "#ffff00");
});
