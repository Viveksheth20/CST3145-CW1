<template>
    <div>
        <h1 id="page">Welcome to the Product List Page</h1>
        <div class="card" v-for="lesson in lessons">
            <div class="card-body text-center">
                <p><b>Subject: </b>{{ lesson.subject }}</p>
                <p><b>Location: </b>{{ lesson.location }}</p>
                <p><b>Price: </b>£{{ lesson.price }}</p>
                <p><b>spaces: </b>{{ lesson.spaces }}</p>
            </div>
            <img :src="lesson.image" style="width: 50px; margin-left: 130px; padding: 0px;">
            <button disabled='disabled' v-if="lesson.spaces === 0"><b>Add to Cart</b></button>
            <button @click="addItem(lesson)" v-if="lesson.spaces !== 0"><b>Add to Cart</b></button>
            <span v-if="lesson.spaces < 6">
                Only {{ lesson.spaces }} left!
            </span>
            <span v-else-if="lesson.spaces > 5">
                buy now
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductList",
    props: [
        "lessons",
    ],
    methods: {
        addItem: function (lesson) {
            this.$emit("add-item", lesson);
        },
    },
}
</script>
