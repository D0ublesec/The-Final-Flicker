/* Shared game data — used by both manual and game */
window.CLASSES = [
    { name: "THE PRIEST", desc: "When you Banish a Ghost, you may draw 1 card. (Does not trigger on Siphon)." },
    { name: "THE PYROMANIAC", desc: "Discard a Red Card to force a Neighbour to Burn 2 cards. Once per turn; counts as your action." },
    { name: "THE LEECH", desc: "When you Banish a Ghost, you always Siphon it. (Spades are still destroyed)." },
    { name: "THE FUNERAL BELL", desc: "Once per turn, when a player dies, each remaining player Burns 1 card." },
    { name: "THE EXORCIST", desc: "Your 7 (Cleanse) targets 2 Ghosts. You may Siphon ONLY ONE." },
    { name: "THE SKEPTIC", desc: "Immune to 4s (Drain)." },
    { name: "THE USERER", desc: "Discard 1 to see Neighbour's hand and Swap 1 card with theirs. Once per turn; counts as your action." },
    { name: "THE DOOMREADER", desc: "Up to once per turn, you may discard 1 card to change the suit of a ghost in your Shadow." },
    { name: "THE SADIST", desc: "When you play a 3 (Scare), the target discards 2 cards (you blindly pick which; they do not choose)." },
    { name: "THE SEALBINDER", desc: "Ghosts you Haunt cannot be moved (Possess) or returned (Vanish)." },
    { name: "THE WARLOCK", desc: "You can use Face Cards to Haunt (Strength 10) instead of Summon. *Note: 10♠ can banish a J♠, Q♠ and K♠ haunted by you.*" },
    { name: "THE VULTURE", desc: "When a Neighbour dies, add up to 5 random cards from The Dark to your Candle." },
    { name: "THE OCCULTIST", desc: "Your 9 (Possess) can target any player, not just Neighbours. When you Possess a non-neighbour, add 1 card from The Dark to your Candle." },
    { name: "THE WATCHER", desc: "When you cast an Ace (Sight), you see both neighbours' hands (instead of choosing one)." },
    { name: "THE HOARDER", desc: "Hand Limit is 8 (instead of 5)." },
    { name: "THE MIMIC", desc: "Once per game, swap Candles (Decks) with a Neighbour." },
    { name: "THE GRAVEDIGGER", desc: "When a Neighbour dies, add their remaining Candle to yours." },
    { name: "THE SUFFERER", desc: "When taking Damage during The Haunting, you may Draw 1 Card." },
    { name: "THE LICH", desc: "The first time you die, steal top 2 Cards from everyone alive to revive." },
    { name: "THE EXTORTIONER", desc: "When you play a 6 (Claim), steal 2 cards from that player instead of 1." },
    { name: "THE MIME", desc: "When Haunted, discard 1 to redirect it to the other Neighbour." },
    { name: "THE CRYPTKEEPER", desc: "Play a card face-down in your Shadow as a Wall (costs your whole turn—your one action). When someone Haunts you, you may discard one Wall: that ghost and the Wall both go to The Dark (the ghost never lands on your Shadow)." },
    { name: "THE CLOWN", desc: "Ghosts you Haunt cannot be Banished by Numbers, only Face or Cleanse (7)." },
    { name: "THE UNSEEN", desc: "Once per turn, when a neighbour would Haunt you, you may discard 1 card to cancel the Haunt (both cards to The Dark)." },
    { name: "THE VOODOO DOLL", desc: "When you are forced to Burn cards by a Haunt, the attacker must Burn the same amount." },
    { name: "THE CROW", desc: "If a Neighbour Burns a Face Card, you may add it to your Hand." },
    { name: "THE VESSEL", desc: "The first Ghost in your Shadow does not cause you to Burn (you still Burn for the rest)." },
    { name: "THE GATEKEEPER", desc: "You are immune to Ghosts being moved into your Shadow (Mirror/Possess)." },
    { name: "THE SILENCE", desc: "Your actions cannot be interrupted by Salt (5)." },
    { name: "THE ORACLE", desc: "Precognition: Once per turn at the start of your turn (before Burning), you may look at the top card of your Candle and put it on top or on the bottom." },
    { name: "THE PLAGUE", desc: "If a ghost you Haunted is Banished, it moves to the other Neighbour instead of The Dark. You cannot receive ghosts from this effect (they go to The Dark instead)." },
    { name: "THE RAVENOUS", desc: "When you play a 2 (Greed), you may steal 1 card from a Neighbour instead of drawing." },
    { name: "THE MEDDLER", desc: "When you Haunt a neighbour, you may put the top card of their Candle on the bottom of their Candle (you see it; they don't)." },
    { name: "THE REAPER", desc: "When a neighbour Banishes a Ghost from their Shadow without Siphoning, you may add that Ghost to the bottom of your Candle." },
    { name: "THE HEX", desc: "Once per turn, when a Neighbour plays a number card to Haunt you, you may reveal a matching rank from hand to cancel it (both discarded)." },
    { name: "THE INQUISITOR", desc: "As your action, you may discard 1 card to force a Neighbour to reveal their hand. If they reveal a Face Card, they must Burn 2." },
    { name: "THE GRIMOIRE OF REJECTION", desc: "Once per turn, you may write down the name of a card and keep it hidden. When a player plays that card, reveal it and cancel the play. Cannot write down the same card each turn. Does not count as an action." },
    { name: "THE WITNESS", desc: "You may not win the game. If you are alive when only one player remains, they also lose." }
];

window.SUITS = ['♠', '♥', '♣', '♦'];
window.RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

window.getVal = function (r) {
    return { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 }[r] || parseInt(r, 10);
};
