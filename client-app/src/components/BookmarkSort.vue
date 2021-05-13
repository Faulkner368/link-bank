<template>
  <section>
    <v-card elevation="8" class="sort-card">
      <v-card-title primary-title>
        <h1>Sort</h1>
      </v-card-title>
      <v-card-text>
        <label for="tag-filter">Sort by</label>
          <v-autocomplete
            v-model="selectedProp"
            value=""
            :items="props"
            dense
          ></v-autocomplete>
        <v-btn @click="sort()" color="rgb(32, 167, 172)">sort</v-btn>
      </v-card-text>
      <v-overlay :value="overlay" absolute></v-overlay>
    </v-card>
  </section>
</template>
<script lang="ts" src="./BookmarkSort.ts"></script>
