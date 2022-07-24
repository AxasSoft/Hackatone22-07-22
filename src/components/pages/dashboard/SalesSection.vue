<template>
    <section class="grid grid-cols-1">
        <h2 class="sr-only">Sales charts</h2>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                <div class="grid grid-cols-2 gap-6">
                    <!-- Today's user -->
                    <BaseCard no-header bg-classes="bg-purple-500">
                        <div class="p-2 grid grid-cols-1 gap-4">
                            <UserAddIcon class="w-10 h-10 text-white" />

                            <div class="grid gap-2">
                                <p class="text-base font-medium text-green-300">+1%</p>
                                <p class="text-3xl font-medium text-white">1,210</p>
                            </div>

                            <p class="text-sm font-medium text-white"> Заполнение ЖК</p>
                        </div>
                    </BaseCard>

                    <!-- Today's sales -->
                    <BaseCard no-header bg-classes="bg-cyan-500">
                        <div class="p-2 grid grid-cols-1 gap-4">
                            <ChartBarIcon class="w-10 h-10 text-white" />

                            <div class="grid gap-2">
                                <p class="text-base font-medium text-green-300">+4%</p>
                                <p class="text-3xl font-medium text-white">20,350</p>
                            </div>

                            <p class="text-sm font-medium text-white">Заполненность арендных помещений</p>
                        </div>
                    </BaseCard>
                </div>

                <!-- Earning card -->
                <BaseCard noHeader class="grid grid-cols-2">
                    <div class="grid grid-cols-1 gap-4">
                        <h4 class="text-2xl font-medium">Интересы жильцов</h4>
                        <p class="text-lg font-medium text-gray-500" style="color: #333">За месяц</p>
                        <p class="text-base font-medium text-green-400" style="color: #333">Спорт - 37%</p>
                        <p class="text-base font-medium text-green-400" style="color: #333">Кинотеатры - 4%</p>
                        <p class="text-base font-medium text-green-400" style="color: #333">Кафе - 9%</p>
                        <p class="text-base font-medium text-green-400" style="color: #333">Детские комнаты - 23%</p>
                        <p class="text-base font-medium text-green-400" style="color: #333">Массаж - 17%</p>
                        <p class="text-base font-medium text-green-400" style="color: #333">Семинары - 10%</p>
                        <p class="text-2xl font-medium text-gray-600">Потрачено жильцами: 748 000 ₽ </p>
                    </div>

                    <!-- Donut chart -->
                    <div class="w-full h-fullflex items-center justify-center">
                        <div ref="earningChartEl"></div>
                    </div>
                </BaseCard>
            </div>

            <!-- Bar chart -->
            <BaseCard title="Активных жильцов" :actions="[{ title: 'View', to: '#' }]">
                <div ref="salesChartEl"></div>
            </BaseCard>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ApexCharts from 'apexcharts'
import { UserAddIcon, ChartBarIcon } from '@heroicons/vue/outline'
import BaseCard from '@/components/BaseCard.vue'


const earningChartEl = ref(null)
const salesChartEl = ref(null)

onMounted(() => {
    let earningChart = new ApexCharts(earningChartEl.value, {
        series: [37, 4, 9, 23, 17, 10],
        chart: {
            type: 'donut',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: { show: false },
        comparedResult: [2, 8],
        labels: ['Спорт', 'Кинотеатры', 'Кафе', 'Детские комнаты', 'Массаж', 'Семинары'],
        stroke: { width: 0 },
        colors: ['#a855f7', '#EA66C2', '#974495', '#53089B', '#A492B5', '#CB94FE'],
        grid: {
            padding: {
                right: -20,
                bottom: -8,
                left: -20,
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            offsetY: 15,
                        },
                        value: {
                            offsetY: -20,
                            formatter(val) {
                                return `${parseInt(val)}%`
                            },
                        },
                        total: {
                            show: true,
                            label: 'Спорт',
                            formatter() {
                                return '37%'
                            },
                        },
                        /* total: {
                            show: true,
                            label: 'Кинотеатры',
                            formatter() {
                                return '4%'
                            },
                        },
                        total: {
                            show: true,
                            label: 'Кафе',
                            formatter() {
                                return '9%'
                            },
                        }, */
                    },
                },
            },
        },
    })
    earningChart.render()

    let salesChart = new ApexCharts(salesChartEl.value, {
        series: [
            /* {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100],
            }, */
            {
                name: 'Жильцов',
                data: [205, 156, 194, 390, 450, 390, 440],
            },
        ],
        legend: {
            position: 'top',
        },
        chart: {
            height: '100%',
            type: 'area',
            toolbar: {
                show: true,
            },
        },
        grid: {
            show: true,
            padding: {
                left: 0,
                right: 0,
            },
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth',
        },
        t: {
            type: 'label',
            categories: ['1 опрос', '2 опрос', '3 опрос', '4 опрос', '5 опрос', '6 опрос'],
        },
        tooltip: {
            x: {
                format: 'string',
            },
        },
    })

    salesChart.render()
})
</script>
