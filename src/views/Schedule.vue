<template>
    <PageWrapper>
        <h1 style="font-size: 28px">Коммерция</h1>
        <div class="voiting">
            <div class="voiting__titles">
                <div class="voiting__titles_number">Площадь</div>
                <div class="voiting__titles_theme">Арендатор</div>
                <div class="voiting__titles_theme">Сфера</div>
                <div class="voiting__titles_description">Арендная плата</div>
                <div class="voiting__titles_value">Задолженность</div>
                <div class="voiting__titles_status">Выручка</div>
            </div>
            <div class="voiting__list">
                <!-- <div class="voiting__item">
                    <div class="voiting__item_number">47.7 кв.м.</div>
                    <div class="voiting__item_theme">BarberStyle</div>
                    <div class="voiting__item_theme">Стиль</div>
                    <div class="voiting__item_description">89 000 ₽</div>
                    <div class="voiting__item_value">0 ₽</div>
                    <div class="voiting__item_status">238 000 ₽</div>
                </div> -->
            <template v-for="(commerce, index) in commerces" :key="index">
                    <div class="voiting__item" @click="commerce.active = !commerce.active">
                        <div class="voiting__item_number">{{commerce.area}}</div>
                        <div class="voiting__item_theme">{{commerce.renter}}</div>
                        <div class="voiting__item_theme">{{commerce.scope}}</div>
                        <div class="voiting__item_description">{{commerce.rental_amount}}</div>
                        <div class="voiting__item_value">{{commerce.debt}} </div>
                        <div class="voiting__item_status">{{commerce.profit}}</div>
                    </div>
                    <div class="voiting__graph" v-if="commerce.active" >
                        <div class="voiting__graph_img" style="display: flex">
                            <div style="font-size: 78px; transform: rotate(180deg)"> > </div>
                            <img :src="commerce.photos[0]" alt="" style="margin-left: 200px; margin-right: 200px">
                            <div style="font-size: 78px">></div>
                        </div>
                    </div>
                </template>
            </div>
        </div>

            <section class="grid grid-cols-1">
        <h2 class="sr-only">Sales charts</h2>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">

                <BaseCard noHeader class="grid grid-cols-2" style="height: 450px;">
                    <div class="grid grid-cols-1 gap-4">
                        <h4 class="text-2xl font-medium">Свободные площади</h4>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">Помещение 87.5 кв.м.</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">Помещение 37.5 кв.м.</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">Помещение 127.5 кв.м.</p>

                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">Помещение 75 кв.м.</p>
                        <p class="text-base font-medium text-green-400" style="color: #333; width: 200px">Помещение 90 кв.м.</p>
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

        <h1 style="font-size: 28px; margin-top: 20px">Свободная коммерция</h1>
        <div class="voiting" style="margin-top: 20px">
            <div class="voiting__titles">
                <div class="voiting__titles_number">Площадь</div>
                <div class="voiting__titles_theme">Сфера</div>
                <div class="voiting__titles_description">Арендная плата</div>
                <div class="voiting__titles_value">Задолженность</div>
            </div>
            <div class="voiting__list">
                <div class="" v-for="(commercesFrees, index) in commercesFree" :key="index">
                    <div class="voiting__item" @click="commercesFrees.active = !commercesFrees.active">
                        <div class="voiting__item_number">{{commercesFrees.area}}</div>
                        <div class="voiting__item_theme">{{commercesFrees.scope}}</div>
                        <div class="voiting__item_description">{{commercesFrees.rental_amount}}</div>
                        <div class="voiting__item_value">{{commercesFrees.detail}}</div>
                    </div>
                    <div class="voiting__graph" v-if="commercesFrees.active">
                        <div class="voiting__graph_img" style="display: flex">
                            <div style="font-size: 78px; transform: rotate(180deg)"> > </div>
                            <img :src="commercesFrees.photos[1]" alt="" style="margin-left: 200px; margin-right: 200px">
                            <div style="font-size: 78px">></div>
                        </div>
                    </div>
                </div>
            </div>
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
import {useCommerce} from "@/composition/useCommerce.js"

const earningChartEl = ref(null)
const salesChartEl = ref(null)
const acive = ref([])
const {getCommerce, commerces, getCommerceFree, commercesFree} = useCommerce()
 const newCommerces = ref([])
 const active = []

onMounted(() => {
    getCommerce()
    .then(() => {
        newCommerces.value = commerces.value

        /* commerces.value.forEach(el => {
            el.value.active=
        }); */

        for(let i = 0; i < commerces.value.length; i++){
            commerces.value[i].active = false
            console.log(commerces.value[i])
        }
    })
    getCommerceFree()
    .then(() => {
        for(let i = 0; i < commercesFree.value.length; i++){
            commercesFree.value[i].active = false
            console.log(commercesFree.value[i])
        }
    })
    let earningChart = new ApexCharts(earningChartEl.value, {
        series: [20, 20, 20, 20, 20],
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
        labels: ['Помещение 87.5 кв.м.', 'Помещение 37.5 кв.м.', 'Помещение 127.5 кв.м.', 'Помещение 75 кв.м.', 'Помещение 90 кв.м.'],
        stroke: { width: 0 },
        colors: ['#a855f7', '#EA66C2', '#974495',],
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
        width: 30%;
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
         width: 30%;
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

    .voiting__graph{
        background: #FFFFFF;
        border-top: 1px solid #333;
        display: flex;
    }

    .voiting__graph_img{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border-radius: 0px 0px 3px 3px;
        overflow: hidden;
    }

    .voitin__graph_img, img{
        width: 600px;
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
