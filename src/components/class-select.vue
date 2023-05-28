<script setup lang="ts">

const props = defineProps<{
    index: number,
    classList: Record<string, string>
}>();

</script>

<template>
    <div>
        <select >
            <option></option>
            <option v-for="className, classId in props.classList" :value="classId">{{ className }}</option>
        </select>
    </div>
</template>