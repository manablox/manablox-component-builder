<template>
    <div class="image component">
        <div ref="content.asset.value" class="image__container">
            <img :src="Image" alt="">
        </div>
        
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

    computed: {
        Image(){
            if(!this.content.asset.value) return false
            if(!this.content.asset.value.url) return false

            return this.content.asset.value.url
        }
    }
}
</script>

<style lang="scss">
.image {
    background-image: url('/images/imageloading.gif');
    min-width: 150px;
    min-height: 150px;
    background-size: auto 200%;
    background-repeat: no-repeat;
    background-position: center center;

    &__container {
        position: relative;

        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }

    
}
</style>