<script>
export default {
    name: "TodoForm",
    data() {
        return {
            todoText: "",
            todoDate: new Date()
        };
    }
};
</script>

<template>
    <input :text="todoText" type="text" placeholder="Wash the dishes" />
    <input :date="todoDate" type="date" />
    <button>Add Todo</button>
</template>

<style>
</style>