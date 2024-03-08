<template>
    <div>
        <button style="margin-top: 10px;" v-if="testConsole" @click="toggleShowTestConsole">
            <font-awesome-icon icon="fa-solid fa-text-height"></font-awesome-icon>
            Test Console
        </button>
        <div v-if="testConsole && showTestConsole" class="test-console">
            <button @click="saveProductToDB" class="test-elem">
                <span class="fas fa-save"></span>
                Test Save a Product to the DB
            </button>
            <button @click="deleteAllCaches" class="test-elem"> <span class="fas fa-trash"></span>
                Delete All Caches
            </button>
            <button @click="reloadPage" class="test-elem"> <span class="fas fa-sync"></span>
                Reload Page
            </button>
            <strong class="test-elem">HTTPS Test: </strong>
            <a v-bind:href="serverURL" target="_blank">link</a>
            <button @click="unregisterAllServiceWorkers" class="test-elem"> <font-awesome-icon
                    icon="fab fa-uniregistry"></font-awesome-icon>
                Unregister All ServiceWorkers
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test_console',
    data() {
        return {
            serverURL: "https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/lessons",
            testConsole: true,
            showTestConsole: false,
        }
    },
    props: [
        "lessons",
    ],
    methods: {
        saveProductToDB() {
            const newProduct = {
                "subject": "Movie Maker",
                "location": "123 Oakwook Gardens, Cityville",
                "price": 95,
                "spaces": 15,
                "image": "images/pg.png"
            }

            //set the url to your server and route
            fetch("https://project-env.eba-ucw3xqhp.eu-west-2.elasticbeanstalk.com/lessons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            }).then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
            }).then(json => {
                console.log("Success: " + json.acknowledged);
                alert('Order submitted!')
                this.lessons.push(newProduct);
            }).catch(error => {
                console.error('Error submitting order:', error);
            });

        },

        reloadPage() {
            window.location.reload();
        },

        unregisterAllServiceWorkers() {
            navigator.serviceWorker.getRegistrations().then(function (registrations) {
                for (let registration of registrations) { registration.unregister() }
            });
            console.log("ServiceWorkers Unregistered");
        },

        deleteAllCaches() {
            caches.keys().then(function (names) { for (let name of names) caches.delete(name); });
            console.log("All Caches Deleted");
        },
        toggleShowTestConsole() {
            this.showTestConsole = !this.showTestConsole;
        },
    }
}
</script>
