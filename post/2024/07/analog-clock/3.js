// create svg element:
var svg = d3.select(".three").append("svg").attr("width", 600).attr("height", 600)

center = {'x1': 300, 'y1':300}
radius  = 200
no_of_lines = 60



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
var date = new Date();
secs = date.getSeconds();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// This is for seconds arm to go around clock
async function seconds_arm_in_clock() {
    for (let j = 46; j <= no_of_lines ; j++) {
        // j = 46; to sync the seconds hand with the 90degree.
        // Do not modify
        i = j + secs;
        // secs = 0;


        var x_secs = center.x1 + (radius + 15) * Math.cos(2* Math.PI * ( i) / no_of_lines);

        var y_secs = center.x1 + (radius + 15) * Math.sin(2*  Math.PI * ( i) / no_of_lines);

        await sleep(1000);

        // To remove the radius from prev position
        // d3.select(".secs_arm").remove();



        // console.log(x_secs, y_secs)

        // Rotating radius
        svg.append('line')
            .attr('x1', center.x1)
            .attr('y1', center.y1)
            .attr('x2', x_secs)
            .attr('y2', y_secs )
            .attr('stroke', 'red')
            .attr('stroke-width',3)
            .attr("class", "secs_arm")

        // To have the radius rotates indefinitely
        // if (j == no_of_lines && indefinite_rotation == true)  {
        //     j = 0;
        // }

    }

    }
seconds_arm_in_clock()
