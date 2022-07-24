<template>
    <PageWrapper>
        <h1 style="font-size: 28px">Управляющая компания</h1>
        <div class="voiting">
            <div class="voiting__titles">
                <div class="voiting__titles_number">Номер жалобы</div>
                <div class="voiting__titles_theme">Дата заявки</div>
                <div class="voiting__titles_theme">Дата выполнения</div>
                <div class="voiting__titles_description">Тема</div>
                <div class="voiting__titles_value">Квартира</div>
                <div class="voiting__titles_status">Ответственный</div>
                <div class="voiting__titles_control">Статус</div>
            </div>
            <div class="voiting__list">
                <div class="voiting__item">
                    <div class="voiting__item_number">12</div>
                    <div class="voiting__item_theme">12.07.2022</div>
                    <div class="voiting__item_theme">20.07.2022</div>
                    <div class="voiting__item_description">Сильный шум на улице</div>
                    <div class="voiting__item_value">231</div>
                    <div class="voiting__item_status">Иванов П.А.</div>
                    <div class="voiting__item_control">
                        <p class="stat-w">В работе</p>
                    </div>
                </div>

                <div class="voiting__item">
                    <div class="voiting__item_number">24</div>
                    <div class="voiting__item_theme">22.07.2022</div>
                    <div class="voiting__item_theme">25.07.2022</div>
                    <div class="voiting__item_description">Не работает лифт №1</div>
                    <div class="voiting__item_value">142</div>
                    <div class="voiting__item_status">Васильев И.Н.</div>
                    <div class="voiting__item_control">
                        <p class="stat-a">Выполнено</p>
                    </div>
                </div>

                <div class="voiting__item">
                    <div class="voiting__item_number">25</div>
                    <div class="voiting__item_theme">10.07.2022</div>
                    <div class="voiting__item_theme">30.07.2022</div>
                    <div class="voiting__item_description">На этаже не работает кондиционер</div>
                    <div class="voiting__item_value">412</div>
                    <div class="voiting__item_status">Сангиев А.К.</div>
                    <div class="voiting__item_control">
                        <p class="stat-f">Провалено</p>
                    </div>
                </div>

                <div class="voiting__item">
                    <div class="voiting__item_number">12</div>
                    <div class="voiting__item_theme">24.07.2022</div>
                    <div class="voiting__item_theme">27.07.2022</div>
                    <div class="voiting__item_description">Не работает домофон</div>
                    <div class="voiting__item_value">231</div>
                    <div class="voiting__item_status">Лехин Н.Т.</div>
                    <div class="voiting__item_control">
                        <p class="stat-n">Новая</p>
                    </div>
                </div>

                <div class="voiting__item" v-for="(report, index) in reports" :key="index">
                    <div class="voiting__item_number">{{report.num}}</div>
                    <div class="voiting__item_theme">{{new Date(report.created).toLocaleDateString()}}</div>
                    <div class="voiting__item_theme" v-if="report.done">{{new Date(report.done).toLocaleDateString()}}</div>
                    <div class="voiting__item_theme" v-else>30.07.2020</div>
                    <div class="voiting__item_description">{{report.topic}}</div>
                    <div class="voiting__item_value">{{report.room}}</div>
                    <div class="voiting__item_status">{{report.responsible}}</div>
                    <div class="voiting__item_control">
                        <p class="stat-n" v-if="report.status == 'Новая'">{{report.status}}</p>
                        <p class="stat-a" v-if="report.status == 'Выполнено'">{{report.status}}</p>
                        <p class="stat-f" v-if="report.status == 'Провалено'">{{report.status}}</p>
                        <p class="stat-w" v-if="report.status == 'В работе'">{{report.status}}</p>
                    </div>
                </div>

            </div>
        </div>

            <section class="grid grid-cols-1">
        <h2 class="sr-only">Sales charts</h2>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">

                <BaseCard noHeader class="grid grid-cols-2" style="height: 450px;">
                    <div class="grid grid-cols-1 gap-4">
                        <h4 class="text-2xl font-medium">Активные жильцы</h4>
                        <p class="text-lg font-medium text-gray-500" style="color: #333">За месяц</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">235 кв. - 10 обращений</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">153 кв. - 8 обращений</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">19 кв. - 6 обращений</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">87 кв. - 5 обращений</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">55 кв. - 3 обращений</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">174 кв. - 1 обращений</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">16 кв. - 1 обращений</p>
                        <p class="text-2xl font-medium text-gray-600" style="width: 400px; font-size: 22px; margin-left: -80px">Всего: 75 обращений</p>
                    </div>

                    <!-- Donut chart -->
                    <div class="w-full h-fullflex items-center justify-center">
                        <div ref="earningChartEl"></div>
                    </div>
                </BaseCard>
            </div>

            <!-- Bar chart -->
            <BaseCard title="Оплачено услуг ЖКХ" :actions="[{ title: 'View', to: '#' }]" style="height: 450px;">
                <div ref="salesChartEl"></div>
            </BaseCard>
        </div>
    </section>
    </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import SalesSection from '@/components/pages/dashboard/SalesSection.vue'
