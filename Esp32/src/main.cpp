#include <Arduino.h>

// Pinos
#define SENSOR_PIN 18
#define RELE_BOMBA_PIN 4
#define RELE_VALVULA_PIN 5

// Variáveis do sensor
volatile int pulsos = 0;
float vazaoAtual = 0;
float litrosTotais = 0;
unsigned long ultimoTempo = 0;

// Estado dos equipamentos
bool bombaLigada = false;
bool valvulaLigada = false;

// Conta os pulsos do sensor
void IRAM_ATTR contarPulso()
{
  pulsos++;
}

// Verifica comandos recebidos pela Serial
void verificarComandos()
{
  if (Serial.available())
  {
    String comando = Serial.readStringUntil('\n');
    comando.trim();

    // Controle da bomba
    if (comando == "LIGAR")
    {
      digitalWrite(RELE_BOMBA_PIN, HIGH);
      bombaLigada = true;
    }

    if (comando == "DESLIGAR")
    {
      digitalWrite(RELE_BOMBA_PIN, LOW);
      bombaLigada = false;
    }

    // Controle da válvula
    if (comando == "LIGAR_VALVULA")
    {
      digitalWrite(RELE_VALVULA_PIN, HIGH);
      valvulaLigada = true;
    }

    if (comando == "DESLIGAR_VALVULA")
    {
      digitalWrite(RELE_VALVULA_PIN, LOW);
      valvulaLigada = false;
    }
  }
}

// Atualiza os dados do sensor
void atualizarSensor()
{
  unsigned long agora = millis();

  // Atualiza a cada 1 segundo
  if (agora - ultimoTempo >= 1000)
  {
    noInterrupts();

    int pulsosLidos = pulsos;
    pulsos = 0;

    interrupts();

    // Calcula a vazão
    vazaoAtual = pulsosLidos / 7.5;

    // Soma o consumo
    litrosTotais += vazaoAtual / 60.0;

    ultimoTempo = agora;

    // Envia dados em JSON
    Serial.print("{");

    Serial.print("\"vazao\":");
    Serial.print(vazaoAtual, 2);

    Serial.print(",\"litros\":");
    Serial.print(litrosTotais, 2);
    // Tirar status 


    Serial.print(",\"bomba\":");
    Serial.print(bombaLigada ? "true" : "false");

    Serial.print(",\"valvula\":");
    Serial.print(valvulaLigada ? "true" : "false");

    Serial.println("}");
  }
}

void setup()
{
  Serial.begin(115200);

  pinMode(SENSOR_PIN, INPUT_PULLUP);

  // Relé da bomba
  pinMode(RELE_BOMBA_PIN, OUTPUT);
  digitalWrite(RELE_BOMBA_PIN, LOW);

  // Relé da válvula
  pinMode(RELE_VALVULA_PIN, OUTPUT);
  digitalWrite(RELE_VALVULA_PIN, LOW);

  // Interrupção do sensor
  attachInterrupt(
    digitalPinToInterrupt(SENSOR_PIN),
    contarPulso,
    RISING
  );
}

// Loop principal
void loop()
{
  verificarComandos();
  atualizarSensor();
}