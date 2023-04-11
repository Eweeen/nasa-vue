<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/stores";

const store = useStore();
const notifications = computed(() => store.notifications.messages);
</script>

<template>
  <div
    class="fixed z-[60] inset-0 flex items-start justify-end px-4 py-6 sm:p-6 pointer-events-none"
  >
    <div class="max-w-sm w-full">
      <TransitionGroup
        appear
        tag="div"
        :enter-active-class="
          notifications.length > 1
            ? 'transform ease-out delay-300 duration-300 transition'
            : 'transform ease-out duration-300 transition'
        "
        enter-from-class="translate-x-4 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        move-class="transition ease-in-out duration-500"
      >
        <div
          v-for="(notification, idx) in notifications"
          :key="notification.title"
          :class="idx > 0 ? 'mt-4' : ''"
          class="bg-white shadow-lg rounded-lg pointer-events-auto"
        >
          <div class="rounded-lg shadow-xl overflow-hidden">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0" v-if="notification.type">
                  <img
                    src="/src/assets/icons/success.svg"
                    v-if="notification.type === 'success'"
                    class="w-5 h-5"
                  />
                  <img
                    src="/src/assets/icons/info.svg"
                    v-else-if="notification.type === 'info'"
                    class="w-5 h-5"
                  />
                  <img
                    src="/src/assets/icons/warning.svg"
                    v-else-if="notification.type === 'warning'"
                    class="w-5 h-5"
                  />
                  <img
                    src="/src/assets/icons/error.svg"
                    v-else-if="notification.type === 'error'"
                    class="w-5 h-5"
                  />
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm leading-5 font-medium text-gray-900" v-if="notification.title">
                    {{ notification.title }}
                  </p>
                  <p :class="`${notification.title ? 'mt-1' : ''} text-sm leading-5 text-gray-500`">
                    {{ notification.message }}
                  </p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition-all ease-in-out duration-150"
                    @click="store.notifications.removeNotification(notification.uuid)"
                  >
                    <img src="/src/assets/icons/close.svg" class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
