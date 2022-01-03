<script>
import BaseHeader from "@/components/_BaseHeader";
import BaseFooter from "@/components/_BaseFooter";
export default {
    name: "BaseLayout",
    components: { BaseHeader, BaseFooter }
};
</script>

<template>
    <BaseHeader />
    <main>
        <slot></slot>
    </main>
    <BaseFooter />
</template>

<style>
</style>