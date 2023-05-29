<script setup lang="ts">
//todo this file is worthless after the character builder menu is ready, remove after


import type { CharacterClass } from '@/models/character/character-class';
import { state } from '@/singletons/state';
import ClassJson from '@/data/json/class.json';
import { CharacterUpdater } from '@/models/character-updater';
import type { Character } from '@/models/character';
import type { ClassSkill } from '@/models/character/class-skill';
import { ClassSkillId } from '@/enums/class-skill-id';

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

    let classList: any = ClassJson;

    let selectedClass: CharacterClass = {
        id: selectedClassId,
        name: classList[selectedClassId]["name"],
        passives: {
            modifier: {
                stat: classList[selectedClassId]["passives"]["modifier"]["stat"],
                boost: classList[selectedClassId]["passives"]["modifier"]["boost"]
            },
            proficiency: classList[selectedClassId]["proficiency"]??[]
        },
        skills: {},
        views: classList[selectedClassId]["views"],
    };

    for (let skill in classList[selectedClassId]["skills"]) {
        if (selectedClass.skills !== undefined) {
            selectedClass.skills[skill] = {
                name: classList[selectedClassId]["skills"][skill]["name"],
                investment: 0,
                maxInvestment: classList[selectedClassId]["skills"][skill]["maxInvestment"]
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