const quotes = [
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
    "Life can only be understood backwards; but it must be lived forwards. - Søren Kierkegaard",
    "If you spend too much time thinking about a thing, you’ll never get it done. - Bruce Lee",
    "Life is like a box of chocolates. You never know what you’re going to get. - Forrest Gump",
    "The quality of your life is directly related to how much uncertainty you can comfortably handle. - Tony Robbins",
    "A happy life consists in the tranquility of mind. - Marcus Tullius Cicero",
    "Almost nothing material is needed for a happy life, for he who has understood existence. - Marcus Aurelius",
    "The realization that life is absurd cannot be an end, but only a beginning. - Albert Camus",
    "Not how long, but how well you have lived is the main thing. - Seneca",
    "Be happy for this moment. This moment is your life. - Omar Khayyam",
    "Difficult and meaningful will always bring more satisfaction than easy and meaningless. - Maxime Lagacé",
    "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. - Marcus Aurelius",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Everything has beauty, but not everyone sees it. - Confucius",
    "Dost thou love life? Then do not squander time, for that is the stuff life is made of. - Benjamin Franklin",
    "It’s a terrible thing, I think, in life, to wait until you’re ready. - Hugh Laurie",
    "Believe that life is worth living and your belief will help create the fact. - William James",
    "Man is made by his belief. As he believes so he is. - Bhagavad Gita",
    "Life is a book you write, not a movie you watch. - Maxime Lagacé",
    "My life is my message. - Mahatma Gandhi",
    "It’s the possibility of having a dream come true that makes life interesting. - Paulo Coelho (The Alchemist)",
    "In the end, it’s not the years in your life that count. It’s the life in your years. - Abraham Lincoln",
    "Sing the song that only you can sing, write the book that only you can write, build the product that only you can build… live the life that only you can live. - Naval Ravikant",
    "Your goal in life is to find out the people who need you the most, to find out the business that needs you the most, to find the project and the art that needs you the most. There is something out there just for you. - Naval Ravikant",
    "Don’t search for the meaning of life. Simply be present for the people you love. - Maxime Lagacé",
    "You’ve gotta dance like there’s nobody watching. - William W. Purkey",
    "You cannot be afraid to disappoint people. You have to live the life you want to live. - David Goggins",
    "Life is nothing but a mirror of your consistent thoughts. - Tony Robbins",
    "The soul becomes dyed with the color of its thoughts. - Marcus Aurelius",
    "Craziness is good. Crazy people are happy, free, they have no hindrance. - Seungsahn",
    "I tell you, in this world being a little crazy helps to keep you sane. - Zsa Zsa Gabor"
];

window.onload = function() {
    displayQuote();
};

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

function newQuote() {
    displayQuote();
}
