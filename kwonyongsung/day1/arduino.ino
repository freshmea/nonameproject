const int carG = 2;
const int carY = 3;
const int carR = 4;

const int pedR = 5;
const int pedG = 6;


void setup() {
  Serial.begin(9600);
  pinMode(carG, OUTPUT);
  pinMode(carY, OUTPUT);
  pinMode(carR, OUTPUT);
  pinMode(pedR, OUTPUT);
  pinMode(pedG, OUTPUT);

  digitalWrite(carG, HIGH);
  digitalWrite(pedR, HIGH);
  digitalWrite(carY, LOW);
  digitalWrite(carR, LOW);
  digitalWrite(pedG, LOW);
  
}

void loop() {
  /*
  if(보행자가 감지되면) {
    
  }
  */
}