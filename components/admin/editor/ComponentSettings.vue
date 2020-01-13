<template>
    <div :class="`componentsettings ${ hover ? 'componentsettings--hover' : '' }`">
        
        <div class="componentsettings__component">
            <button class="mr-2 px-2" @click="SetMode('edit')">settings</button>
            <span>{{ pagecomponent.type.toUpperCase() }}</span>
        </div>


        <div class="componentsettings__editor" v-if="mode == 'edit'">
            <div class="text-right">
                <button class="btn" @click="mode = ''">Close</button>
            </div>
            

            <div class="componentsettings__editor__field" v-for="(setting, settingKey, settingId) in pagecomponent.settings" :key="`setting-${ settingKey }-${ settingId }-${ pagecomponent._id }`">
                <component :is="setting.type" :setting="setting" :pagecomponent="pagecomponent" />
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pagecomponent: { type: Object },
        hover: { type: Boolean, default: false }
    },

    data(){
        return {
            mode: ''
        }
    },

    methods: {
        SetMode(mode){
            this.mode = mode
        }
    }

}
</script>

<style lang="scss">
$hovercolor: #0063aa;

.componentsettings {
    // position: absolute;
    // top: -2px;
    // bottom: -2px;
    // left: -2px;
    // right: -2px;

    &__editor {
        position: fixed;
        top: 0;
        width: 400px;
        right: 0;
        bottom: 0;
        background-color: rgba(white, 1);
        box-shadow: 0 0 30px rgba(black, 0.15);
        z-index: 1000;
    }

    
    &--hover {
        // border: inset 1px solid $hovercolor;
        box-shadow: 0 0 30px rgba(black, 0.15);

        .componentsettings {
            &__component {
                display: block;
            }
        }
    }

    &__component {
        display: none;
        position: absolute;
        top: -20px;
        height: 20px;
        right: 0;
        padding: 3px 2px;
        background-color: $hovercolor;
        font-size: 10px;
        color: white;
        
    }

}
</style>