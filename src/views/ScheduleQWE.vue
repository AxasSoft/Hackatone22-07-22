<template>
    <PageWrapper>
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">Расписание</h2>
            </div>
        </template>
        <div class="voting">
            <div class="voting__active">
                <div class="voting__active_title">
                    Текущее расписание
                </div>
                <div class="voting__active_subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi impedit voluptatum ea! Fugiat, inventore! Non facilis earum a eligendi? Qui hic officiis tempora harum assumenda repellat veritatis laborum debitis.
                </div>
                <div class="voting__active_list">
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">
                            <Datepicker v-model="date"></Datepicker>
                        </div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 2</div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 3</div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 4</div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                </div>
            </div>

            <div class="voting__active">
                <div class="voting__active_title">
                    Прошлое голосование
                </div>
                <div class="voting__active_subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi impedit voluptatum ea! Fugiat, inventore! Non facilis earum a eligendi? Qui hic officiis tempora harum assumenda repellat veritatis laborum debitis.
                </div>
                <div class="voting__active_list">
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 2</div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 3</div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                    <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 4</div>
                        <div class="voting__active-item_value">100%</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="voting-history">
            <div class="voting-history__titles">
                <div class="voting-history__titles_name">Тема голосования</div>
                <div class="voting-history__titles_value">Результаты</div>
                <!-- <div class="voting-history__titles_value"></div>
                <div class="voting-history__titles_value"></div>
                <div class="voting-history__titles_value"></div> -->
            </div>
            <div class="voting-history__list">
                <div class="voting-history__item">
                    <div class="voting-history__list_name">Тема</div>
                    <div class="voting-history__list_value">Ответ 1 <br> 20% голосов</div>
                    <div class="voting-history__list_value">Ответ 2 <br> 30% голосов</div>
                    <div class="voting-history__list_value">Ответ 3 <br> 10% голосов</div>
                    <div class="voting-history__list_value victory-value">Ответ 4 <br> 40% голосов</div>
                </div>

                <div class="voting-history__item">
                    <div class="voting-history__list_name">Тема</div>
                    <div class="voting-history__list_value">Ответ 1 <br> 20% голосов</div>
                    <div class="voting-history__list_value victory-value">Ответ 2 <br> 30% голосов</div>
                    <div class="voting-history__list_value">Ответ 3 <br> 10% голосов</div>
                    <div class="voting-history__list_value">Ответ 4 <br> 40% голосов</div>
                </div>

                <div class="voting-history__item">
                    <div class="voting-history__list_name">Тема</div>
                    <div class="voting-history__list_value">Ответ 1 <br> 20% голосов</div>
                    <div class="voting-history__list_value">Ответ 2 <br> 30% голосов</div>
                    <div class="voting-history__list_value">Ответ 3 <br> 10% голосов</div>
                    <div class="voting-history__list_value victory-value">Ответ 4 <br> 40% голосов</div>
                </div>

                <div class="voting-history__item">
                    <div class="voting-history__list_name">Тема</div>
                    <div class="voting-history__list_value victory-value">Ответ 1 <br> 20% голосов</div>
                    <div class="voting-history__list_value">Ответ 2 <br> 30% голосов</div>
                    <div class="voting-history__list_value">Ответ 3 <br> 10% голосов</div>
                    <div class="voting-history__list_value">Ответ 4 <br> 40% голосов</div>
                </div>
            </div>
        </div>
    </PageWrapper>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import PageWrapper from '@/components/PageWrapper.vue'
import StatisticsSection from '@/components/pages/dashboard/StatisticsSection.vue'
import SalesSection from '@/components/pages/dashboard/SalesSection.vue'
import LatestSection from '@/components/pages/dashboard/LatestSection.vue'
import Button from '@/components/Button.vue'
import { GithubIcon } from '@/components/icons/brands'
    
export default {
    components: { Datepicker },
    data() {
        return {
            date: null,
        };
    }
}
</script>

<style lang="css" scoped>
    .voting{
        display: flex;
    }
    .voting__active{
        background: #FFFFFF;
        padding: 20px;
        box-shadow: 0px 0px 3px 4px #0000004a;
        border-radius: 3px;
        display: flex;
        align-items: flex-start;
        width: 50%;
        flex-direction: column;
    }
    .voting__active:last-child{
        margin-left: 20px;
    }
    .voting__active_title{
        font-size: 18px;
    }
    .voting__active_subtitle{
        margin-top: 10px;
        font-size: 14px;
    }
    .voting__active_list{
        margin-top: 10px;
    }
    .voting__active-item{
        margin-top: 10px;
    }
    .voting__active-item_name{

    }
    .voting__active-item_value{
        
    }


    .voting-history{
        background: #FFFFFF;
        box-shadow: 0px 0px 3px 4px #0000004a;
        border-radius: 3px;
        display: flex;
        align-items: flex-start;
        width: 100%;
        flex-direction: column;
    }
    .voting-history__titles{
        display: flex;
        width: 100%;
        border-bottom: 1px solid #000;
    }
    .voting-history__titles_name{
        width: 20%;
        padding-left: 10px;
    }
    .voting-history__titles_value{
        width: 80%;
        border-left: 1px solid #000000;
        padding-left: 10px;
    }
    .voting-history__list{
         width: 100%;
    }
    .voting-history__item{
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #000;
        
        color: #000;
    }
    .voting-history__list_name{
        width: 20%;
        padding-left: 10px;
    }
    .voting-history__list_value{
        width: 20%;
        border-left: 1px solid #000000;
        padding-left: 10px;
    }
    .victory-value{
        background: #a955f8cd;
    }
</style>