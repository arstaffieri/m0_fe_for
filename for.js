// As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// running `node <filepath>`. If you are in this directory, you'd run `node for.js`.

// Challenge 1
// Use a for statement to log to the console all even numbers between 25 and 75.
for(i=25; i<= 75; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}


// Challenge 2
// Use a for statement to log to the console a complete sentence stating the weather using the Array below:
var weather_options = ["sunny", "snowy", "freezing", "partly cloudy", "drizzly"]
for (var i = 0; i < weather_options.length; i++){
  console.log( "I love when the weather is " + weather_options[i]);
}

// Challenge 3
// Use a for statement to log to the console only the words that are exactly 3 characters in length
var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]
for (var i = 3; i = words.length;){
  console.log(words[i]);
}
// This doesn't work and creates an infinate loop that crashes my terminal
//when I try to run it. Unfortunately, everyone else has stopped working for today
//and the study room is closed. I cannot figure out what I am doing wrong here.
// I am going to ask as soon as I can find someone who can answer me but, for now,
//I know it's wrong.
// 📹 Record yourself live-coding and talking through any ONE of the challenges.
  // The recording doesn't have to be the first time you are solving the problem.
  // Use technical vocabulary and explain each part to demonstrate your understanding!
  // Share the link to your video in your small group channel.
