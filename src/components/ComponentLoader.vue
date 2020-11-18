<template>
    <div v-if="this.timeout === false">
        <div v-if="this.loader(this.$route.name, this.module)">
            <div class="lds-ripple"><div></div><div></div></div>
        </div>
        <div v-else>
            <slot v-if="loader"></slot>
        </div>
    </div>
    <div v-else>
        <div class="lds-ripple"><div></div><div></div></div>
    </div>
</template>

<script>
import { environment } from "../../environment"
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Spinner",
    props: ['component', 'module'],

    data() {
        return {
            timeout: true,
            seconds: environment.componentLoader
        }
    },

    computed: {
        ...mapGetters({
            loader: 'loader/exists'
        })
    },

    methods: {
        ...mapActions({
            add: 'loader/add'
        })
    },

    mounted() {
        this.add({component: this.$route.name, module: this.module, loading: true});
    },

    created() {
        setTimeout(() => this.timeout = false, this.seconds);
    }
}
</script>

<style scoped>
.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    background-color: #000;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}
@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}

</style>