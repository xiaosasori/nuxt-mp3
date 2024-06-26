<script setup lang="ts">
import { ModalTitle } from '@/components/custom/modal/ModalChildren'

defineProps<{ modelValue?: boolean }>()

defineEmits(['update:modelValue'])

let mainFirstChild: HTMLDivElement
const themes = [
  {
    type: 'Artist',
    items: [
      {
        name: 'IU',
        theme: 'gray',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/iu.jpg',
        var: {
          '--layout-bg': '#e7dfdd',
          '--purple-primary': '#409abc',
          '--text-item-hover': '#409abc',
        },
        background: {
          'background-image':
            'url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/iu.jpg)',
          'background-size': '1920px auto',
          'background-repeat': 'repeat',
        },
      },
      {
        name: 'Lisa',
        theme: 'pink-light',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/lisa.jpg',
        background: {
          'background-image':
            'url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/lisa.jpg)',
          'background-size': '1920px auto',
          'background-repeat': 'repeat',
        },
      },
      {
        name: 'Jennie Kim',
        theme: 'gray',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jennie.jpg',
        var: {
          '--layout-bg': '#bab8c3',
          '--player-bg': '#c6c4d1',
          '--purple-primary': '#346875',
          '--primary-bg': '#e2e7f5',
          '--text-item-hover': '#2a5e6b',
        },
        background: {
          'background-image':
            'url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/jennie.jpg)',
          'background-size': '1920px auto',
          'background-repeat': 'repeat',
        },
      },
    ],
  },
  {
    type: 'Dark',
    items: [
      {
        name: 'Dark',
        theme: 'dark',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dark.jpg',
      },
      {
        name: 'Purple',
        theme: 'purple',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg',
      },
      {
        name: 'Dark Blue',
        theme: 'blue',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue.jpg',
      },
      {
        name: 'Light Blue',
        theme: 'blue-light',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue-light.jpg',
      },
      {
        name: 'Green',
        theme: 'green',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green.jpg',
      },
    ],
  },
  {
    type: 'Light',
    items: [
      {
        name: 'Light',
        theme: 'light',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/light.jpg',
      },
      {
        name: 'Gray',
        theme: 'gray',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/gray.jpg',
      },
      {
        name: 'Light Green',
        theme: 'green-light',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green-light.jpg',
      },
      {
        name: 'Lotus Pink',
        theme: 'pink-light',
        image:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink-light.jpg',
      },
    ],
  },
]

const selectedTheme = ref()

onMounted(() => {
  mainFirstChild = document.getElementById('main')!
    .firstElementChild as HTMLDivElement
  // load savedTheme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    selectedTheme.value = JSON.parse(savedTheme)
    setThemeStyle()
  } else {
    // default dark purple
    setTheme(themes[1].items[1])
  }
})

function clearPreviousTheme() {
  // remove old theme styles and css variables
  mainFirstChild.style.removeProperty('background-image')
  mainFirstChild.style.removeProperty('background-size')
  mainFirstChild.style.removeProperty('background-repeat')
  if (selectedTheme.value?.var) {
    for (const key of Object.keys(selectedTheme.value.var)) {
      document.documentElement.style.removeProperty(key)
    }
  }
}

function setThemeStyle() {
  document.documentElement.dataset.theme = selectedTheme.value.theme
  if (selectedTheme.value.var) {
    for (const key of Object.keys(selectedTheme.value.var)) {
      document.documentElement.style.setProperty(
        key,
        selectedTheme.value.var[key],
      )
    }
  }
  if (selectedTheme.value.background) {
    for (const key of Object.keys(selectedTheme.value.background)) {
      mainFirstChild.style.setProperty(key, selectedTheme.value.background[key])
    }
  }
}

function setTheme(item: any) {
  clearPreviousTheme()
  // save selected theme to localStorage
  localStorage.setItem('theme', JSON.stringify(item))
  selectedTheme.value = item
  setThemeStyle()
}
</script>

<template>
  <Modal
    v-slot="{ close }"
    :model-value="modelValue"
    :persistent="false"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div
      class="mx-auto max-w-4xl overflow-y-auto rounded-md bg-primary px-8 py-4"
      style="width: 70vw; max-height: 60vh"
    >
      <div class="flex items-center justify-between">
        <ModalTitle class="text-2xl font-bold text-primary">
          Select Theme
        </ModalTitle>
        <button
          class="rounded text-2xl text-primary focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1"
          aria-label="close"
          @click="close"
        >
          <i class="ic-close flex" />
        </button>
      </div>
      <!-- main -->
      <div v-for="section in themes" :key="section.type" class="mt-4">
        <h3 class="text-base font-bold text-primary">
          {{ section.type }}
        </h3>
        <!-- options -->
        <div class="mt-2 flex flex-wrap gap-4">
          <!-- <div class="" v-for="item in section.items" :key="item.name"> -->
          <div
            v-for="item in section.items"
            :key="item.name"
            class="w-1/3 lg:w-1/4 clg:w-1/5 cxl:w-1/6"
          >
            <button
              class="relative w-full overflow-hidden rounded bg-loading pb-[66.6%] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2"
              @click="setTheme(item)"
            >
              <img
                class="absolute inset-0"
                :src="item.image"
                :alt="item.name"
              />
            </button>
            <p class="text-xs font-semibold text-primary">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
