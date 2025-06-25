// create svg element
var svg = d3.select(".canvas").append("svg").attr("width", 1400).attr("height", 3300);

dimensions  =   {   width: 1350, height:3250, curve:5,
                    origin: {x: 30, y: 50 },
                    over_rect: {height:30, width: 30, curve:10, offset:6 },
                    match_rect: {x:630, y: 50+50, offset:2 ,spacing:10 , width:100, height:40},
                    legend:  {run:{
                                origin:{x:85 , y:18 },
                                width: 180, height: 45,
                                heading:{x:600, y:30}
                                },
                            wicket:{
                                origin:{x:1200 , y:18 },
                                width: 125, height: 40,
                                heading:{x:600, y:30}
                                }
                            }
                };

runs = {min:0, max:36}

color = {   border:'#111',
            canvas: { background:'#eadbcb'},
            wicket: { background:'red'},
            match:  { background:'#f0f8ff'},
            over:   { background:''},
            legend: { background: '#ADD8E6'},
            team: { //https://teamcolorcodes.com/ipl-indian-premier-league/
                RCB: '#EC1C24',
                KKR: '#3A225D',
                SRH: '#EE7429',
                RR:  '#074EA2',
                DC:  '#2561AE',
                CSK: '#ffff3c',
                MI:  '#004B8D',
                LSG: '#0057E2',
                PBKS:'#DD1F2D',
                GT:  '#1B2133',
            }
        };



const graph = svg.append("g").attr("width", dimensions.width+100).attr("height", dimensions.height);

var runScoredColor = d3.scaleLinear().domain([runs.min, runs.max])
                        .range(["white", "green"])
let teamName ;
var runScoredByTeamColor  = d3.scaleLinear().domain([runs.min, runs.max])
                        .range(["white", "green"]);

function getTeamColor(team){
    if (team in color.team) {
        return color.team[team];
    }  else {
        return 'green'; // default color
    }

}

function showWinner(x_coordinate, y_coordinate){
    graph.append("svg:image")
            .attr('x', x_coordinate)
            .attr('y', y_coordinate)
            .attr('width', 15)
            .attr('height', 20)
            .attr("xlink:href", "medal.png");
}


// Working space
graph
    .append("rect")
    .attr("x", 10)
    .attr("y", 5)
    .attr("width",  dimensions.width)
    .attr("height", dimensions.height)
    .attr("fill",   color.canvas.background)
    .attr("stroke", color.border)
    .attr("stroke-width", 3);

// Legend : Wickets
graph
    .append("rect")
    .attr("x",      dimensions.legend.wicket.origin.x)
    .attr("y",      dimensions.legend.wicket.origin.y)
    .attr("width",  dimensions.legend.wicket.width)
    .attr("height", dimensions.legend.wicket.height)
    .attr('rx',     dimensions.curve)
    .attr('ry',     dimensions.curve)
    .attr("fill",   color.legend.background)
    .attr("stroke", color.border)
    .attr("stroke-width", 0.8);

graph.append("text")
    .attr('x', dimensions.legend.wicket.origin.x + 10)
    .attr('y', dimensions.legend.wicket.origin.y + 10)
    .text('Wickets in an Over')
    .attr("font-family", "monospace")
    .attr("font-size", "10px");


    for (let [index, w] of [1,2,3].entries()){

        graph.append('circle')
            .attr('cx', dimensions.legend.wicket.origin.x + 10 +  (40 * index) )
            .attr('cy', dimensions.legend.wicket.height)
            .attr('r', 3 * w)
            .attr('fill', color.wicket.background);

        graph.append("text")
            .attr('x', dimensions.legend.wicket.origin.x + 10 + (10 + (40 * index)) )
            .attr('y', dimensions.legend.wicket.height + 3)
            .text( w  + 'W')
            .attr("font-family", "monospace")
            .attr("font-size", "10px");

        }


// Legend : Winner

