<template>
    <div class="componenteditor">
        <!-- Theme selector -->
        <div class="text-primary">
            Theme: 
            <template v-for="_theme in themes">
                <button :key="`theme-btn-${ _theme }`" class="btn" @click="theme = _theme">{{ _theme.toUpperCase() }}</button>
            </template>
        </div>

        <div>
            <button class="text-white px-2 py-1 text-sm bg-black mt-2" @click="AddPagecomponent('contentblock')">add contentblock</button>
            <button class="text-white px-2 py-1 text-sm bg-black mt-2" @click="AddPagecomponent('image')">add image</button>
        </div> 

        <!-- Page components preview -->
        <div :class="PageClasses">
            <template v-for="pagecomponent in pagecomponents">
                <div class="componenteditor__component" :key="`pagecomponent-${ pagecomponent._id }`" @mouseover="SetHover(true, pagecomponent)" @mouseout="SetHover(false, pagecomponent)">
                    
                    <!-- Component settings pane -->
                    <ComponentSettingsEditor :pagecomponent="pagecomponent" :hover="pagecomponent.hover" @input="(setting) => { OnPagecomponentSettingChange(pagecomponent, setting) }" />
                    
                    <!-- page component -->
                    <component 
                        :is="`${ pagecomponent.type }Component`" 
                        v-bind="pagecomponent" 
                        ref="pagecomponent" 
                    />
                </div>
            </template>
        </div>

        <!-- current theme settings -->
        <link rel="stylesheet" :href="`/themes/${ theme }.css`" />

        <ImageSelector v-if="imageSelectorActive" :target="imageSelectorTargetField" @input="OnImageSelected" />
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
            imageSelectorActive: false,
            imageSelectorTargetField: null
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

    mounted(){
        this.InitEditableFields()
    },

    methods: {
        OnImageSelected(image){
            this.imageSelectorActive = false
        },

        AddPagecomponent(type){
            const componentDefaults = {
                contentblock: {
                    _id: new Date().getTime().toString(),
                    type: 'contentblock',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: 1 }
                    },
                    content: {
                        headline: { type: 'htmlsingleinline', value: 'Testheadline' },
                        content: { type: 'htmlinline', value: '<p>Testcontent</p>' }
                    }
                },
                image: {
                    _id: new Date().getTime().toString(),
                    type: 'image',
                    settings: {
                        headline: { type: 'HeadlineSelect', value: 1 }
                    },
                    content: {
                        asset: {
                            type: 'imageselect',
                            value: {
                                url: 'https://loremflickr.com/1920/1080'
                            }
                        }
                    }
                }
            }
            this.pagecomponents.push(JSON.parse(JSON.stringify(componentDefaults[type])))

            this.$nextTick(() => {
                this.InitEditableFields()
            })
            
        },

        InitEditableFields(){
            // if haven't got any pagecomponents yet, just do nothing
            if(!this.$refs.pagecomponent) return

            // Loop through all pagecomponents of the current collection
            for(let i = 0; i < this.$refs.pagecomponent.length; i++){
                let component = this.$refs.pagecomponent[i]

                // find all tinymce instances with current pagecomponent id
                let componentEditors = tinymce.editors.filter((_editor) => {
                    return _editor.settings.pagecomponent._id == component._id
                })

                // if we already have editor instances for the current pagecomponent id, move on to the next pagecomponent
                if(componentEditors.length > 0) continue
                
                // get the pagecomponent data
                let componentProps = component.$props

                // get the pagecomponent content objects
                let componentContent = componentProps.content
                let componentContentKeys = Object.keys(componentContent)
                
                // get the pagecomponent content element references
                let componentElements = component.$refs
                let componentElementKeys = Object.keys(componentElements)

                // Loop through all pagecomponent content objects
                for(let j = 0; j < componentContentKeys.length; j++){
                    let contentKey = componentContentKeys[j]
                    
                    // select element from the element reference list
                    let element = componentElements[`content.${ contentKey }.value`]

                    // get element data from the content objects list
                    let elementContent = componentContent[contentKey]

                    // create a unique editor id class
                    let elementId = `editable-${ elementContent.type }-${ contentKey }-${ componentProps._id }`
                    element.classList.add(elementId)
                
                    // if the current element is of any "html" type, we initialize a wysiwyg editor
                    if(elementContent.type.startsWith('html')){
                        // create a unique editor id class
                        let elementId = `editable-${ elementContent.type }-${ contentKey }-${ componentProps._id }`
                        element.classList.add(elementId)

                        // initialize a tinymce editor
                        tinymce.init({
                            ...this.$editorconfig[elementContent.type],
                            selector: `.${ elementId }`,
                            pagecomponent: component,
                            setup(editor){
                                editor.on('Change', (e) => {
                                    // when the content changes, we need to update the pagecomponent data
                                    elementContent.value = e.level.content
                                })
                            }
                        })
                    }

                    // if the current element is of type "imageselect", we initialize an image selector
                    if(elementContent.type == 'imageselect'){
                        element.addEventListener('click', (event) => {
                            this.imageSelectorTargetField = elementContent
                            this.imageSelectorActive = true
                        })
                    }
                }
            }
        },

        OnPagecomponentSettingChange(pagecomponent, setting){
            // find the current pagecomponent instance
            let component = this.$refs.pagecomponent.find((_component) => { return _component._id == pagecomponent._id })

            // if we currently changed a headline, we need to reinitialize the corresponding tinymce editor
            if(setting.type == 'HeadlineSelect'){
                // find all tinymce instances with current pagecomponent id
                let componentEditors = tinymce.editors.filter((_editor) => {
                    return _editor.settings.pagecomponent._id == pagecomponent._id
                })

                // loop through all filtered tinymce instances
                componentEditors.map((editor) => {
                    // extract all neccessary datas from the old tinymce instance
                    let editorSelector = editor.settings.selector
                    let editorSettings = editorSelector.split('-')
                    let editorType = editorSettings[1]
                    let editorContentKey = editorSettings[2]

                    // remove the old editor from memory
                    editor.remove()

                    // find the new headline element add readd the editor identifier class
                    let element = component.$refs[`content.${ editorContentKey }.value`]
                    element.classList.add(`editable-${ editorType }-${ editorContentKey }-${ pagecomponent._id }`)

                    // restart the current tinymce instance
                    this.$nextTick(() => {
                        tinymce.init({
                            ...this.$editorconfig[editorType],
                            selector: editorSelector,
                            pagecomponent,
                            setup(editor){
                                editor.on('Change', (e) => {
                                    // when the content changes, we need to update the pagecomponent data
                                    pagecomponent.content[editorContentKey].value = e.level.content
                                })
                            }
                        })
                    })
                })
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
        
        &:hover {
            &:before {
                content: '';
                position: absolute;
                top: -1px;
                left: -1px;
                right: -1px;
                bottom: -1px;
                box-shadow: 0 0 30px rgba(black, 0.15);
                cursor: pointer;
                z-index: -1;
            }
        }
    }

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

    [class*="editable-imageselect"]{
        cursor: pointer;
        &:hover {
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(black, 0.5);
                z-index: 100;
            }
        }
        
    }
}
</style>