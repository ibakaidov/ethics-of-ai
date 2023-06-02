<template>

  <v-container grid-list-xs>
    <v-card>
      <v-card-media src="src" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Ethics of AI</h3>
          <!-- <div>  </div> -->
        </div>
      </v-card-title>
      <v-card-text align="center">
        
        <v-img width="30%" src="@/assets/intro.png" >

      <v-overlay
        activator="parent"
        location-strategy="static"
      >
      <v-img src="@/assets/intro.png" />
      
      </v-overlay>
        </v-img>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>   
        <v-btn flat color="primary">Смириться</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

</template>

<script lang="ts" setup>

</script>