showWinner(800, 30)

graph.append("text")
    .attr('x', 820 )
    .attr('y', 43 )
    .text(" - Winner")
    .attr("font-family", "monospace")
    .attr("font-size", "10px");

// Legend : Overs

graph.append("text")
    .attr('x', 920 )
    .attr('y', 90 )
    .text(" Overs → ")
    .attr("font-family", "monospace")
    .attr("font-size", "10px");

graph.append("text")
    .attr('x', 400 )
    .attr('y', 90 )
    .text("←  Overs ")
    .attr("font-family", "monospace")
    .attr("font-size", "10px");

// Legend : Runs Scored

graph
    .append("rect")
    .attr("x", dimensions.legend.run.origin.x)
    .attr("y", dimensions.legend.run.origin.y)
    .attr("width", dimensions.legend.run.width)
    .attr("height", dimensions.legend.run.height)
    .attr('rx',dimensions.curve)
    .attr('ry',dimensions.curve)
    .attr("fill", color.legend.background)
    .attr("stroke", color.border)
    .attr("stroke-width", 0.8);

graph.append("text")
    .attr('x', dimensions.legend.run.origin.x + 25 )
    .attr('y', dimensions.legend.run.origin.y + 12 )
    .text("Runs Scored in an Over")
    .attr("font-family", "monospace")
    .attr("font-size", "10px");

    for (let [index, r] of [0, 6, 12, 24, 36].entries()){

            graph.append("rect")
                .attr('x',      90 + (dimensions.over_rect.width + dimensions.over_rect.offset) * index )
                .attr('y',      35 )
                .attr('width',  dimensions.over_rect.width * 0.8)
                .attr('height', dimensions.match_rect.height * 0.5)
                .attr('rx',     dimensions.over_rect.curve * 0.5)
                .attr('ry',     dimensions.over_rect.curve * 0.5)
                .attr("fill",   runScoredColor(r) )
                .attr('stroke', color.border);


            graph.append("text")
                .attr('x', 98  + (dimensions.over_rect.width  + dimensions.over_rect.offset) * index)
                .attr('y', 50    )
                .text(r)
                .attr("font-family", "monospace")
                .attr("font-size", "10px");

            }

// End of Legends
// MArkers: Match details
graph.append("text")
    .attr('x', dimensions.match_rect.x + dimensions.match_rect.spacing )
    .attr('y', dimensions.match_rect.y - dimensions.match_rect.spacing )
    .text("Match Details")
    .attr("font-family", "monospace")
    .attr("font-size", "10px");

// MArkers: Overs - 5, 10, 15, 20

for (let over_notifier = 0; over_notifier < 20; over_notifier++) {

    if ((over_notifier +1)  ===6 || (over_notifier +1)  ===15 || (over_notifier +1)  ===20)  {
        // First innings
        graph.append("text")
            .attr('x', dimensions.match_rect.x - ((over_notifier + 1) * dimensions.over_rect.width) + 10)
            .attr('y', dimensions.match_rect.y - dimensions.match_rect.spacing)
            .text(over_notifier + 1)
            .attr("font-family", "monospace")
            .attr("font-size", "10px");

        // Second innings
        graph.append("text")
            .attr('x', dimensions.match_rect.x + ((over_notifier + 1) * dimensions.over_rect.width) + 80)
            .attr('y', dimensions.match_rect.y - dimensions.match_rect.spacing)
            .text(over_notifier + 1)
            .attr("font-family", "monospace")
            .attr("font-size", "10px");

    }
}


