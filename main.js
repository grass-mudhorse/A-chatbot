var head_negative = {
    sc: [
        "#N is thick as a brick!",
        "#N is thick as a plank!",
        "#N made a right bags of that!",
        "That's brutal!",
        "#N is such a dosser!",
        "#N made a complete hames of that work!",
        "#N is definitely a Holy Joe!",
        "#N is a bollocks!",
        "#N is a right moron!",
        "#N is not the full shilling!",
        "#N is such an eejit!",
        "#N is dense!"
    ]
}

var sentence_negative = {
    sc: [
        "#N is like the Don Quixote, who is naive and living in his own imaged world.",
        "#N is like the Macbeth, who is destroyed himself by greed.",
        "#N is like the king in The Emperor's New Clothes, who can only deceive himself but not others.",
        "#N is like the Iago in Othello, who believes the absolute egoism.",
        "#N is going to fail because of greed and ignorance, like the children in Lord of the Flies.",
        "If I meet #N, I would say 'Hi, stopping acting the maggot!'."
    ]
}

var head_positive = {
    sc: [
        "#N is bang on!",
        "That's bang on!",
        "Deadly thought!",
        "Fierce idea!",
        "Bleeding massive!",
        "Fair play, #N!",
        "#N is savage!",
        "#N is whopper!",
        "Nice one!"
    ]
}

var sentence_positive = {
    sc: [
        "#N is like the Santiago in The Old Man and the Sea, brave and unyielding, a real fighter. Good luck to #N!",
        "#N is like the Holden in The Catcher in the Rye, wise, smart, sees through the essence of society. Good luck to #N!",
        "#N is like the Jean Valjean in Les Misérables，Brave and unyielding，who struggled to lead a normal life after serving a 19-year-long prison sentence.",
        "#N is like the Oliver in Oliver Twist, brave and unyielding, a real fighter. Good luck to #N!",
        "#N is like the Sherlock Holmes, wise and smart, good luck to #N."
    ]
}

var conjunction = {
    sc: [
        "By the way, ",
        "So, ",
        "Speaking of which, ",
        "Anyway, ",
        "That reminds me, ",
        "Oh, before I forget, ",
        "On another topic, ",
        "Changing gears a little bit, ",
        "Changing the topic slightly, ",
        "In other news, ",
        "Moving on, ",
        "On a happier note, "
    ]
}

var end = {
    sc: [
        "have you ever tried Irish coffee before? It's deadly good! Give it a lash!",
        "let's have a pint of black stuff till we are ossified!",
        "let's have a pint of black stuff till we are locked!",
        "let's have a pint of black stuff till we are plastered!",
        "will we have pints of black stuff till we are fluthered?",
        "let's have a pint of black stuff till we are on the tear!",
        "let's have a pint of black stuff till we are in the numbs!",
        "let's go on the lash, I'd murder a Guinness!",
        "let's go on the lash, I'd murder a black stuff!",
        "let's gargle, I'll buy you a drink.",
        "I'm a rugger bugger! And you?",
    ]
}

var verb = {
    sc: [
        "passed ", "signed ", "disagreed ", "acknowledged ", "denied ", "quit ", "supported ", "provoked "
    ]
}

var ob = {
    sc: [
        "Trade Protectionism Policy", "Reciprocal Trade Agreement", "Working Visa", "National Referendum", "Independent Referendum", "Cyberspace Sovereignty", "Strike Movement", "Internet Freedom Movement", "Freedom of Speech", "Free Medical Insurance  Policy",
    ]
}

var countries = {
    sc: "Mongolia, North Korea, South Korea, Japan, Philippines, Vietnam, Laos, Cambodia, Myanmar, Thailand, Malaysia, Brunei, Singapore".split(", "),
}

var head, sentences, conjunctions, ends, lang;

