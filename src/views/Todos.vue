<template>
    <Layout>
        <TodoForm />
        <TodoList />
    </Layout>
</template>

<script>
import TodoForm from "@/components/Todo/TodoForm.vue";
import TodoList from "@/components/Todo/TodoList.vue";
export default {
    name: "Todos",
    components: {
        TodoForm,
        TodoList
    }
};
</script>
