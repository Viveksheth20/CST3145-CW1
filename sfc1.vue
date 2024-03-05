<template>
    <div class="hello">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'welcome to Your Vue.js app'
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>