<template>
    <Header />
    <main>
        <slot></slot>
    </main>
    <Footer />
</template>

<script>
import Header from "../UI/Header";
import Footer from "../UI/Footer";
export default {
    name: "Layout",
    components: { Header, Footer }
};
</script>

<style>
</style>