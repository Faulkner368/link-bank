<template>
  <section class="not-found">
    <v-row>
      <v-col cols="2" lg="2" md="2" sm="1"></v-col>
      <v-col cols="12" lg="8" md="8" sm="10">
        <v-card elevation="8">
          <v-row>
            <v-col cols="9">
              <h1 class="pa-4">Not Found</h1>
            </v-col>
            <v-col cols="2" class="text-right">
              <v-btn :to="{ name: 'HomePage' }" fab icon class="mr-4">
                <v-icon>home</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-img src="@/assets/images/notfound.webp"></v-img>
        </v-card>
      </v-col>
      <v-col cols="4" lg="4" md="2" sm="1"></v-col>
    </v-row>
  </section>
</template>
<script lang="ts" src="./NotFound.ts"></script>
