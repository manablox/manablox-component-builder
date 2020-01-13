<template>
    <div class="contentblock component">
        <component :is="`h${ settings.headline.value }`" ref="content.headline.value" class="text-headline-primary" v-html="content.headline.value"></component>
        <div ref="content.content.value" class="text-primary" v-html="content.content.value"></div>
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
}
</script>

<style lang="scss">
.contentblock {
    padding: 30px 0;
}
</style>