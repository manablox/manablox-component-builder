<template>
    <div class="app">
        <ComponentEditor :pagecomponents="pagecomponents" />
    </div>
</template>

<script>

const GetRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
export default {
    asyncData(){
        return {
            pagecomponents: [
                
            ]
        }
    }
}
</script>

<style>

</style>