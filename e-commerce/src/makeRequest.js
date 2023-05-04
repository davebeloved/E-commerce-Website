import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/';

const apiToken = 'c9bf06e4cc5c0710116fb0a0a34822c0b3c006e49dec836873e33760c1c683afd1e5f01d689c4060f79d779ca1b4530c756acbf7b717e1e636a7ddc2ef73152e4b09fa8547d84bca18ef38f3e2fec8e65ae9386bdea5306aff03f43c0fd9cb4bf16b2e03226c82667657293c2cd5b90e0c2277b205716b4e6fe67dbf62562e4c'

export const makeRequest = axios.create({

    baseUrl :  apiUrl,
    headers : {
        Authorization : "bearer" + apiToken
      }
})