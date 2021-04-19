<template>
    <section class="home">
        <div class="home-welcome">
            <h1 class="homepage-title">
                <v-icon color="white">bookmarks</v-icon>
                LinkBank
            </h1>
            <div v-if="!isLoggedIn" class="logged-in">
                <v-btn
                    outlined
                    :to="{ name: 'Bookmarks' }"
                    color="white"
                >bookmarks</v-btn>
            </div>
            <div v-if="isLoggedIn" class="not-logged-in">
                <v-btn
                    outlined
                    @click="loginDialog()"
                    color="white"
                >login</v-btn>
                <v-btn
                    outlined
                    @click="registerDialog()"
                    color="white"
                >register</v-btn>
            </div>
        </div>
        <LoginForm />
        <RegisterForm />
    </section>
</template>
<script lang="ts" src="./HomePage.ts"></script>
