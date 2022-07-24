<template>
    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <h2 class="sr-only">Quick statistics</h2>

        <!-- Customers card -->
        <QuiclStatisticsCard
            title="Жильцов"
            :chartData="customersData"
            result="576"
            percentage="32.40%"
            :actions="[{ title: 'View', to: '#' }]"
        >
            <template #icon="{ sizeClasses }">
                <UserGroupIcon aria-hidden="true" :class="sizeClasses" />
            </template>
        </QuiclStatisticsCard>

        <!-- Visits card -->
        <QuiclStatisticsCard
            style="font-size: 15px"
            title="Собрано арендной платы"
            :chartData="visitsData"
            result="1 350 000 ₽"
            status="danger"
            percentage="-2.10%"
            :actions="[{ title: 'View', to: '#' }]"
        >
            <template #icon="{ sizeClasses }">
                <EyeIcon aria-hidden="true" :class="sizeClasses" />
            </template>
        </QuiclStatisticsCard>

        <!-- Orders card -->
        <QuiclStatisticsCard
            title="Оплата ЖКХ"
            :chartData="ordersData"
            result="2 100 000 ₽"
            status="warning"
            percentage="0.60%"
            :actions="[{ title: 'View', to: '#' }]"
        >
            <template #icon="{ sizeClasses }">
                <ShoppingCartIcon aria-hidden="true" :class="sizeClasses" />
            </template>
        </QuiclStatisticsCard>

        <!-- Growth card -->
        <QuiclStatisticsCard
            title="Заявок от жильцов"
            :chartData="growthData"
            result="10 обращений"
            percentage="7.20%"
            :actions="[{ title: 'View', to: '#' }]"
        >
            <template #icon="{ sizeClasses }">
                <ChartPieIcon style="" aria-hidden="true" :class="sizeClasses" />
            </template>
        </QuiclStatisticsCard>
    </section>
</template>

<script setup>
import QuiclStatisticsCard from '@/components/QuiclStatisticsCard.vue'
import { UserGroupIcon, EyeIcon, ShoppingCartIcon, ChartPieIcon } from '@heroicons/vue/outline'

const customersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
const visitsData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13].reverse()
const ordersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
const growthData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
</script>
