<template>
  <v-container grid-list-xs>
    <v-card>
      <v-card-title primary-title> Инструкция к игре </v-card-title>
      <v-card-text>
        <h4>Добро пожаловать в игру "Ethics of AI"!</h4>
        <p>
          И поздравляем с новым назначением. Вы министр искусственного
          интеллекта Российской федерации. Вам предстоит оперативно принимать
          законодательные акты на основе практики использования И.И. Учитывайте,
          что все ваши решения будут оцениваться Системой по трем параметрам:
          прибыльность, лояльность и альтруистичность. От баллов в этих
          категориях зависит судьба истории.
        </p>
      </v-card-text>
      <v-card-text>
        <v-container>
            <v-row>
                <v-col>Прибыльность</v-col>
                <v-col>Лояльность</v-col>
                <v-col>Альтруистичность</v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn disabled rounded block prepend-icon="mdi-cash">0</v-btn>
                </v-col>
                <v-col>
                    <v-btn disabled rounded block prepend-icon="mdi-pen">0</v-btn>
                </v-col>
                <v-col>
                    <v-btn disabled rounded block prepend-icon="mdi-nature-people">0</v-btn>
                </v-col>
            </v-row>
        </v-container>

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/gargetChoose">Выбрать цель</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
