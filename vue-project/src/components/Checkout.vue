<template>
    <div>
        <h2>Your current items in the cart are ({{ totalItemsInTheCart }} in total): </h2>
        <div class="card" v-for="lesson in cart">
            <div class="card-body text-center">
                <p><b>Subject: </b>{{ lesson.subject }}</p>
                <p><b>Location: </b>{{ lesson.location }}</p>
                <p><b>Price: </b>£{{ lesson.price }}</p>
                <img :src="lesson.image" style="width: 50px; margin-left: 130px; padding: 0px;">
                <button @click="removeItem(lesson)">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Checkout",
    props: [
        "cart",
    ],
    methods: {
        removeItem: function (lesson) {
            this.$emit("remove-Item", lesson);
        }

    },
    computed: {
        totalItemsInTheCart: function () {
            return this.cart.length || "";
        },
    }
}
</script>
