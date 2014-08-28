var one = "";
var two = "";
var help = "";
var ls = "";

var commands = [["ls", "one"],
                ["clear", ""],
                ["help", "three"],
                ["whoami", "cary"],
                ["pwd", "/home/cary"],
                ["finger cary", ""],
                ["which python3", "/usr/bin/python3"],
                ["ifconfig", ""],
                ['echo "WHY AM I TYPING THESE THINGS?"', "WHY AM I TYPING THESE THINGS?"]];

$(document).ready(function() 
{
    jQuery.get("content/one.txt", function(data) {
        commands[0][1] = data;
    });

    jQuery.get("content/help.txt", function(data) {
        commands[2][1] = data;
    });

    jQuery.get("content/three.txt", function(data) {
        commands[5][1] = data;
    });

    jQuery.get("content/two.txt", function(data) {
        commands[7][1] = data;
    });

    cursorBlink();
    setTimeout(typeStuff, 2000);
});

function clearTerminal() 
{
    $(".terminal").remove();
    $('body').prepend('<div class="terminal"><span>cary@hacks:~$<span id="insertHere"></span><div class="cursor"></div></span></div>');
}

function cursorBlink() 
{
    $(".cursor").animate({opacity:0}, {duration: 0, queue: false});
    $(".cursor").animate({opacity:1}, {duration: 350, queue: false});
    setTimeout(cursorBlink, 1000);
}

function typeLetter(text) 
{
    $("#insertHere").append("<span>" + text + "</span>");
}

function pressEnter(command, output) 
{
    $(".cursor").attr("class", "oldcursor");
    $("#insertHere").attr("id", "oldHerp");
    $(".terminal").append(output +"<br/>");
    $(".terminal").append("\n" +
    '<span>cary@hacks:~$<span id="insertHere"></span><div class="cursor"></div></span>');
    if (command == "clear")
    {
        clearTerminal();
    }
    setTimeout(typeStuff, 1000, command);
}

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function typeStuff(previousCommand) 
{
    var cmdIndex;
    if (previousCommand == "help")
    {
        cmdIndex = 1;
    }
    else
    {
        cmdIndex = getRandomInt(0, commands.length - 1);
    }
    var cmd = commands[cmdIndex][0];
    var totalTime = 0;
    for (var i = 0; i < cmd.length; i++)
    {
        var tiem = getRandomInt(0, 800);
        totalTime = totalTime + tiem;
        setTimeout(typeLetter, totalTime, cmd[i]);
    }
    setTimeout(pressEnter, totalTime+300, commands[cmdIndex][0], commands[cmdIndex][1]);
}