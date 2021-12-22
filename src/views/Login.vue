<template>
    <Layout>
        <LoginForm />
    </Layout>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import Layout from "@/components/Layout.vue";

export default {
    name: "Login",
    components: {
        LoginForm,
        Layout
    }
};
</script>
