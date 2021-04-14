<template>
  <section>
    <h1>Test Error component</h1>
    <div>
        <v-btn color="success" @click="handleNotFound()">Not Found</v-btn>
        <v-btn color="success" @click="handleBadRequest()">Bad Request</v-btn>
        <v-btn color="success" @click="handleValidationError()">Validation Error</v-btn>
        <v-btn color="success" @click="handleServerError()">Server Error</v-btn>
        <v-btn color="success" @click="handleUnauthorised()">Unauthorised</v-btn>
        <v-btn color="success" @click="handleBadGuid()">Bad Guid</v-btn>
    </div>
  </section>
</template>
<script lang="ts" src="./TestError.ts"></script>
