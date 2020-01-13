<template>
    <div class="componenteditor">
        <div class="text-primary">
            Theme: 
            <template v-for="_theme in themes">
                <button :key="`theme-btn-${ _theme }`" class="btn" @click="theme = _theme">{{  _theme.toUpperCase()}}</button>
            </template>
        </div>
        <div :class="PageClasses">
            <template v-for="pagecomponent in pagecomponents">
                <div class="componenteditor__component" :key="`pagecomponent-${ pagecomponent._id }`" @mouseover="SetHover(true, pagecomponent)" @mouseout="SetHover(false, pagecomponent)">
                    <ComponentSettings :pagecomponent="pagecomponent" :hover="pagecomponent.hover" />
                    <component 
                        :is="`${ pagecomponent.type }Component`" 
                        v-bind="pagecomponent" 
                        ref="pagecomponent" 
                    />
                </div>
            </template>
        </div>
        <link rel="stylesheet" :href="`/themes/${ theme }.css`" />
    </div>
</template>

<script>
export default {
    props: {
        pagecomponents: { type: Array }
    },

    data(){
        return {
            themes: [
                'vivo',
                'stopshop'
            ],
            theme: 'vivo',

        }
    },

    computed: {
        PageClasses(){
            const classes = {
                'componenteditor__page': true
            }

            classes[`theme-${ this.theme }`] = true

            return classes
        }
    },

    async mounted(){
        this.InitEditableFields()
    },

    methods: {
        OnComponentContentChange(el, pagecomponent){
            console.log('change', el, pagecomponent)
        },
        InitEditableFields(){
            for(let i = 0; i < this.$refs.pagecomponent.length; i++){
                let component = this.$refs.pagecomponent[i]
                let componentProps = component.$props

                let componentContent = componentProps.content
                let componentContentKeys = Object.keys(componentContent)
                
                let componentElements = component.$refs
                let componentElementKeys = Object.keys(componentElements)


                for(let j = 0; j < componentContentKeys.length; j++){
                    let contentKey = componentContentKeys[j]
                    let element = componentElements[`content.${ contentKey }.value`]
                    let elementContent = componentContent[contentKey]
                
                    if(elementContent.type.startsWith('html')){
                        let elementClass = `editable-${ elementContent.type }-${ componentProps._id }`
                        element.classList.add(elementClass)

                        tinymce.init({
                            ...this.$editorconfig[elementContent.type],
                            selector: `.${ elementClass }`,
                            setup(editor){
                                editor.on('Change', (e) => {
                                    elementContent.value = e.level.content
                                })
                            }
                        })
                    }
                }
            }
        },

        SetTheme(theme){
            this.theme = theme
        },

        SetHover(state, pagecomponent){
            pagecomponent.hover = state
            this.$forceUpdate()
        }
    }
}
</script>

<style lang="scss">


.componenteditor {
    margin: 150px 50px;

    
    box-shadow: 0 0 30px rgba(black, 0.15);

    &__page {
        padding: 30px;
    }

    &__component {
        position: relative;
    }

    // [class^="editable"]{}

    .mce-content-body {
        outline: none !important;

        &:hover {
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                box-shadow: 0 0 30px rgba(black, 0.15);
                cursor: pointer;
            }
        }
    }
}
</style>