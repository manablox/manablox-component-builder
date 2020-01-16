<template>
    <div class="alignmentsettings">ALIGNMENT
        <select v-model="setting.value">
            <option v-for="alignment in possibleAlignments" :key="`alignment-${ alignment }`" :value="alignment">{{ alignment }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        setting: { type: Object }
    },

    watch: {
        setting: {
            deep: true,
            handler: function(value){
                this.$emit('input', value)
            }
        }
    },

    data(){
        return {
            possibleAlignments: ['left', 'center', 'right']
        }
    },
}
</script>


<style>

</style>