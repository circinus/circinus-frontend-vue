<template>
</template>

<script>
export default {
    props: ['notification'],

    mounted() {
        if(this.notification.type === "success") {
          this['$iziToast'].success({
            message: this.notification.text,
          });
        } else {
          this['$iziToast'].error({
            message: this.notification.text,
          });
        }
    }
}
</script>