function Dictionary() {
    this.dataStore = [];
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.findAll = findAll;
}
function add(key, value) {
    this.dataStore[key] = value;
}
function find(key) {
    return this.dataStore[key];
}
function remove(key) {
    if (this.dataStore[key]) delete this.dataStore[key];
    else return 'Not Found';
}
function findAll(str) {
    var temp = [];
    var i = 0
    for (var key in this.dataStore) {
        if (str.includes(key)) {
            temp[i] = "'" + key + "':" + " " + this.dataStore[key] + "</br>";
            i++;
        }
    }
    return temp;
}
var directory = new Dictionary();

//添加元素
directory.add('bang on', 'Right, accurate, correct');
directory.add('Deadly', 'Brilliant, fantastic, great');
directory.add('Fair play', 'Well done!');
directory.add('Fierce', 'Very good, great');
directory.add('savage', 'Great, brilliant');
directory.add('Bleeding massive', 'Very good, great');
directory.add('bleeding massive', 'Very good, great');
directory.add('whopper', 'Cool, brilliant');
directory.add('bags', 'Make a mess of doing something. He made a right bags of that');
directory.add('brutal', 'Awful, dreadful');
directory.add('dosser', 'Someone not working or is messing about, up to no good');
directory.add('eejit', 'Complete fool, doing something silly');
directory.add('fluthered', 'Very drunk');
directory.add('hames', 'Complete mess');
directory.add('Holy Joe', 'Self-righteous person');
directory.add('not the full shilling', 'Unintelligent');
directory.add('thick', 'Extremely stupid');
directory.add('bollocks', 'Anyone is stupid');
directory.add('dense', 'Stupid');
directory.add('moron', 'Fool');
directory.add('weapon', 'Fool');
directory.add('lash', 'to make an attempt at something; or to go out drinking');
directory.add('on the tear', 'very drunk');
directory.add('plastered', 'Very drunk');
directory.add('ossified', 'Very drunk');
directory.add('locked', 'Very drunk');
directory.add('black stuff', 'Guinness');
directory.add('murder', 'really want to do something');
directory.add('gargle', 'go out drinking');
directory.add('numbs', '(n): drunk, e.g. I was in the numbs last night');
directory.add('rugger bugger', 'Someone posh, loud and loves rugby');
directory.add('acting the maggot', 'Up to no good and probably performing some kind of mischief.');

//显示字典


function shuffle(sentences) {
    for (var i = sentences.length; i > 0; i--) {
        var random_pos = Math.floor(Math.random() * i)
        var tmp = sentences[i - 1]
        sentences[i - 1] = sentences[random_pos]
        sentences[random_pos] = tmp
    }
}


