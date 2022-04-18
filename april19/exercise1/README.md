
**Ellipse in p5**

**Description**
For this project task, we used potentiometer on arduino to make the ball in p5 move on the horizontal axis in the middle of the screen. We started with looking into the prof. Aaron's code example as our idea was to start upgrading this code example on minimal communication, since it was the most suited for this project task.

**Link** 
https://editor.p5js.org/ah4601/sketches/92A5giAhI

**Problems**
 The most time was spent figuring out why there is no incoming data coming to p5. We comapred everything in the code - all functions, examples, line by line. However, the discovery came from the most unexpected place - the serial port name. Although we changed it to the correct partitioning 'usbmodem14101', but there was another change we needed to make: from /cu to /tty:

old: 
```
let portName = "/dev/cu.usbmodem14101";
```

updated:
```
let portName = "/dev/tty.usbmodem14101";
```

Basically, the portName that was previously used had a different path to the portName. We tried updating serialConnection, listed and analyzed all information coming from the port.

**Video**
https://vimeo.com/manage/videos/700271946

**Photo**
![exercise1_arduinop5](https://user-images.githubusercontent.com/78901786/163875279-565f4248-72ac-4976-9010-83227fa253e7.jpg)

**Schematic**

![Schematic1](https://user-images.githubusercontent.com/78901786/163875312-1fef0b9f-59c5-4925-ae22-9f74d0cc11e2.png)

