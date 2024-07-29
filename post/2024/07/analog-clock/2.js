// create svg element:
var svg = d3.select(".two").append("svg").attr("width", 600).attr("height", 600)

center = {'x1': 300, 'y1':300}
radius  = 200


// Bigger circle
svg.append('circle')
    .attr('cx', center.x1)
    .attr('cy', center.y1)
    .attr('r', radius)
    .attr('fill', '#f2f4ff');

// Centre point
svg.append('circle')
    .attr('cx', center.x1)
    .attr('cy', center.y1)
    .attr('r', radius/100)
    .attr('stroke', 'black')
    .attr('fill', 'blue')

// Seconds arm

svg.append('line')
    .attr('x1', center.x1)
    .attr('y1', center.y1)
    .attr('x2', 500 )
    .attr('y2', 300 )
    .attr('stroke', 'black')
    .attr('stroke-width',3);
