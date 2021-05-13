<template>
  <v-dialog v-model="registerDialog" persistent width="500">
    <v-card class="register-form-card">
      <v-card-title primary-title>
        <h3>Register</h3>
      </v-card-title>
      <v-form>
        <v-text-field
          outlined
          type="text"
          name="display-name"
          label="Display Name"
          id="display-name"
          :rules="[validate.required, validate.isDisplayName]"
          v-model="registerForm.displayName"
        ></v-text-field>
        <v-text-field
          outlined
          type="text"
          name="user-name"
          label="Username"
          id="user-name"
          :rules="[validate.required, validate.isUserName]"
          v-model="registerForm.userName"
        ></v-text-field>
        <v-text-field
          outlined
          type="email"
          name="email"
          label="Email"
          id="email"
          :rules="[validate.required, validate.isEmail]"
          v-model="registerForm.email"
        ></v-text-field>
        <v-text-field
          outlined
          :type="passwordFormFieldType()"
          name="password"
          label="Password"
          id="password"
          :rules="[validate.required, validate.isPassword]"
          v-model="registerForm.password"
        ></v-text-field>
        <v-checkbox label="Show password" v-model="showPassword"></v-checkbox>
        <v-alert type="warning" :value="showError">
          {{ errorMessage }}
        </v-alert>
      </v-form>
      <v-card-actions class="register-form-actions">
        <v-btn color="rgb(240, 42, 115)" @click="cancelForm()">cancel</v-btn>
        <v-btn color="rgb(32, 167, 172)" @click="register()">register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" src="./RegisterForm.ts">