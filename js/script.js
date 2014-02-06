function Card(title, description, example, image) {
    this.title = title;
    this.description = description;
    this.example = example;
    this.image = image;
}

function Deck(){
    this.cards = [];
}

Deck.prototype.draw = function () {
    var randomCard = this.cards[Math.floor(Math.random()*this.cards.length)];
    return randomCard;
}

// FIRST CARD
var title1 = "Social Proof";
var description1 = "We tend to follow the patterns of";
    description1 += " similar others in new or unfamiliar situations.";
var example1 = "To put people at ease or guide a decision find creative";
    example1 += " ways to show social activity. This can be in the form";
    example1 += " of stats (favorited by, number of views, comments), good";
    example1 += " positive reviews/testimonials, or by providing visibility";
    example1 += " into the actions or outcomes of other users’ behaviors.";
var image1 = "http://getmentalnotes.com/assets/cards/curiosity-illus.jpg";

// SECOND CARD
var title2 = "Curiosity";
var description2 = "When teased with a small bit of interesting information,";
    description2 += " people will want to know more!";
var example2 = "When—and what—can you hold back? Reveal just enough";
    example2 += " to arouse interest, then tease someone into taking the next";
    example2 += " step. You can also arouse interest by doing something";
    example2 += " unusual and unexpected—people will stick around long enough";
    example2 += " to determine what’s going on. Puzzles are similarly intriguing."
var image2 = "http://getmentalnotes.com/assets/cards/curiosity-illus.jpg";

// THIRD CARD
var title3 = "Pattern Recognition";
var description3 = "Our brains seek ways to organize and simplify complex";
    description3 += " information, even when there is no pattern";
var example3 = "What information can you display in a way that arouses";
    example3 += " curiosity and encourages pattern-seeking behavior? Patterns";
    example3 += " can be found within a single page (a list of albums, for";
    example3 += " example) or spread across a site (a curious icon set or color";
    example3 += " coding that make sense once the pattern is discovered).";
var image3 = "http://getmentalnotes.com/assets/cards/curiosity-illus.jpg";

// FOURTH CARD
var title4 = "Peak-End Rule";
var description4 = "We judge our past experiences almost entirely by their";
    description4 += " peaks (pleasant and unpleasant) and how they ended.";
var example4 = "What are the peaks and endings in the customer experience";
    example4 += " you’ve designed? Peaks may be the core value you provide or";
    example4 += " a small surprise thrown into the user journey. Endpoints";
    example4 += " can be obvious (order fulfillment from an e-commerce site)";
    example4 += " or more subtle (such as a friendly or funny registration";
    example4 += " confirmation page). Identify and improve these.";
var image4 = "http://getmentalnotes.com/assets/cards/curiosity-illus.jpg";

// create new instance of card
var card1 = new Card(title1, description1, example1, image1);
var card2 = new Card(title2, description2, example2, image2);
var card3 = new Card(title3, description3, example3, image3);
var card4 = new Card(title4, description4, example4, image4);

// create deck
var deck = new Deck();

// add card to deck
deck.cards.push(card1);
deck.cards.push(card2);
deck.cards.push(card3);
deck.cards.push(card4);

deck.draw();
