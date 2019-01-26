import axios from "axios";

export default {
    getRandomDog: () => {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getAllBreeds: function() {
        return axios.get("https://dog.ceo/api/breeds/list");
    },
    getBreedImages: function(breed) {
        return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    }
}