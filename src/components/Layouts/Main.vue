<template>
    <Header />
    <main>
        <slot></slot>
    </main>
    <Footer />
</template>

<script>
export default {
    name: "Main",
    components: ["Header", "Footer"]
};
</script>

<style>
</style>