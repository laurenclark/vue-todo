<script>
import TodoListItem from "./TodoListItem.vue";
export default {
    name: "TodoForm",
    components: {
        TodoListItem
    },
    data() {
        return {
            todos: [...new Array(4)]
        };
    }
};
</script>

<template>
    <ul v-for="(todo, index) of todos" :key="index">
        <TodoListItem :todo="todo" />
    </ul>
</template>

<style>
</style>