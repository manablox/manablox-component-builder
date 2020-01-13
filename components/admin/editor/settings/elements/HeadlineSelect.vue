<template>
    <div class="headlineselect">
        Select the headline type
        <select v-model="setting.value">
            <option v-for="headline in headlines" :key="`headline-${ headline }`" :value="headline">H{{ headline }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        setting: { type: Object }
    },

    data(){
        return {
            headlines: [1, 2, 3, 4, 5]
        }
    },
}
</script>

<style>

</style>