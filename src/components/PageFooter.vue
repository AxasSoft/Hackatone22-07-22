<template>
    <footer
        class="flex flex-col flex-shrink-0 w-full gap-2 px-6 py-4 lg:flex-row lg:justify-between"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            &#169;
            <span>{{ new Date().getFullYear() }}</span> AXAS
        </p>

        <p class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>От разработчкиков AXAS для клиентов</span>
            <span>
                <HeartIcon aria-hidden="true" class="w-6 h-6 text-red-500" />
            </span>
            <span>by</span>
            <a
                href="https://axas.ru"
                target="_blank"
                class="text-blue-600 hover:underline"
            >Сергей Сергеевич Майбродский</a>
        </p>
    </footer>
</template>

<script setup>
import { HeartIcon } from '@heroicons/vue/solid'
</script>
