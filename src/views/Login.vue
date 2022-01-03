<template>
    <BaseLayout>
        <LoginForm />
    </BaseLayout>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import BaseLayout from "@/components/_BaseLayout.vue";

export default {
    name: "Login",
    components: {
        LoginForm,
        BaseLayout
    }
};
</script>
