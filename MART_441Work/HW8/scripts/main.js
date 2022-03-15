var giphySelector = "#giphy";
var allGiphy = new Array();
class GiphyInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{

    var giphy = new GiphyInfo("#giphy", "images/giphy.gif");
    allGiphys.push(giphy);

}
$(document).ready(function(){
    initializeArray();
    console.log(allGiphys.length);
    console.log(allGiphys[0].toString());
    console.log(allGiphys[0].theSelector);
    console.log(allGiphys[0].theImagePath);

    $(allGiphys[0].theSelector).attr("src", allGiphys[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);

        $(allGiphys[0].theSelector).fadeOut().fadeIn();

    });

});

function moveTriangle()
{
    $("#triangle").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
