<template>
    <v-dialog v-model="loginDialog" persistent width="500">
      <v-card class="login-form-card">
        <v-card-title primary-title>
          <h3>Login</h3>
        </v-card-title>
        <v-form>
          <v-text-field
            outlined
            type="email"
            name="email"
            label="Email"
            id="email"
            :rules="[validate.required, validate.isEmail]"
            v-model="loginForm.email"
          ></v-text-field>
          <v-text-field
            outlined
            :type="passwordFormFieldType()"
            name="password"
            label="Password"
            id="password"
            :rules="[validate.required, validate.isPassword]"
            v-model="loginForm.password"
          ></v-text-field>
          <v-checkbox label="Show password" v-model="showPassword"></v-checkbox>
          <v-alert type="warning" :value="showError">
            {{ errorMessage }}
          </v-alert>
        </v-form>
      <v-card-actions class="login-form-actions">
        <v-btn color="rgb(240, 42, 115)" @click="cancelForm()">cancel</v-btn>
        <v-btn color="rgb(32, 167, 172)" @click="login()">login</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script lang="ts" src="./LoginForm.ts">