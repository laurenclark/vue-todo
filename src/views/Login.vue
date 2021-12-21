<template>
    <Layout>
        <LoginForm />
    </Layout>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm.vue";
import Layout from "@/components/Layouts/Layout.vue";

export default {
    name: "Login",
    components: {
        LoginForm,
        Layout
    }
};
</script>
