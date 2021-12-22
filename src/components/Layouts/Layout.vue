<template>
    <TheHeader />
    <main>
        <slot></slot>
    </main>
    <TheFooter />
</template>

<script>
import TheHeader from "@/components/UI/TheHeader";
import TheFooter from "@/components/UI/TheFooter";
export default {
    name: "Layout",
    components: { TheHeader, TheFooter }
};
</script>

<style>
</style>