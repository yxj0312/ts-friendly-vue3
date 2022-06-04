<script setup lang="ts">
import { ref, onMounted } from "vue";
import fetchCount from "../services/fetchCount";
import ControlBar from './ControlBar'

interface Props {
  limit: number
  alertMessageOnLimit?: string
}

const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: 'can not go any higher'
})

// const props = defineProps<Props>()

// const props = defineProps<{
//     limit: number;
//     alterMessageOnLimit: string;
// }>()

// const props = defineProps({
//   limit: { type: Number, required: true },
//   alertMessageOnLimit: { type: String, required: true }
// })

const count = ref<number | null>(null);

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount;
  });
});

function addCount(num: number) {
  if (count.value !== null) {
    if (count.value >= props.limit) {
      alert(props.alertMessageOnLimit)
    }
    else {
      count.value += num
    }
  }
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <!-- <p><button @click="addCount(1)">Add</button></p> -->
    <ControlBar
      @add-count="addCount"
    ></ControlBar>
  </div>
</template>
