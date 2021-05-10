// Bank some good vibes options
const vibes = [
  " ... and you are awesome!",
  " ... have a wonderful day!",
  " ... and you've got this!",
  " ... and so is this puppy! &#128057;"
]

// choose a random good vibe 
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

// display a good vibe 
document.querySelector(".vibe").append(vibe)