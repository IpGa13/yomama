var output = "Yo Mama so.. "


//feel free to expand and pullrequest i am done.

var adjective = [
    "stupid,",
    "fat,",
    "hairy,",
    "short,",
    "old,",
    "ugly,",
    "poor,"
]

var condition = [
    "when i pictured her in my head,",
    "as the day came to an end,",
    "when she looked out the window,",
    "when she sat on @person,",
    "when the power went out,"
]

var event = [
    "she got arrested for @reason",
    "you can see @visual",
    "she bought tickets to @position",
    "she broke my neck",
    "she made the ipad",
    "her wallet has negative mass",
    "she freakin' died",
    "@person thought she was @person",
    "she drove to @position",
    "she looked like @person",
    "she went to a tool store for @reason",
    "you have brain damage",
    "she commited suicide",
    "she turned @person into the ipad",
    "she sold her car for @reason",
    "she took all the drugs",
]

var reason = [
    "mooning",
    "fun",
    "gas money",
    "tax evasion"
]

var visual = [
    "the northern lights",
    "a desklamp",
    "her legs",
    "the light at the end of the tunnel"
]

var person = [
    "Slenderman",
    "Glenn Quagmire",
    "Markiplier",
    "PewDiePie",
    "YOU"
]

var position = [
    "THE SUPER BOWL YEEEEAAHH!!!!!!",
    "! XBOX LIVE !",
    "the junkyard next town over",
    "a random guys house",
    "the heart attack grill"
]

function replaceTags(inputString) {
    var tagRegex = /@(\w+)/g;
    var replacedString = inputString.replace(tagRegex, function(match, tagname) {
        var tagArray = window[tagname];
        if (tagArray && tagArray.length > 0) {
            var randomIndex = Math.floor(Math.random() * tagArray.length);
            return tagArray[randomIndex];
        } else {
            return match;
        }
    });
  
    return replacedString;
}


function generate() {
    output = "Yo Mama so.. "
    output = output + replaceTags("@adjective @condition @event")
    output = replaceTags(output)
    console.log(output)
    document.getElementById("gentextout").innerHTML = output
}