/** Silly messages to make your friends go "huh?!" 
 *  structure will be:
 *  Subject + Verb + a/an/the + Adjective + Noun + Prepositional phrases
 * **/

// Create a list of subjects
const subjects = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];

// Create a list of verbs
const verbs = {
    i: ['am', 'believe', 'hope', 'want', 'think'],
    you_we_they: ['are', 'believe', 'hope', 'want', 'think'],
    he_She_It: ['is', 'believes', 'hopes', 'wants', 'thinks'],
};

// Create a list of articles
const articles = ['a', 'an', 'the']

// Create a list of adjectives
const adjectives = ['big', 'small', 'tall', 'short', 'interesting', 'boring', 'stupid'];

// Create a list of nouns
const nouns = ['dork', 'car', 'computer', 'chair', 'picture', 'phone', 'window'];

// Create a list of prepositional phrases
const prepositions = ['in the house', 'at the store', 'on the wall', 'down the street', 'by the beach', 'on your head', 'around the corner', 'in the sky'];

const randomizer = (messagePart) => {
    const num = Math.floor(Math.random() * messagePart.length);
    return messagePart[num]
}
function outputRandomMessage() {
    const randomSubject = randomizer(subjects);
    let randomVerb = '';
    const randomAdjective = randomizer(adjectives);
    const randomNoun = randomizer(nouns);
    const randomPreposition = randomizer(prepositions);
    if (randomSubject === 'He' || randomSubject === 'She' || randomSubject === 'It') {
        randomVerb = randomizer(verbs.he_She_It);
    } else if (randomSubject === 'You' || randomSubject === 'We' || randomSubject === 'They') {
        randomVerb = randomizer(verbs.you_we_they);
    } else {
        randomVerb = randomizer(verbs.i);
    }
    
   //console.log(randomSubject);
   //console.log(randomVerb)
} 
outputRandomMessage();