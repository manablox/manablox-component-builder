<template>
    <div class="imageselector">
        IMAGE SELECTOR
        
        <input style="width: 100%" v-model="target.value.url" />
        
        <button @click="$emit('input')">ok</button>
    </div>
</template>

<script>
export default {
    props: {
        target: { type: Object }
    }
}
</script>

<style lang="scss">
.imageselector {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(white, 0.7);
    z-index: 1000;
}

</style>