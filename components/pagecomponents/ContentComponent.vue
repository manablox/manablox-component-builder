<template>
    <div class="content component">
        <h2 ref="content.headline.value" class="text-4xl" v-html="content.headline.value"></h2>
        <div ref="content.content.value" v-html="content.content.value"></div>
    </div>
</template>

<script>
export default {
    props: {
        type: { type: String, default: '' },
        _id: { type: String, default: '' },
        settings: { type: Object },
        content: { type: Object }
    },

    mounted(){
        
    },

    methods: {
        
    }
}
</script>

<style>

</style>