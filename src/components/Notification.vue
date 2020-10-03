<template>
</template>

<script>
export default {
    props: ['notification'],

    mounted() {
        this['$iziToast'].success({
            message: this.notification.text,
        });
    }
}
</script>