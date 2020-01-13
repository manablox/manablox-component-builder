<template>
    <div :class="`componentsettings ${ hover ? 'componentsettings--hover' : '' }`">
        
        <div class="componentsettings__actions">
            <button class="mr-2 px-2 bg-gray-700" @click="SetMode('edit')">settings</button>
            <span class="pr-2">{{ pagecomponent.type.toUpperCase() }}</span>
        </div>


        <div class="componentsettings__editor" v-if="mode == 'edit'">
            <div class="text-right">
                <button class="btn" @click="mode = ''">X</button>
            </div>
            

            <div class="componentsettings__editor__field" v-for="(setting, settingKey, settingId) in pagecomponent.settings" :key="`setting-${ settingKey }-${ settingId }-${ pagecomponent._id }`">
                <component :is="setting.type" :setting="setting" :pagecomponent="pagecomponent" @input="OnSettingChange(setting)" />
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
        },

        OnSettingChange(setting){
            this.$emit('input', setting)
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
            &__actions {
                display: block;
            }
        }
    }

    &__actions {
        display: none;
        position: absolute;
        top: -16px;
        height: 16px;
        right: 0;
        background-color: $hovercolor;
        font-size: 10px;
        color: white;
        
    }

}
</style>