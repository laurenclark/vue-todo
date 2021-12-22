<template>
    <AppHeader />
    <main>
        <slot></slot>
    </main>
    <AppFooter />
</template>

<script>
import AppHeader from "@/components/UI/AppHeader";
import AppFooter from "@/components/UI/AppFooter";
export default {
    name: "Layout",
    components: { AppHeader, AppFooter }
};
</script>

<style>
</style>