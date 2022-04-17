//
//   Arduino code for minimal communication 
//   with a P5.js sketch using handshaking
//


const int LED_PIN = 5; //13; change to the PWM used in Jack's Google Doc example
const int SWITCH_PIN = 3; //7; change to the PWM used in Jack's Google Doc example

void setup() {
  Serial.begin(9600);
  pinMode(SWITCH_PIN, OUTPUT);
  pinMode(LED_PIN, OUTPUT);

  // wait until the other side responds
  while (Serial.available() <= 0) {
    Serial.println("1"); // send a starting message
    delay(300);
  }
}

void loop() {
  while (Serial.available() > 0) {

    int inByte = Serial.read();
    //digitalWrite(LED_PIN, inByte);
    analogWrite(LED_PIN, inByte);

    int switchValue = digitalRead(SWITCH_PIN);
    Serial.println(switchValue);
  }
}
