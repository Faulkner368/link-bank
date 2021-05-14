<template>
  <section class="not-found">
    <v-card class="not-found-card" elevation="8">
      <div class="menu-section">
        <div class="menu-title">
          <h1 class="pa-4">Not Found</h1>
        </div>
        <div class="home-button">
          <v-btn :to="{ name: 'HomePage' }" fab icon class="mr-4">
            <v-icon>home</v-icon>
          </v-btn>
        </div>
      </div>
      <v-img src="@/assets/images/notfound.webp"></v-img>
    </v-card>
  </section>
</template>
<script lang="ts" src="./NotFound.ts"></script>
