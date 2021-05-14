<template>
  <section>
    <v-card elevation="8">
      <v-card-title primary-title>
        <h1>Controls</h1>
      </v-card-title>

      <div class="controls" v-if="showUpdateBtn">
        <!-- Filter -->
        <div class="filter">
          <v-card-text>
            <label for="tag-filter">Filter by tag</label>
            <v-autocomplete
              v-model="selectedTag"
              value=""
              :items="tags"
              dense
            ></v-autocomplete>
          </v-card-text>
        </div>

        <!-- Sort -->
        <div class="sort">
          <v-card-text>
            <label for="tag-filter">Sort by</label>
            <v-autocomplete
              v-model="selectedProp"
              value=""
              :items="props"
              dense
            ></v-autocomplete>
          </v-card-text>
        </div>
      </div>

      <div class="actions">
        <v-btn v-if="showUpdateBtn" class="update-btn" @click="update()" color="rgb(32, 167, 172)">update</v-btn>
        <v-btn v-if="!showUpdateBtn" class="reset-btn" @click="reset()" color="rgb(240, 42, 115)">reset</v-btn>
      </div>

      <!-- Search -->

    </v-card>
  </section>
</template>
<script lang="ts" src="./BookmarkFilter.ts"></script>
