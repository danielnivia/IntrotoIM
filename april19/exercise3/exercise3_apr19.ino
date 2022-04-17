// variables and constants

//const int analogInput = A0; // for the pot.

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
    digitalWrite(LED_PIN, inByte); // so that it is high or low 
    //analogWrite(LED_PIN, inByte);


    //COMMENTED OUT BECAUSE THEY WERE NOT USED IN THE CODE
    //Left there just in case there is an issue
    //int switchValue = digitalRead(SWITCH_PIN);
    //Serial.println(switchValue);

    //int sensorValue = analogRead(A0);
    //Serial.print(sensorValue); 
    Serial.println(analogRead(A0));
  }
}
