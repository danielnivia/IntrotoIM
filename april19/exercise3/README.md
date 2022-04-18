Notes on exercise 3

The main challenge for this exercise was making the wind work correctly. After multiple attempts to map the potentiometer value to the wind, we discovered a key error we were having in the code. Particularly we realized that we had to put the conditional statements that affected the wind inside this if statement 

``` 
if (incomingData.length > 0) {
[conditional statements that affected the wind]
}
```

Originally we did not put this and it caused our wind value to be equal to 0 for 4 loops based on what the console was printing with our debugging print statement `print(wind.x, "WIND")` . After this the code worked correctly as the comparison was only made when there was input data from the potentiometer in the arduino. Also because we are dealing with analog and not digital the condition for not moving was set in a range between 24 and 26 rather than equal to 25 as it would have done in digital using only p5js. 


Link to the code in p5js:
https://editor.p5js.org/danielnivia/sketches/CJv3vdImK 

Video showing the circuit working:
https://www.youtube.com/watch?v=NTzk4fesVME

Schematic: 