function Bot(n, b) {
    paragraphs = 1
    var endSelect = Math.floor((Math.random() * 99))
    var answer = "<b>Bot：</b>"
    var index = Math.floor((Math.random() * head.length))
    answer += head[index] + " "
    shuffle(sentences)
    index = 0
    answer += sentences[index] + " "
    index = Math.floor((Math.random() * conjunctions.length))
    answer += conjunctions[index] + " "
    if (endSelect < 33) {
        index = Math.floor((Math.random() * ends.length))
        answer += ends[index]
    }
    else if(endSelect >= 33 & endSelect < 66){
        var book = "have you read " + randomBook(txt) + " before? "
        if (Math.floor((Math.random() * 10)) % 2 == 0) {
            book += "It's savage!"
        } else {
            book += "It's bleeding massive!"
        }
        answer += book
    }else{
        var pp = "let me tell you a funny proverb, " + "'" +randompro(proverbs)+"'."
        answer += pp
    }
    answer = answer.replace(/#N/g, n)
    answer = answer.replace(/#B/g, b)
    answer += "<br><br>"
    var description = directory.findAll(answer)
    for (i = 0; i < description.length; i++) {
        answer += description[i]
    }
    return answer
}

function generate() {
    var text = document.getElementById("text")
    var n = document.getElementById("1").value
    var b = document.getElementById("2").value
    var attitude = getRadioButtonCheckedValue("attitude")
    if (attitude == "support") {
        head = head_positive[lang]
        sentences = sentence_positive[lang]
        conjunctions = conjunction[lang]
        ends = end[lang]
    }
    else if (attitude == "condemn") {
        head = head_negative[lang]
        sentences = sentence_negative[lang]
        conjunctions = conjunction[lang]
        ends = end[lang]
    }

    if (n.length === 0 || b.length === 0) {

    } else {
        while (text.hasChildNodes()) {
            text.removeChild(text.firstChild)
        }
        var s = document.createElement("p")
        s.innerHTML = lang === "sc" ? "<b>Question: </b>" + n + " " + b + ", what do you think of it？" : "<b>記者：</b>" + n + b + "，中方對此有何回應？"
        document.getElementById("text").appendChild(s)
        var t = document.createElement("p")
        t.innerHTML = Bot(n, b)
        document.getElementById("text").appendChild(t)
    }
}

function pick(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function random() {
    document.getElementById("2").value = pick(verb[lang]) + pick(ob[lang])
    document.getElementById("1").value = pick(countries[lang]) + pick(" ")
    generate()
}

function getRadioButtonCheckedValue(tagNameAttr) {
    var radio_tag = document.getElementsByName(tagNameAttr);
    for (var i = 0; i < radio_tag.length; i++) {
        if (radio_tag[i].checked) {
            var checkvalue = radio_tag[i].value;
            return checkvalue;
        }
    }
}

function changeLang() {
    lang = "sc";
    localStorage.setItem("lang", lang);
    random()
    renderText()
}

function renderText() {
    var labelLang = document.getElementById("label-lang")
    labelLang.innerText = (lang === "sc") ? "语言" : "語言"

    var labelN = document.getElementById("label-n")
    labelN.innerText = (lang === "sc") ? "Object：" : "發言對象："

    var labelB = document.getElementById("label-b")
    labelB.innerText = (lang === "sc") ? "What did the object do?：" : "對方幹了什麼事情："

    var labelAttitude = document.getElementById("label-attitude")
    labelAttitude.innerText = (lang === "sc") ? "Attitude：" : "態度："

    var labelSupport = document.getElementById("label-support")
    labelSupport.innerText = (lang === "sc") ? "Positive" : "支持"

    var labelCondemn = document.getElementById("label-condemn")
    labelCondemn.innerText = (lang === "sc") ? "Negative" : "譴責"

    var btnGenerate = document.getElementById("btn-generate")
    btnGenerate.innerText = (lang === "sc") ? "Answer" : ""
}

var txt = { "book": ["The Lord of the Rings", "The Little Prince", "Harry Potter and the Philosopher's Stone", "The Hobbit", "And Then There Were None", "Dream of the Red Chamber", "The Lion, the Witch and the Wardrobe", "She: A History of Adventure", "The Adventures of Pinocchio", "Vardi Wala Gunda", "The Da Vinci Code", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Half - Blood Prince", "Harry Potter and the Deathly Hallows", "The Alchemist", "The Catcher in the Rye", "Think and Grow Rich", "The Bridges of Madison County", "You Can Heal Your Life", "One Hundred Years of Solitude", "Lolita", "Heidi's Years of Learning and Travel", "The Common Sense Book of Baby and Child Care", "Anne of Green Gables", "Black Beauty", "The Name of the Rose", "The Eagle Has Landed", "Watership Down", "The Hite Report", "Charlotte's Web", "The Ginger Man", "The Tale of Peter Rabbit", "Jonathan Livingston Seagull", "The Very Hungry Caterpillar", "A Message to Garcia", "Sophie's World", "Flowers in the Attic", "To Kill a Mockingbird", "Angels & Demons", "Kane and Abel", "How the Steel Was Tempered", "War and Peace", "The Diary of Anne Frank", "Your Erroneous Zones", "The Purpose Driven Life", "The Thorn Birds", "The Kite Runner", "Valley of the Dolls", "The Lost Symbol", "Gone with the Wind", "Nineteen Eighty-Four", "The Revolt of Mamie Stover", "The Girl with the Dragon Tattoo", "The Hunger Games", "The Young Guard", "Who Moved My Cheese?", "The Great Gatsby", "The Wind in the Willows", "The 7 Habits of Highly Effective People", "Virgin Soil Upturned", "The Celestine Prophecy", "The Fault in Our Stars", "The Shack", "Uncle Styopa", "The Godfather", "Love Story", "Catching Fire", "Mockingjay", "Gone Girl", "The Girl on the Train", "All Quiet on the Western Front", "The Bermuda Triangle", "Things Fall Apart", "Animal Farm", "Wolf Totem", "The Happy Hooker: My Own Story", "Jaws", "Love You Forever", "The Women's Room", "What to Expect When You're Expecting", "Adventures of Huckleberry Finn", "The Secret Diary of Adrian Mole, Aged 13¾", "Pride and Prejudice", "Kon-Tiki: Across the Pacific in a Raft", "The Good Soldier Švejk", "Where the Wild Things Are", "The Power of Positive Thinking", "The Secret", "Fear of Flying", "Dune", "Charlie and the Chocolate Factory", "The Naked Ape", "Totto-chan, the Little Girl at the Window", "The Horse Whisperer", "Goodnight Moon", "The Neverending Story", "The Outsiders", "Guess How Much I Love You", "Shōgun", "The Poky Little Puppy", "The Pillars of the Earth", "How to Win Friends and Influence People", "Perfume", "The Grapes of Wrath", "The Shadow of the Wind", "Interpreter of Maladies", "The Hitchhiker's Guide to the Galaxy", "Tuesdays with Morrie", "God's Little Acre", "Follow Your Heart", "A Wrinkle in Time", "Long Walk to Freedom", "The Old Man and the Sea", "Life After Life", "Me Before You", "Norwegian Wood", "Peyton Place", "The Plague", "No Longer Human", "Man's Search for Meaning", "Divine Comedy", "The Prophet", "The Exorcist", "The Gruffalo", "The Cat in the Hat", "Diana: Her True Story", "The Help", "Catch - 22", "Eye of the Needle", "A Brief History of Time", "The Lovely Bones", "Wild Swans", "Santa Evita", "Night", "Confucius from the Heart", "The Total Woman", "Knowledge - value Revolution", "Problems in China's Socialist Economy", "What Color is Your Parachute?", "The Dukan Diet", "The Joy of Sex", "The Gospel According to Peanuts", "Life of Pi", "The Giver", "The Front Runner", "The Goal", "Harry Potter", "Goosebumps", "Perry Mason", "Berenstain Bears", "Sweet Valley High", "Noddy", "Nancy Drew", "Thomas the Tank Engine", "San-Antonio", "Robert Langdon", "Diary of a Wimpy Kid", "The Baby-sitters Club", "Little Critter", "Peter Rabbit", "Fifty Shades", "Geronimo Stilton", "Chicken Soup for the Soul", "Clifford the Big Red Dog", "Frank Merriwell", "Dirk Pitt", "Musashi", "The Chronicles of Narnia", "Mr. Men", "Twilight", "The Hunger Games", "James Bond", "Martine", "Discworld", "Miffy", "Millennium", "Alex Cross", "Captain Underpants", "Fear Street", "Pippi Longstocking", "The Vampire Chronicles", "The Wheel of Time", "OSS 117", "A Song of Ice and Fire", "Winnie-the-Pooh", "Magic Tree House", "Left Behind", "A Series of Unfortunate Events", "Little House on the Prairie", "Jack Reacher", "The Magic School Bus", "Where's Wally ? ", "Men Are from Mars, Women Are from Venus", "The Hardy Boys", "The Bobbsey Twins", "Tarzan", "Earth's Children", "Junie B. Jones", "Harry Bosch", "Harry Hole", "Picture-and-story book Railway Guerilla", "The Shadowhunter Chronicles", "Kaiketsu Zorori", "Paddington Bear", "Divergent", "The Inheritance Cycle", "Guin Saga", "Tokugawa Ieyasu", "Ramona", "The Dark Tower", "The Destroyer", "Nontan", "Curious George", "Calico Cat Holmes", "Rich Dad, Poor Dad", "Kurt Wallander", "The Legend of the Ice People", "The Sword of Truth", "Outlander", "Dork Diaries", "Onihei Hankachō", "South Beach Diet", "Ryoma ga Yuku", "Artemis Fowl", "Zukkoke Sanningumi", "Shannara", "Sword Art Online", "Redwall", "Maisy", "Genma Taisen", "The Gate of Youth", "The Foundation Trilogy", "Percy Jackson & the Olympians", "Horrible Histories", "Rainbow Magic", "Morgan Kane", "The Southern Vampire Mysteries", "Doc Savage", "Erast Fandorin", "Dragonriders of Pern", "Vampire Hunter D", "The Hitchhiker's Guide to the Galaxy", "Bridget Jones", "The Riftwar Cycle", "The No. 1 Ladies Detective Agency", "His Dark Materials", "Legend of the Galactic Heroes", "Rainbow Fish"] }

function randomBook(txt) {
    var index = Math.floor((Math.random() * 251))
    return txt['book'][index]
}

var proverbs = [
    "After dinner rest a while, after supper walk a mile.",
    "An apple a day keeps the doctor away.",
    "A drowning man will clutch at a straw.",
    "An onion a day keeps everyone away.",
    "Another pot ! Try the teapot.",
    "As fit as a fiddle.",
    "As hard as nails.",
    "As sick as a dog.",
    "As you go through life, make this your goal, watch the doughnut and not the hole.",
    "Be not a baker if your head is made of butter.",
    "Beauty is but skin deep.",
    "Better late thrive than never do well.",
    "Better to be poor and healthy rather than rich and sick.",
    "Better to wear out than rust out.",
    "Bread never falls but on its buttered side.",
    "Cleanliness is next to Godliness.",
    "Content is health to the sick and riches to the poor.",
    "Don't bite the hand that feeds you.",
    "Drink like a fish, water only.",
    "Early to bed, early to rise, makes you healthy, wealthy & wise.",
    "Fair words butter no cabbage.",
    "Good wine ruins the purse, and bad wine ruins the stomach.",
    "Greediness burst the bag.",
    "Grumbling makes the loaf no larger.",
    "Half a loaf is better than none.",
    "He who drinks a little too much drinks much too much.",
    "He who rises late must trot all day.",
    "His eyes are bigger than his belly.",
    "Hunger is the best sauce.",
    "It is no use crying over spilt milk.",
    "Old friends and old wine are best.",
    "One man's meat is another man's poison.",
    "Ready money is ready medicine.",
    "Sound as a bell.",
    "The nearer the bone the sweeter the meat.",
    "The proof of the pudding is in the eating.",
    "There's many a slip, twixt cup and the lip.",
    "To add insult to injury.",
    "To look as if butter will not melt in his mouth.",
    "Too many cooks spoil the broth.",
    "What can't be cured must be endured.",
    "What you eat today walks and talks tomorrow.",
    "You are what you eat.",
    "You can't have your cake and eat it too.",
    "You can eat an elephant if you do it one mouthful at a time.",
    "You can't unscramble a scrambled egg.",
    "Wondrous is the strength of cheerfulness.",
    "A bird in the hand is worth two in the bush.",
    "A bird makes his nest little by little.",
    "A cat has nine lives.",
    "All cats are grey in the dark.",
    "An elephant never forgets.",
    "An old fox need learn no craft.",
    "Birds of a feather flock together.",
    "Curiosity killed the cat; Satisfaction brought it back.",
    "Curses, like chickens come home to roost.",
    "Don't count your chickens before they hatch.",
    "Every dog has its day.",
    "His bark is louder than his bite.",
    "If you lie down with dogs, you'll get up with fleas.",
    "It's an ill bird that fouls its own nest.",
    "It's an old dog for a hard road.",
    "It's no use closing the stable door, after the horse has bolted.",
    "Kill two birds with the one stone.",
    "Let sleeping dogs lie.",
    "Like a fish out of water.",
    "Never look a gift horse in the mouth.",
    "No sense closing the barn door after the horse has bolted.",
    "Nothing falls into the mouth of a sleeping fox.",
    "Putting the cart before the horse.",
    "Sauce for the goose is sauce for the gander.",
    "The early bird catches the worm.",
    "The leopard does not change his spots.",
    "The sleepy fox catches no chickens.",
    "There's no use in flogging a dead horse.",
    "To scare a bird is not the way to catch it.",
    "What do you expect from a pig, but a grunt?",
    "When a fox hears a rabbit screaming it comes running, but not to help.",
    "While the cats away the mice play.",
    "You can lead a horse to water, but you can't make him drink.",
    "You can't make a silk purse out of a sow's ear.",
    "A fool and his money are soon parted.",
    "A fool in a gown is none the wiser.",
    "A wise man doesn't need advice, and a fool won't take it.",
    "Advice when most needed is least heeded.",
    "Always in a hurry, always behind.",
    "Cheap is dear in the long run.",
    "Confess and be hanged.",
    "Cut off one's nose to spite one's face.",
    "Empty vessels make the most noise.",
    "Facts do not cease to exist because they are ignored.",
    "Fools rush in where angels fear to tread.",
    "He who won't be advised, can't be helped.",
    "If the cap fits, wear it.",
    "In one ear and out the other.",
    "It can't happen here is number one on the list of famous last words.",
    "It is better to stay silent and be thought a fool, than to open one's mouth and remove all doubt.",
    "One of these days is none of these days.",
    "Pride cometh before a fall.",
    "Pride feels no pain.",
    "See nothing, say nothing, know nothing.",
    "The bigger they are the harder they fall.",
    "The fool wanders, the wise man travels.",
    "The hood does not make the monk.",
    "The wise man is deceived once but the fool twice.",
    "There is no fool like an old fool.",
    "Use not today what tomorrow will need.",
    "What's the good of home, if you are never in it?",
    "You cannot lose what you never had.",
    "A bad workman blames his tools.",
    "A good reputation is a fair estate.",
    "All work and no play makes Jack a dull boy.",
    "An idle man is the devil's playfellow.",
    "Diligence is the mother of good luck.",
    "Don't try kicking against the wind.",
    "Everybody must row with the oars he has.",
    "Hard work never did anyone any harm.",
    "If a job is worth doing it is worth doing well.",
    "If at first you don't succeed, try, try again.",
    "If you can't help, don't hinder.",
    "If you see something you like, take it and make it better.",
    "It's all in a days work.",
    "Laziness travels so slowly that poverty soon overtakes it.",
    "Least talk most work.",
    "Many hands make light work.",
    "More haste less speed.",
    "Needs must when the devil drives.",
    "Never put off 'til tomorrow what you can do today.",
    "No life can be dreary when work is a delight.",
    "Not to break is better than to mend.",
    "The devil finds work for idle hands.",
    "The harder you work, the luckier you are.",
    "The hardest work is to do nothing.",
    "Work as if everything depends on me, but pray as if everything depends on God."
]

function randompro(proverbs) {
var index = Math.floor((Math.random() * 134))
return proverbs[index]
}


lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "sc"
document.querySelectorAll("#lang option[value='" + lang + "']")[0].setAttribute("selected", true)

renderText()
random()

