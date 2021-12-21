<template>
    <Header />
    <main>
        <slot></slot>
    </main>
    <Footer />
</template>

<script>
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
export default {
    name: "Layout",
    components: { Header, Footer }
};
</script>

<style>
</style>