void setup() {
  Serial.begin(9600);

}
void loop() {
    // write the outgoing byte:

    int sensorValue = analogRead(A0);
    Serial.print(sensorValue);
    Serial.print(",");
    //make the y-position constant middle
    Serial.print(240);
    Serial.println();

}
