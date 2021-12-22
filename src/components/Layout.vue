<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
    name: "Layout",
    components: { TheHeader, TheFooter }
};
</script>

<template>
    <TheHeader />
    <main>
        <slot></slot>
    </main>
    <TheFooter />
</template>

<style>
</style>