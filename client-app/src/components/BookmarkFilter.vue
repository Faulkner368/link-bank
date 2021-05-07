<template>
  <section>
    <v-card elevation="8">
      <v-card-title primary-title>
        <h1>Filter</h1>
      </v-card-title>
      <v-card-text>
        <label for="tag-filter">Filter by tag</label>
          <v-autocomplete
            v-model="selectedTag"
            value=""
            :items="tags"
            dense
          ></v-autocomplete>
        <v-btn v-if="showFilterBtn" @click="filter()" color="rgb(32, 167, 172)">filter</v-btn>
        <v-btn v-if="!showFilterBtn" @click="reset()" color="rgb(240, 42, 115)">reset</v-btn>
      </v-card-text>
      <v-overlay :value="overlay" absolute></v-overlay>
    </v-card>
  </section>
</template>
<script lang="ts" src="./BookmarkFilter.ts"></script>
