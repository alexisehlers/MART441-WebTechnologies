function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Flutterby flies into a nearby garden, where she sees a Ladybug. She's rather frightened, but curious. What does she do?";
        document.getElementById("choice1").innerHTML = "Says hello";
        document.getElementById("choice2").innerHTML = "Flies away";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "The nervous butterfly begins to flutter away, but then she looks again at the little bug and hesitates...";
        document.getElementById("choice1").innerHTML = "Go investigate the creature";
        document.getElementById("choice2").innerHTML = "Gain some space and reevaluate";
    } else if (choice == 1 && answer1 == "Says hello") {
        document.getElementById("story").innerHTML = "Flutterby alights near the Ladybug and says hello. The bug doesn't respond, and flaps her wings.";
        document.getElementById("choice1").innerHTML = "Keep trying to make conversation";
        document.getElementById("choice2").innerHTML = "Go find another friend";
    } else if (choice == 2 && answer2 == "Flies away") {
        document.getElementById("story").innerHTML = "The butterfly decides to fly to a nearby waterfall. What will she do now?'";
        document.getElementById("choice1").innerHTML = "Try swimming";
        document.getElementById("choice2").innerHTML = "Get a drink from a flower";
    } else if (choice == 1 && answer1 == "Go investigate the creature") {
        document.getElementById("story").innerHTML = "Flutterby uses her best singing voice to try and woo the Ladybug to be her friend. Does it work?'";
        document.getElementById("choice1").innerHTML = "Yes it does work";
        document.getElementById("choice2").innerHTML = "No it does not work";
    } else if (choice == 2 && answer2 == "Gain some space and reevaluate") {
        document.getElementById("story").innerHTML = "The butterfly lands on a flower far enough away that she can observe the Ladybug for potential threats. What should Flutterby do?";
        document.getElementById("choice1").innerHTML = "Keep spying";
        document.getElementById("choice2").innerHTML = "Fly closer";
    }
    else if (choice == 1 && answer1 == "Keep trying to make conversation") {
        document.getElementById("story").innerHTML = "Flutterby decides that silence is golden" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Go find another friend") {
        document.getElementById("story").innerHTML = "The butterfly gives up and goes off to find another more interesting bug to talk to" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Try swimming") {
        document.getElementById("story").innerHTML = "Flutterby thinks swimming looks easy and decides to try it" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get a drink from a flower") {
        document.getElementById("story").innerHTML = "Flutterby grabs a drink from a wild rose, and it tastes delicious" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes it does work") {
        document.getElementById("story").innerHTML = "The Ladybug starts to wiggle, and Flutterby thinks she likes the song" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No it does not work") {
        document.getElementById("story").innerHTML = "The Ladybug starts to vibrate angrily and flies away" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Keep spying") {
        document.getElementById("story").innerHTML = "Flutterby enjoys watching from a distance, and keeps watching." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Fly closer") {
        document.getElementById("story").innerHTML = "Flutterby gets up her courage to fly a bit closer, but does not say anything yet" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "The butterfly named Flutterby has just emerged from her cocoon and is going out into the world. Would you like to fly together?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Flutterby thanks you!";

    }


}
