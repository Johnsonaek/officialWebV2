// import Axios from "axios";


// Vue.prototype.$axios = Axios;

function http(data) {
    this.$axios({
            method: data.method,
            url: data.url,
            data: data.data
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })



}
export default http;