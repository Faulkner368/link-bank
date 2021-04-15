<template>
  <section>
    <h1>Test Error component</h1>
    <v-card elevation="7" class="error-btns">
      <v-btn-toggle>
        <v-btn color="success" @click="handleNotFound()">Not Found</v-btn>
        <v-btn color="success" @click="handleBadRequest()">Bad Request</v-btn>
        <v-btn color="success" @click="handleValidationError()"
          >Validation Error</v-btn
        >
        <v-btn color="success" @click="handleServerError()">Server Error</v-btn>
        <v-btn color="success" @click="handleUnauthorised()"
          >Unauthorised</v-btn
        >
        <v-btn color="success" @click="handleBadGuid()">Bad Guid</v-btn>
      </v-btn-toggle>
    </v-card>
    <v-card
      color="#ffcfe0"
      v-if="errors.length > 0"
      elevation="7"
      class="errors"
    >
      <ul class="error-list" v-for="(error, index) in errors" :key="index">
        <li class="list-item">
          <span class="error-text">{{ error }}</span>
        </li>
      </ul>
    </v-card>
    <v-card class="server-errors" color="#ffcfe0" v-if="serverErrorStatusCode > 0">
      <h1>Server Error</h1>
      <h3>{{ serverErrorMessage }}</h3>
      <h5>Stack trace</h5>
      <pre class="server-error">{{ serverErrorDetails }}</pre>
    </v-card>
  </section>
</template>
<script lang="ts" src="./TestError.ts"></script>
