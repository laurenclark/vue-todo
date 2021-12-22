<template>
    <Layout>
        <TodoForm />
        <TodoList />
    </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
export default {
    name: "Todos",
    components: {
        Layout,
        TodoForm,
        TodoList
    }
};
</script>
