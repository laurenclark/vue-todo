<template>
    <Layout>
        <TodoForm />
        <TodoList />
    </Layout>
</template>

<script>
import Layout from "@/components/Layouts/Layout.vue";
import TodoForm from "@/components/Todo/TodoForm.vue";
import TodoList from "@/components/Todo/TodoList.vue";
export default {
    name: "Todos",
    components: {
        Layout,
        TodoForm,
        TodoList
    }
};
</script>
