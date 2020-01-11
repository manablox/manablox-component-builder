<template>
    <div class="componenteditor">
        <div class="componenteditor__page">
            <template v-for="pagecomponent in pagecomponents">
                <div class="componenteditor__component" :key="`pagecomponent-${ pagecomponent._id }`">
                    <component 
                        :is="`${ pagecomponent.type }Component`" 
                        v-bind="pagecomponent" 
                        ref="pagecomponent" 
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pagecomponents: { type: Array }
    },

    mounted(){
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
    }
}
</script>

<style lang="scss">
    .componenteditor {
        margin: 150px auto;
        width: 1340px;
        max-width: 100%;
        box-shadow: 0 0 30px rgba(black, 0.15);

        &__page {
            padding: 30px;
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
                    border: 1px solid rgba(black, 0.3);
                }
            }
        }
    }
</style>