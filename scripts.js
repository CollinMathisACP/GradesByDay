var penguinPromise = d3.json("penguins/penguins/classData.json")

penguinPromise.then(
    function(penguins)
    {
        console.log(penguins);
        var quizGrades = penguins.map(mapGrades);
        console.log(quizGrades)
        makeChart(quizGrades, 5);
        
    },

    function(err)
    {
        console.log(err);
    }

  
)

var makeChart = function(quizGrades, day)
{
    d3.select("svg *").remove();
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

