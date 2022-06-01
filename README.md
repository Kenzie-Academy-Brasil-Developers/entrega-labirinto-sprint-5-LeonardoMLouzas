# Labyrinth

This is a labyrinth game made with JavaScript that renders the walls, the player and the finish from an array.
You can use W,A,S,D or the arrows keys to move the player.
![maze.gif](https://files-kenzie-academy-brasil.s3.amazonaws.com/maze.gif)

This js code represents how the labyrinth was made. Each "W" is a wall, the "S" is the start position and the "F" is the finish line. The empty spaces are the path where the player can move.

```js
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
```

**This project was made for the Kenzie Academy Brasil bootcamp.**
