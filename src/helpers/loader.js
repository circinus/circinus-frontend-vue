import Vue from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(Loading);

let count = 0;
let loader;

function loaderStart() {
    if(count > 0){
        loader.hide();
    }
    count++
    loader = Vue.$loading.show({
        color: "#ACACAC",
        backgroundColor: '#EAF2F5',
        zIndex: 99999,
        opacity: 88,
        transition: "fade",
        width: 94,
        height: 94
    });

}
function loaderEnd() {
    loader.hide();
    count = 0;
}

export default { loaderStart, loaderEnd };
