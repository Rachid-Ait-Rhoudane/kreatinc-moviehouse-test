<script setup>

import { defineProps } from 'vue'

const props = defineProps({
    title : String
})

</script>

<template>
    <section style="border: 1px solid #FF914D;" class="container p-4 m-4 mx-auto">
        <h1 style="color: #FF914D" v-text="props.title"></h1>
        <hr class="w-50 section-line-style" />
        <div class="row row-cols-2 row-cols-md-5 justify-content-center">
            <slot></slot>

        </div>
        <slot name="pagination" ></slot>
    </section>
</template>

<style scoped>

.section-line-style{
    background-color: #FF914D;
    height: 5px;
}

</style>