<template>
    <BaseLayout>
        <TodoForm />
        <TodoList />
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/_BaseLayout.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
export default {
    name: "Todos",
    components: {
        BaseLayout,
        TodoForm,
        TodoList
    }
};
</script>
