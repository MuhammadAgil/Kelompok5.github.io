let descArduino = [`ARDUINO UNO`, `Arduino Uno adalah board mikrokontroler berbasis ATmega328 (datasheet). Memiliki 14 pin input 
dari output digital dimana 6 pin input tersebut dapat digunakan sebagai output PWM dan 6 pin input analog, 
16 MHz osilator kristal, koneksi USB, jack power, ICSP header, dan tombol reset.`];

let descServo = [`SERVO SG90`, `Motor servo Tower Pro SG90 merupakan sebuah motor servo kecil yang banyak digunakan untuk 
berbagai hobi, seperti hobi remote control, robotic, dll. Aplikasi: Bagi Anda yang ingin membuat 
robot ataupun ber eksperimen menggunakan servo dengan ukuran kecil.`];

let descSensorGerak = [`SENSOR GERAK`, `Sensor gerak adalah salah satu alat yang menggunakan detektor atau sensor untuk 
mendeteksi gerakan proksimal. Sensor gerak terintegrasi dengan sensor dan komponen yang memperingatkan 
pengguna tentang gerakan. Jenis sensor tersebut tergabung dalam perangkat kontrol pencahayaan otomatis, 
sistem keamanan, kamera video, perangkat game, dan lainnya.`];

let descDHT11 = [`DHT11`, `Sensor DHT11 adalah module sensor yang berfungsi untuk mensensing objek suhu dan kelembaban yang 
memiliki output tegangan analog yang dapat diolah lebih lanjut menggunakan mikrokontroler. Module sensor ini tergolong kedalam 
elemen resistif seperti perangkat pengukur suhu seperti contohnya yaitu NTC.`];

let descRelay = [`RELAY 4 CHANNEL`, `Modul relay 4 channel umumnya digunakan sebagai saklar penghubung empat sambungan di dalam suatu 
rangkaian.`];

let descLampuAC = [`LAMPU AC`, `Lampu AC adalah lampu yang memiliki arus listrik AC (alternating current), yaitu listrik yang besarnya 
dan arah arusnya selalu berubah-ubah dan bolak-balik. Arus listrik AC akan membentuk suatu gelombang yang dinamakan dengan gelombang sinus 
atau lebih lengkapnya sinusoida.`];

let descBread = [`BREADBOARD`, `Breadboard adalah board yang digunakan untuk membuat rangkaian elektronik sementara dengan tujuan uji coba 
atau prototipe tanpa harus menyolder. Dengan memanfaatkan breadboard, komponen-komponen elektronik yang dipakai tidak akan rusak dan dapat 
digunakan kembali untuk membuat rangkaian yang lain.`];

let descKabel = [`KABEL JUMPER`, `Kabel jumper adalah suatu istilah kabel yang ber-diameter kecil yang di dalam dunia elektronika digunakan 
untuk menghubungkan dua titik atau lebih dan dapat juga untuk menghubungkan 2 komponen elektronika.`];

let descSolenoid = [`SOLENOID DOORLOCK`, `Selenoid door lock merupakan perangkat elektronik yang prinsip kerjanya menggunakan elektromagnetik. 
Selenoid door lock umumnya menggunakan tegangan kerja 12 volt. Pada kondisi normal perangkat ini dalam kondisi tertutup (mengunci pintu), ketika 
diberi tegangan 12 volt maka kunci akan terbuka.`];

let rPir = [`img/rpir.jpg`, `RANGKAIAN SENSOR PIR`, `1. Rangkailah Sensor PIR seperti pada gambar di atas`];
let rServo = [`img/rservo.jpg`, `RANGKAIAN SERVO SG90`, `2. Rangkailah Servo SG90 seperti pada gambar di atas`];
let rDHT = [`img/rdht.jpg`, `RANGKAIAN DHT11`, `3. Rangkailah DHT11 seperti pada gambar di atas`];
let rSolenoid = [`img/rsolenoid.jpg`, `RANGKAIAN SOLENOID DOORLOCK`, `4. Rangkailah Solenoid Doorlock seperti pada gambar di atas`];
let rLampu = [`img/rlampu.jpg`, `RANGKAIAN LAMPU AC`, `5. Rangkailah Lampu AC seperti pada gambar di atas`];
let comp = [`img/komponen.jpeg`, `RANGKAIAN AKHIR`, `Pastikan rangkaian sesuai dengan gambar di atas`];

let code = [`#define BLYNK_PRINT Serial <button onclick="copy()" type="button" class="btn btn-sm float-end border-primary text-primary btn-light">Copy</button> <br>

#include <ESP8266WiFi.h> 
#include <BlynkSimpleEsp8266_SSL.h> 
#include <DHT.h> 
#include <Servo.h> 

#define DHTPIN D2
#define DHTTYPE DHT11 

char auth[] = "..................."; //Auth dari BLYNK di email anda 
char ssid[] = "...................."; //Nama wifi 
char pass[] = "..................."; //Password wifi 

#define pirPin D5 
int pirValue; 
int pinValue; 

DHT dht(DHTPIN, DHTTYPE); 
BlynkTimer timer; 
Servo servo; 

BLYNK_WRITE(V0) 
{ 
pinValue = param.asInt(); 
} 

BLYNK_WRITE(V3) 
{ 
servo.write(param.asInt()); 
} 


void sendSensor() 
{ 
float h = dht.readHumidity(); 
float t = dht.readTemperature(); 
if (isnan(h) || isnan(t)) { 
Serial.println("Failed to read from DHT sensor!"); 
return; 
} 
Blynk.virtualWrite(V5, h); 
Blynk.virtualWrite(V6, t); 
} 

void setup() 
{ 
Serial.begin(9600); 
//delay(10); 

Blynk.begin(auth, ssid, pass);
 
pinMode(pirPin, INPUT); 

dht.begin(); 

timer.setInterval(100L, sendSensor); 

servo.attach(D10); 
} 

void loop() 
{ 
Blynk.run(); 
Timer.run(); 
getPirValue(); 
} 

void getPirValue(void) 
{ 
pirValue = digitalRead(pirPin); 
if (pinValue == HIGH) 
{if (pirValue==HIGH) 
{ 
Serial.println("Motion detected"); 
Blynk.notify("Motion detected"); 
Blynk.virtualWrite(V1, 1); 
} 
if (pirValue==LOW) 
{ 
Serial.println("Motion undetected"); 
Blynk.virtualWrite(V1, 0); 
}} 
else{ 
if (pirValue==HIGH) 
{ 
Serial.println("Motion detected"); 
Blynk.virtualWrite(V1, 1); 
} 
if (pirValue==LOW) 
{ 
Serial.println("Motion undetected"); 
Blynk.virtualWrite(V1, 0);  
} 
} 
}`];