import LatestSection from '@/components/pages/dashboard/LatestSection.vue'

import { onMounted, ref } from 'vue'
import ApexCharts from 'apexcharts'
import { UserAddIcon, ChartBarIcon } from '@heroicons/vue/outline'
import BaseCard from '@/components/BaseCard.vue'

import {useReport} from "@/composition/useReport.js"


const earningChartEl = ref(null)
const salesChartEl = ref(null)
const {getReport, reports} = useReport()
onMounted(() => {
    getReport()
    let earningChart = new ApexCharts(earningChartEl.value, {
        series: [10, 8, 6, 5, 3, 1, 1],
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
        labels: ['235 кв.', '153 кв.', '19 кв.', '87 кв.', '55 кв.', '174 кв.', '16 кв.'],
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
            {
                name: 'Задолженость',
                data: [288311, 124562, 141125, 96727, 124124, 146113, 170414],
            },
            {
                name: 'Оплат',
                data: [1543673, 1821121, 1782251, 1914928, 1777542, 1685321, 1467133],
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
            type: 'datetime',
            categories: ['1.02.2022', '1.03.2022', '1.04.2022', '1.05.2022', '1.06.2022', '1.07.2022'],
        },
        tooltip: {
            x: {
                format: 'date',
            },
        },
    })

    salesChart.render()
})
</script>

<style scoped>
    .voiting{

    }
    .voiting__titles{
        display: flex;
        width: 100%;
        padding: 5px;
        box-shadow: 0px 0px 4px 0px rgba(51, 51, 51, 0.412);
        background: #ffffff;
        border-radius: 5px 5px 0px 0px;
    }
    .voiting__titles_number{
        width: 10%;
    }
    .voiting__titles_theme{
        width: 12.5%;
    }
    .voiting__titles_description{
        width: 20%;
    }
    .voiting__titles_value{
        width: 15%;
    }
    .voiting__titles_status{
        width: 15%;
    }
    .voiting__titles_control{
        width: 15%;
    }
    .voiting__list{
        width: 100%;
        display: flex;
        flex-direction: column;
        
        border-radius: 5px;
        z-index: 9999;
    }
    .voiting__item{
        width: 100%;
        display: flex;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 4px 4px 10px 4px rgba(51, 51, 51, 0.258);
        color: #333;
        padding: 10px 5px;
        margin-top: 1px;
    }
    .voiting__item:last-child{
        border-radius: 0px 0px 5px 5px
    }

    .voiting__item_number{
         width: 10%;
    }
    .voiting__item_theme{
         width: 12.5%;
    }
    .voiting__item_description{
         width: 20%;
    }
    .voiting__item_value{
        width: 15%;
    }
    .voiting__item_status{
        width: 15%;
    }
    .voiting__item_control{
        width: 15%;
        display: flex;
        align-items: center;
        color: #030303;
        text-align: center;
    }
    .voiting__item_contol_accept{
        background: #92EA66;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
    }
     .voiting__item_contol_accept:hover{
        background: #66ea66;
    }
    .voiting__item_contol_waiting{
        margin-left: 10px;
        background: #eacd66;
        padding: 5px;
        border-radius: 5px;
        transition: all 0.3s;
        cursor: pointer;
    }
    .voiting__item_contol_wating:hover{
        background: #e7a304;
    }
    

    p{
        width: 100px;
        text-align: center;
        border-radius: 5px;
    }

    .stat-w{
        background: #e7a304d5;
    }
    .stat-a{
        background: #66ea66a9;
    }
    .stat-n{
        background: rgba(62, 149, 255, 0.75);
    }
    .stat-f{
        background: rgba(255, 43, 43, 0.728);
    }
</style>
