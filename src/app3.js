const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    // Use map method to create player objects
    let detailedPlayers = players.map((player, index) => {
        let type = index % 2 === 0 ? 'hero' : 'villain';
        return {
            name: player,
            strength: getRandomStrength(),
            img: `images/super-${index + 1}.png`, // sequential image URL
            type: type
        };
    });
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // Use chaining of Array methods - filter, map, and join
    let fragment = players
        .filter(player => player.type === type)
        .map(player => `<div class="player">
                            <img src="${player.img}">
                            <div class="name">${player.name}</div>
                            <div class="strength">${player.strength}</div>
                        </div>`)
        .join('');
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}