let linksArray = [
    'https://www.theatlantic.com/health/archive/2014/02/playing-tetris-can-reduce-urges-to-eat-smoke-drink/284056/',
    'https://i.imgur.com/bbWSvJx.jpg',
    'https://i.postimg.cc/mk0JvWgy/Difficult-before-Easy.jpg'
]

export function getRandomLink() {
    let randomIndex = Math.floor(Math.random() * linksArray.length);

    return linksArray[randomIndex];
}