/* Shared game data — used by both manual and game */
window.CLASSES = [
    { name: "PRIEST", desc: "When you Banish a Ghost, Draw 1 Card. (Does NOT trigger on Siphon)." },
    { name: "PYROMANIAC", desc: "Discard a Red Card to force a Neighbour to Burn 2 cards. Once per turn; counts as your action." },
    { name: "LEECH", desc: "When you Banish a Ghost, you always Siphon it. (Spades are still destroyed)." },
    { name: "SURVIVOR", desc: "If you have 1 or fewer cards in Hand, take no damage during The Haunting." },
    { name: "EXORCIST", desc: "Your 7 (Cleanse) targets 2 Ghosts. You may Siphon ONLY ONE." },
    { name: "SKEPTIC", desc: "Immune to 4s (Drain)." },
    { name: "TRADER", desc: "Discard 1 to see Neighbour's hand and Swap 1 card with theirs. Once per turn; counts as your action." },
    { name: "FATALIST", desc: "Discard 1 Card to change the Suit of a Ghost in YOUR Shadow." },
    { name: "SADIST", desc: "When you play a 3 (Scare), you blindly pick which card(s) the target discards (the target does not choose)." },
    { name: "BINDER", desc: "Ghosts you Haunt cannot be moved (Possess) or returned (Vanish). Joker (BOO!) has no effect on a player whose Shadow contains only ghosts you Haunted." },
    { name: "WARLOCK", desc: "You can use Face Cards to Haunt (Strength 10) instead of Summon. *Note: 10♠ can banish a J♠, Q♠ and K♠ haunted by you.*" },
    { name: "VULTURE", desc: "When a Neighbour dies, add up to 5 random cards from The Dark to your Candle." },
    { name: "OCCULTIST", desc: "Your 9 (Possess) can target any player, not just Neighbours. Once per turn, the first time you Possess a non-neighbour: add 1 card from The Dark to your Candle." },
    { name: "SEER", desc: "Once per turn, you may look at the top card of any player's Candle and choose to leave it on top or put it on the bottom. Counts as your action." },
    { name: "HOARDER", desc: "Hand Limit is 8 (instead of 5)." },
    { name: "MIMIC", desc: "Once per game, swap Candles (Decks) with a Neighbour." },
    { name: "GRAVEDIGGER", desc: "When a Neighbour dies, add their remaining Candle to yours." },
    { name: "MARTYR", desc: "When taking Damage during The Haunting, you may Draw 1 Card." },
    { name: "LICH", desc: "The first time you die, steal top 2 Cards from everyone alive to revive." },
    { name: "JUDGE", desc: "When you play a 6 (Claim), steal 2 cards from that player instead of 1." },
    { name: "JESTER", desc: "When Haunted, discard 1 to redirect it to the other Neighbour." },
    { name: "ARCHITECT", desc: "Play a card face-down in your Shadow as a Wall (costs your whole turn—your one action). When someone Haunts you, you may discard one Wall: that ghost and the Wall both go to The Dark (the ghost never lands on your Shadow)." },
    { name: "CLOWN", desc: "Ghosts you Haunt cannot be Banished by Numbers, only Face or Cleanse (7)." },
    { name: "PHANTOM", desc: "Once per turn, when a neighbour would Haunt you, you may discard 1 card to cancel the Haunt (both cards to The Dark)." },
    { name: "DOLL", desc: "When you are forced to Burn cards by a Haunt, the attacker must Burn the same amount." },
    { name: "CROW", desc: "If a Neighbour Burns a Face Card, you may add it to your Hand." },
    { name: "VESSEL", desc: "The first Ghost in your Shadow does not cause you to Burn (you still Burn for the rest)." },
    { name: "WARDEN", desc: "You are immune to Ghosts being moved into your Shadow (Mirror/Possess)." },
    { name: "SILENCE", desc: "Your actions cannot be interrupted by Salt (5)." },
    { name: "ORACLE", desc: "Precognition: Once per turn at the start of your turn (before Burning), you may look at the top card of your Candle and put it on top or on the bottom." },
    { name: "PLAGUE", desc: "If a Ghost you Haunted is Banished, it moves to the other Neighbour instead of The Dark." },
    { name: "SIREN", desc: "When you play a 2 (Greed), you may Steal 1 card from a Neighbour instead of Drawing." },
    { name: "SHADE", desc: "When you Haunt a neighbour, you may put the top card of their Candle on the bottom of their Candle (you see it; they don't)." },
    { name: "REAPER", desc: "When a neighbour Banshes a Ghost from their Shadow without Siphoning, you may add that Ghost to the bottom of your Candle." },
    { name: "HEX", desc: "Once per turn, when a Neighbour plays a number card to Haunt you, you may reveal a matching rank from hand to cancel it (both discarded)." }
];

window.SUITS = ['♠', '♥', '♣', '♦'];
window.RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

window.getVal = function (r) {
    return { 'A': 1, 'J': 11, 'Q': 12, 'K': 13 }[r] || parseInt(r, 10);
};
