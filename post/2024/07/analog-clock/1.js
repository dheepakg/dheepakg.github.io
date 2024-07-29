// create svg element:
var svg = d3.select(".one").append("svg").attr("width", 600).attr("height", 600)

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


