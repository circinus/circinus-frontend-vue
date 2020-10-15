<template>
</template>

<script>
export default {
    props: ['notification'],

    mounted() {
        if(this.notification.type === "success") {
          this['$iziToast'].success({
            title: 'Success!',
            message: this.notification.text,
            icon: "fas fa fa-check-circle",
            balloon: false,
            close: true,
            pauseOnHover: true,
            displayMode: 1
          });
        } else {
          this['$iziToast'].error({
            title: 'Oops..',
            message: this.notification.text,
            icon: "fas fa fa-exclamation-circle",
            balloon: false,
            close: true,
            pauseOnHover: true,
            displayMode: 1
          });

        }
    }
}
</script>