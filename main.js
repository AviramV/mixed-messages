/** Silly messages to make your friends go "huh?!" 
 *  structure will be:
 *  Subject + Verb + a/an/the + Adjective + Noun + Prepositional phrases
 * **/

// Create a list of subjects
const subjects = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];

// Create a list of verbs
const verbs = {
    i: ['am', 'believe there\'s', 'hope you have', 'want', 'think about', 'should drill', 'can\'t stop'],
    you_we_they: ['are', 'believe', 'hope to get', 'want', 'think it is', 'can\'t stop', 'better not forget'],
    he_She_It: ['is', 'believes', 'hopes', 'wants', 'turns out to be', 'really doesn\'t care about', 'called', 'asked for'],
};

// Create a list of articles
const articles = ['a', 'the', 'an']

// Create a list of adjectives
const adjectives = ['big', 'small', 'tall', 'short', 'interesting', 'boring', 'stupid'];

// Create a list of nouns
const nouns = ['dork', 'car', 'computer', 'chair', 'picture', 'phone', 'window'];

// Create a list of prepositional phrases
const prepositions = ['in the house', 'at the store', 'on the wall', 'down the street', 'by the beach', 'on your head', 'around the corner', 'in the sky'];

// Helper function to return random parts for the message
const randomizer = (messagePart) => {
    const num = Math.floor(Math.random() * messagePart.length);
    return messagePart[num]
}

function outputRandomMessage() {
// Randomize every message part
    const randomSubject = randomizer(subjects);
    let randomVerb = '';
    let randomArticle = '';
    const randomAdjective = randomizer(adjectives);
    const randomNoun = randomizer(nouns);
    const randomPreposition = randomizer(prepositions);
// Set correct verb to match subject
    if (randomSubject === 'He' || randomSubject === 'She' || randomSubject === 'It') {
        randomVerb = randomizer(verbs.he_She_It);
    } else if (randomSubject === 'You' || randomSubject === 'We' || randomSubject === 'They') {
        randomVerb = randomizer(verbs.you_we_they);
    } else {
        randomVerb = randomizer(verbs.i);
    }
// Adjectives starting with a vowel get "an" in front of them. All others get "a" or "the"
    if (randomAdjective[0] === 'i' || randomAdjective[0] === 'a' || randomAdjective[0] === 'o' || randomAdjective[0] === 'u' || randomAdjective[0] === 'e') {
        randomArticle = articles[2];
    } else {
        randomArticle = articles[Math.floor(Math.random() * 2 )]
    }
    
    return `${randomSubject} ${randomVerb} ${randomArticle} ${randomAdjective} ${randomNoun} ${randomPreposition}`
   
} 
console.log(outputRandomMessage());