<template>
    <div class="flex items-center justify-between flex-shrink-0 px-3">
        <router-link :to="{ name: 'Dashboard' }" class="inline-flex items-center gap-2">
            <span class="sr-only">Умный ЖК</span>
            <!-- <Logo aria-hidden="true" class="w-10 h-auto" /> -->
            <p style="font-size: 24px">
                <img src="@/assets/images/Logo.png" alt="">
            </p>
        </router-link>
    </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/components/icons/outline'
import { XIcon } from '@heroicons/vue/outline'
import { sidebarState } from '@/composables'
</script>
