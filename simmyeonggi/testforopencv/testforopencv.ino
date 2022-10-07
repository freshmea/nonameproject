const int carG = 2;
const int carY = 3;
const int carR = 4;

const int pedR = 5;
const int pedG = 6;


void carGo()
{
  digitalWrite(carG, HIGH);
  digitalWrite(pedR, HIGH);
  digitalWrite(carY, LOW);
  digitalWrite(carR, LOW);
  digitalWrite(pedG, LOW);  
}

void carWait()
{
  digitalWrite(carG, LOW);
  digitalWrite(carY, HIGH);
  digitalWrite(carR, LOW);
}

void carStop()
{
  digitalWrite(carG, LOW);
  digitalWrite(carY, LOW);
  digitalWrite(carR, HIGH);
  digitalWrite(pedR, LOW);
  digitalWrite(pedG, HIGH); 
}

void setup() {
  Serial.begin(9600);
  pinMode(carG, OUTPUT);
  pinMode(carY, OUTPUT);
  pinMode(carR, OUTPUT);
  pinMode(pedR, OUTPUT);
  pinMode(pedG, OUTPUT);

  carGo();
}

void loop() {
  if (Serial.available() > 0){
    if (Serial.read() >= 49){ 
      Serial.println("신호등 바꾸기");
      carWait();
      delay(3000);
      carStop();
      delay(10000);
      carGo();
    }
  }
}
