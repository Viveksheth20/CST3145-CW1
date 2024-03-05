<template>
    <div>
        <button style="margin-top: 10px;" v-if="testConsole" @click="toggleShowTestConsole">
            <span class="fas fa-text-height"></span>
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
            <button @click="unregisterAllServiceWorkers" class="test-elem"> <span class="fab fa-uniregistry"></span>
                Unregister All ServiceWorkers
            </button>
        </div>
    </div>
</template>