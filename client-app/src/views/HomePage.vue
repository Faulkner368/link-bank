<template>
    <section class="home">
        <div class="home-welcome">
            <h1>Welcome to LinkBank</h1>
            <v-btn :to="{ name: 'Bookmarks' }" color="success">bookmarks</v-btn>
        </div>
        <LoginForm />
    </section>
</template>
<script lang="ts" src="./HomePage.ts"></script>
