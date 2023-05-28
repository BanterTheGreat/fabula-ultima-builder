<script setup lang="ts">
import type { CharacterClass } from '@/models/character/character-class';
import { state } from '@/singletons/state';
import ClassJson from '@/data/json/class.json';
import { CharacterUpdater } from '@/models/character-updater';
import type { Character } from '@/models/character';
import type { ClassSkill } from '@/models/character/class-skill';

const props = defineProps<{
    index: number,
    classList: Record<string, string>
}>();

let selectedClassId: string;

//the class may not be populated so default to empty for now, need to add a default empty class in the json for this
try {
    selectedClassId = state.character.classes[props.index].id;
} catch (e) {
    selectedClassId = "";
}


function updateClass(event: any) {

    let classList: any = ClassJson.Classes;

    let selectedClass: CharacterClass = {
        id: selectedClassId,
        name: classList[selectedClassId]["Name"],
        passives: {
            modifiers: {
                stat: classList[selectedClassId]["Passives"]["Modifier"]["Stat"],
                boost: classList[selectedClassId]["Passives"]["Modifier"]["Boost"]
            },
            proficiency: classList[selectedClassId]["Proficiency"]
        },
        skills: {}
    };

    for (let skill in classList[selectedClassId]["Skills"]) {
        if (selectedClass.skills !== undefined) {
            selectedClass.skills.skill = {
                name: classList[selectedClassId]["Skills"][skill]["Name"],
                proficiency: 0,
                maxProficiency: classList[selectedClassId]["Skills"][skill]["MaxProficiency"]
            }
        }
    }

    new CharacterUpdater()
        .InProperty((c: Character) => c.classes)
        .UpdateIndex<CharacterClass>(props.index, selectedClass)

    console.log(state.character);
}

</script>

<template>
    <div>
        <select @change="updateClass($event)" v-model="selectedClassId">
            <option></option>
            <option v-for="className, classId in props.classList" v-bind:value="classId">{{ className }}</option>
        </select>
    </div>
</template>