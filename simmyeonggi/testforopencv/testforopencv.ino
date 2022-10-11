const int carG = 2;
const int carY = 3;
const int carR = 4;

const int pedR = 5;
const int pedG = 6;
bool signal = false;
char buf[50];

long time = millis() ;
void carGo(bool signal)
{
  if (signal){
    digitalWrite(carG, HIGH);
    digitalWrite(pedR, HIGH);
    digitalWrite(carY, LOW);
    digitalWrite(carR, LOW);
    digitalWrite(pedG, LOW); 
  }else{
    digitalWrite(carG, LOW);
    digitalWrite(carY, LOW);
    digitalWrite(carR, HIGH);
    digitalWrite(pedR, LOW);
    digitalWrite(pedG, HIGH); 
  }
}

void carWait(bool signal)
{
  if (signal){
    digitalWrite(carG, LOW);
    digitalWrite(carY, HIGH);
    digitalWrite(carR, LOW);
    digitalWrite(pedR, HIGH);
    digitalWrite(pedG, LOW);
  }else{
    digitalWrite(carG, LOW);
    digitalWrite(carY, LOW);
    digitalWrite(carR, HIGH);
    digitalWrite(pedR, LOW);
    digitalWrite(pedG, HIGH); 
  }
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

  carWait(signal);
  
  time = millis() ; 
}

void loop() {
  int cnt = 0;
  while (Serial.available() > 0){
    char t = Serial.read();
    if (t == '\n'){
      break;
    }
    if (t == '1'){
      Serial.println(Serial.read());
      signal = true;
    }
    if (t == '0'){
      signal = false;
    }
  }

  
    
  if (time + 3000 > millis()) {
    carWait(signal);
  }else if (time + 6000 > millis()) {
    carStop();
  }else if (time + 9000 > millis()){
    carGo(signal);
     
  }else{
    time = millis() ;
  }
}
//
//  if (Serial.available() > 0){
//    if (Serial.read() >= 49){
//      time = millis() ; 
//      carWait();
//    }
//  
//  if (time + 3000 < millis()) {
//    carStop();
//    }
//  if ((time+3000> millis()) &&(time + 13000 < millis())0 {
//    carGo();
//    time = millis() ;
//    }
