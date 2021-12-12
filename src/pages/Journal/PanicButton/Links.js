let linksArray = [
    'https://www.theatlantic.com/health/archive/2014/02/playing-tetris-can-reduce-urges-to-eat-smoke-drink/284056/',
    'https://i.imgur.com/bbWSvJx.jpg',
    'https://i.postimg.cc/mk0JvWgy/Difficult-before-Easy.jpg',
    'https://i.postimg.cc/3R2pHP7F/End-of-Comfort-Zone.png',
    'https://i.postimg.cc/jqZ2Js8J/Cold-Shower-Benefits.jpg',
    'https://i.postimg.cc/23RK5pBj/If-You-Can-Dream-It.jpg',
    'https://www.smartrecovery.org/5-ways-to-deal-with-urges-and-cravings/',
    'https://www.youtube.com/watch?v=wnHW6o8WMas',
    'https://i.postimg.cc/c40zPWZT/Work-Hard-in-Silence.jpg',
    'https://i.postimg.cc/tRtS3cP6/Lose-Sight-of-the-Shore.jpg'
]

export function getRandomLink() {
    let randomIndex = Math.floor(Math.random() * linksArray.length);

    return linksArray[randomIndex];
}