**Led Brightness**

For this part of the project, we used the minimal example that was given in the class. The main changes that were done were to enable the code to be able to change the brightness of the LED instead of turning the LED off and then on that was in the previous code. The following parts of the code made it possible:

In the p5js script, modify the code such that the outgoing data is the value of the mouseX from the rectangle.

```
if (mouseIsPressed) {
    outgoingData = mouseX;
  }
```

In the arduino code, use analogWrite instead of the digitalWrite to take the outgoing data value ( ranges from 0 to 200 ) and use it as a input bit for the LED. Previously when digitalWrite was used, the incoming range was translated into 0 and 1, which helped in turning LED off and on. Now, we take this input value as a integer 0<x<200 and use it as such without any translation, which enables us to control brightness.

```analogWrite(LED_PIN, inByte);```

**Video**

https://vimeo.com/manage/videos/700250230


**Link to the p5js code:**

https://editor.p5js.org/danielnivia/sketches/Irs8CjfNZ

**Photos**

![exercise2_arduinop5](https://user-images.githubusercontent.com/78901786/163876454-9a971843-f2dd-4c33-b6a6-183baf17e6b9.jpeg)


**Schematic**

![Schematic2](https://user-images.githubusercontent.com/78901786/163876477-bd50a2ee-ceba-423c-9687-2ef17595d296.png)


