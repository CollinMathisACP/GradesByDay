var penguinPromise = d3.json("penguins/penguins/classData.json")

penguinPromise.then(
    function(penguins)
    {
    
        console.log(penguins);
        var quizGrades = penguins.map(mapGrades);
        addOnClicks(quizGrades);
        console.log(quizGrades)
        
        d3.select("#next").on("click", function(){makeChart(quizGrades, 1)});
        makeChart(quizGrades, 0);
        
    },

    function(err)
    {
        console.log(err);
    }

  
)

var makeChart = function(quizGrades, day)
{
    d3.select("h1").text("Day " + (day+1))
    d3.selectAll("svg *").remove();
    var currentDay = quizGrades.map(function(penguin)
        {
            return penguin[day];
        })
    console.log(currentDay);
    setup(currentDay)
}

var mapGrades = function(penguin)
{
    var quizes = penguin.quizes;
    var grades = quizes.map(function(quiz){
    return quiz.grade;
        })
    
    return grades;
    
}

var setup = function(grades)
{
    var index = 1;
    var points = grades.map(function(grade)
    {
        var point = { x:index, y:grade};
        index++;
        return point;
    });
    console.log(points);
    
    d3.select("svg").attr("height", screen.height).attr("width", screen.width);
    var xScale = d3.scaleLinear();
    xScale.domain([d3.min(points, function(p){ return p.x; }), d3.max(points, function(p){ return p.x; })]);
    xScale.range([0, screen.width]);
    
    var yScale = d3.scaleLinear();
    yScale.domain([d3.min(points, function(p){ return p.y; }), d3.max(points, function(p){ return p.y; })]);
    yScale.range([screen.height, 0]);

    drawPoints(points, xScale, yScale);
}

var drawPoints = function(points, xScale, yScale)
{   
    d3.select("svg").selectAll("circle").data(points).enter().append("circle")
    .attr("cx", function(p){ return xScale(p.x); })
    .attr("cy", function(p){ return yScale(p.y); })
    .attr("r", 10)
    
}

var addOnClicks = function(quizGrades)
{
    d3.select("#Day1").on("click", function(){
        d3.select("#next").on("click", function(){makeChart(quizGrades, 1)});
        makeChart(quizGrades, 0);});
    d3.select("#Day2").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 0)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 2)});
        makeChart(quizGrades, 1);});
    d3.select("#Day3").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 1)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 3)});
        makeChart(quizGrades, 2);});
    d3.select("#Day4").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 2)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 4)});
        makeChart(quizGrades, 3);});
    d3.select("#Day5").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 3)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 5)});
        makeChart(quizGrades, 4);});
    d3.select("#Day6").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 4)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 6)});
        makeChart(quizGrades, 5);});
    d3.select("#Day7").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 5)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 7)});
        makeChart(quizGrades, 6);});
    d3.select("#Day8").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 6)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 8)});
        makeChart(quizGrades, 7);});
    d3.select("#Day9").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 7)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 9)});
        makeChart(quizGrades, 8);});
    d3.select("#Day10").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 8)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 10)});
        makeChart(quizGrades, 9);});
    d3.select("#Day11").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 9)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 11)});
        makeChart(quizGrades, 10);});
    d3.select("#Day12").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 10)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 12)});
        makeChart(quizGrades, 11);});
    d3.select("#Day13").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 11)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 13)});
        makeChart(quizGrades, 12);});
    d3.select("#Day14").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 12)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 14)});
        makeChart(quizGrades, 13);});
    d3.select("#Day15").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 13)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 15)});
        makeChart(quizGrades, 14);});
    d3.select("#Day16").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 14)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 16)});
        makeChart(quizGrades, 15);});
    d3.select("#Day17").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 15)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 17)});
        makeChart(quizGrades, 16);});
    d3.select("#Day18").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 16)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 18)});
        makeChart(quizGrades, 17);});
    d3.select("#Day19").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 17)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 19)});
        makeChart(quizGrades, 18);});
    d3.select("#Day20").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 18)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 20)});
        makeChart(quizGrades, 19);});
    d3.select("#Day21").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 19)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 21)});
        makeChart(quizGrades, 20);});
    d3.select("#Day22").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 20)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 22)});
        makeChart(quizGrades, 21);});
    d3.select("#Day23").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 21)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 23)});
        makeChart(quizGrades, 22);});
    d3.select("#Day24").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 22)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 24)});
        makeChart(quizGrades, 23);});
    d3.select("#Day25").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 23)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 25)});
        makeChart(quizGrades, 24);});
    d3.select("#Day26").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 24)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 26)});
        makeChart(quizGrades, 25);});
    d3.select("#Day27").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 25)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 27)});
        makeChart(quizGrades, 26);});
    d3.select("#Day28").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 26)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 28)});
        makeChart(quizGrades, 27);});
    d3.select("#Day29").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 27)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 29)});
        makeChart(quizGrades, 28);});
    d3.select("#Day30").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 28)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 30)});
        makeChart(quizGrades, 29);});
    d3.select("#Day31").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 31)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 33)});
        makeChart(quizGrades, 30);});
    d3.select("#Day32").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 32)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 34)});
        makeChart(quizGrades, 31);});
    d3.select("#Day33").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 33)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 35)});
        makeChart(quizGrades, 32);});
    d3.select("#Day34").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 34)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 36)});
        makeChart(quizGrades, 33);});
    d3.select("#Day35").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 35)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 37)});
        makeChart(quizGrades, 34);});
    d3.select("#Day36").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 36)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 38)});
        makeChart(quizGrades, 35);});
    d3.select("#Day37").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 37)});
        d3.select("#next").on("click", function(){makeChart(quizGrades, 39)});
        makeChart(quizGrades, 36);});
    d3.select("#Day38").on("click", function(){
        d3.select("#prev").on("click", function(){makeChart(quizGrades, 36)});
        makeChart(quizGrades, 37);});
    
    
    
}