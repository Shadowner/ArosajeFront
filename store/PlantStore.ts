import { defineStore } from "pinia";
import { Plant } from "~/types/PLANT";

export const usePlantsStore = defineStore("plants", () => {
    const plants = ref<Record<string, Plant>>({});

    function add(plant: Plant) {
        plants.value[plant.id] = plant;
    }

    function remove(plant: Plant) {
        delete plants.value[plant.id];
    }

    function get(id: string) {
        return plants.value[id];
    }


    return {
        plants,
        add,
        remove,
        get
    };



})