d3.json("./data/result.json").then((data) => {

    number_of_matches = Object.keys(data)


    for(let match in number_of_matches){


        // Box: Match
        graph.append("a")
        .attr("xlink:href", data[+match+1]['match_url'])
        .attr("target", "_blank")
        .append("rect")
            .attr('x', dimensions.match_rect.x)
            .attr('y', dimensions.match_rect.y + ((+match * 2)+ dimensions.match_rect.offset) + (+match* dimensions.match_rect.height))
            .attr('width',dimensions.match_rect.width)
            .attr('height', dimensions.match_rect.height)
            .attr('fill', color.match.background)
            .attr('stroke', color.border)
            .attr('rx',dimensions.over_rect.curve)
            .attr('ry',dimensions.over_rect.curve)
            .on("mouseover", function (event1, d) {

                tip
                    .style("opacity", 1)
                    .style("left", event1.pageX  + "px")
                    .style("top", event1.pageY + "px")
                    .html(
                    "<b>Match:</b> " + (+match+1) +
                    "</br>" +
                    "<b>" + "Between: " + "</b>" + data[+match+1]['team1']['name'] + " vs " + data[+match+1]['team2']['name'] +
                    "</br>" +
                    "<b>" + "Result: " +   "</b>" + data[+match+1]['result']
                        )
                })
            .on("mouseout", function (d) {
                tip.style("opacity", 0);
                });


        if (data[+match+1]['team1']['winner'] === true){
            showWinner(dimensions.match_rect.x+5,
                dimensions.match_rect.y + ((+match * 2)+ dimensions.match_rect.offset) + (+match* dimensions.match_rect.height) + (dimensions.match_rect.height/2) - 10);
        }
        if (data[+match+1]['team2']['winner'] === true){
            showWinner(dimensions.match_rect.x+80,
                dimensions.match_rect.y + ((+match * 2)+ dimensions.match_rect.offset) + (+match* dimensions.match_rect.height) + (dimensions.match_rect.height/2) - 10);
        }



        graph.append("text")
            .text( +match+1)
            .attr('x', dimensions.match_rect.x + (dimensions.match_rect.width/2))
            .attr('y', dimensions.match_rect.y + ((+match * 2)+ dimensions.match_rect.offset) + (+match* dimensions.match_rect.height) + (dimensions.match_rect.height/2))
            .attr('text-anchor', 'middle')
            .attr("font-family", "monospace")
            .attr("font-size", "10px");

        graph.append("text")
            .text( data[+match+1]['team1']['name'] + " vs " + data[+match+1]['team2']['name'])
            .attr('x', dimensions.match_rect.x + (dimensions.match_rect.width/2))
            .attr('y',dimensions.match_rect.y + ((+match * 2)+ dimensions.match_rect.offset) + (+match* dimensions.match_rect.height) + (dimensions.match_rect.height/2) + 15)
            .attr('text-anchor', 'middle')
            .attr("font-family", "monospace")
            .attr("font-size", "10px");

            innings_details = data[+match+1]['details']

            if(innings_details[0]['innings']===1){
                let battingTeam = innings_details[0]['batting_team'];

                let teamColor = getTeamColor(data[+match+1]['team1']);

                var runScoredByTeamColor  = d3.scaleLinear().domain([runs.min, runs.max])
                        .range(["white", teamColor]);

                for(let over in innings_details[0]['over_by_over'] ){
                    let total_runs = innings_details[0]['over_by_over'][over]['total_runs'];
                    let wkt = innings_details[0]['over_by_over'][+over]['wkt'];
                    let over_num = innings_details[0]['over_by_over'][over]['over_num'];
                    // Box: Overs
                    graph.append("rect")
                        .attr('x', dimensions.match_rect.x  - ((+over+1) * dimensions.over_rect.width))
                        .attr('y', dimensions.match_rect.y + ((match * 2)+ dimensions.match_rect.offset) + (match * dimensions.match_rect.height))
                        .attr('width',dimensions.over_rect.width)
                        .attr('height', dimensions.match_rect.height)
                        .attr('rx',dimensions.over_rect.curve)
                        .attr('ry',dimensions.over_rect.curve)
                        .attr("fill", runScoredColor(+innings_details[0]['over_by_over'][over]['total_runs']) )
                        .attr('stroke', color.border)
                        .on("mouseover", function (event, d) {

                            tip
                                .style("opacity", 1)
                                .style("left", event.pageX  + "px")
                                .style("top", event.pageY + "px")
                                .html(
                                "<b>" +"Batting"+ "</b>:"+ battingTeam +
                                "</br><b>Over:</b>" +  over_num +
                                "</br><b>Scored (this over):</b>" + total_runs + "/" + wkt
                                );
                            })
                        .on("mouseout", function (d) {
                            tip.style("opacity", 0);
                            });

                    if (innings_details[0]['over_by_over'][over]['wkt'] >0){

                        graph.append('circle')
                            .attr('cx', dimensions.match_rect.x  - ((+over+1) * dimensions.over_rect.width) + (dimensions.over_rect.width/2))
                            .attr('cy', dimensions.match_rect.y + ((match * 2)+ dimensions.match_rect.offset) + (match * dimensions.match_rect.height) + (dimensions.match_rect.height/2))
                            .attr('r', innings_details[0]['over_by_over'][over]['wkt'] * 3)
                            .attr('fill', color.wicket.background)
                                .style("opacity", 0)
                                .transition()
                                .duration(over_num* 200)
                                .style("opacity", 0.8);

                    }

                }

            }

            if(innings_details[1]['innings']===2){
                teamName = data[+match+1]['team2'];
                let battingTeam = innings_details[1]['batting_team'];

                let teamColor = getTeamColor(teamName);
                var runScoredByTeamColor  = d3.scaleLinear().domain([runs.min, runs.max])
                        .range(["white", teamColor]);
                for(let over in innings_details[1]['over_by_over'] ){
                    let total_runs = innings_details[1]['over_by_over'][over]['total_runs'];
                    let wkt = innings_details[1]['over_by_over'][+over]['wkt'];
                    let over_num = innings_details[1]['over_by_over'][over]['over_num'];

                    graph.append("rect")
                        .attr('x', dimensions.match_rect.x + dimensions.match_rect.width  + (+over * dimensions.over_rect.width))
                        .attr('y', dimensions.match_rect.y + ((match * 2)+ dimensions.match_rect.offset) + (match * dimensions.match_rect.height))
                        .attr('width',dimensions.over_rect.width)
                        .attr('height', dimensions.match_rect.height)
                        .attr('rx',dimensions.over_rect.curve)
                        .attr('ry',dimensions.over_rect.curve)
                        .attr("fill", runScoredColor(innings_details[1]['over_by_over'][over]['total_runs']) )
                        .attr('stroke', color.border)
                        .on("mouseover", function (event, d) {

                            tip
                                .style("opacity", 1)
                                .style("left", event.pageX  + "px")
                                .style("top", event.pageY + "px")
                                .html(
                                "<b>" +"Batting"+ "</b>:"+ battingTeam +
                                "</br><b>Over:</b>" +  over_num +
                                "</br><b>Scored (this over):</b>" + total_runs + "/" + wkt
                                );
                            })
                        .on("mouseout", function (d) {
                            tip.style("opacity", 0);
                            });

                    if (innings_details[1]['over_by_over'][over]['wkt'] >0){

                        graph.append('circle')
                            .attr('cx',dimensions.match_rect.x + dimensions.match_rect.width  + (+over * dimensions.over_rect.width) + (dimensions.over_rect.width/2))
                            .attr('cy', dimensions.match_rect.y + ((match * 2)+ dimensions.match_rect.offset) + (match * dimensions.match_rect.height) + (dimensions.match_rect.height/2))
                            .attr('r', innings_details[1]['over_by_over'][over]['wkt'] * 3)
                            .attr('fill', color.wicket.background)
                                .style("opacity", 0)
                                .transition()
                                .duration(over_num* 200)
                                .style("opacity", 0.8);
                    }
                }
            }
    }

    // Tooltip
    var tip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

})
