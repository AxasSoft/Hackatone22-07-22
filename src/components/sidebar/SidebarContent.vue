<template>
    <PerfrectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
    >
        <SidebarLink
            title="Аналитика"
            :to="{ name: 'Dashboard' }"
            :active="isCurrentRoute('Dashboard')"
        >
            <template #icon>
                <DashboardIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>

        <SidebarLink
            title="Жильцы"
            :to="{ name: 'Profile' }"
            :active="isCurrentRoute('Profile')"
        >
            <template #icon>
                <UserIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>

        <SidebarLink
            title="Коммерция"
            :to="{ name: 'Schedule' }"
            :active="isCurrentRoute('Schedule')"
        >
            <template #icon>
                <CalendarIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>
        
        <SidebarLink
            title="Упр. компания"
            :to="{ name: 'Voting' }"
            :active="isCurrentRoute('Voting')"
        >
            <template #icon>
                <UsersIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>

        <SidebarLink
            title="Настройки"
            :to="{ name: 'Services' }"
            :active="isCurrentRoute('Services')"
        >
            <template #icon>
                <ViewListIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>
    </PerfrectScrollbar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/PerfectScrollbar.vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import { DashboardIcon, } from '@/components/icons/outline'
import { UserIcon, CalendarIcon, UsersIcon, ViewListIcon, HomeIcon,} from '@heroicons/vue/outline'
import { ShieldCheckIcon, DocumentIcon } from '@heroicons/vue/outline'
import SidebarCollapsible from '@/components/sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/components/sidebar/SidebarCollapsibleItem.vue'

const isCurrentRoute = (routeName) => {
    return useRouter().currentRoute.value.name == routeName
}

const isCurrentPath = (path) => {
    return useRouter().currentRoute.value.path.startsWith(path)
}
</script>
