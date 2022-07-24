<template>
    <PageWrapper>
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">Услуги</h2>
            </div>
        </template>
        <div class="voting">
            <div class="voting__active">
                <div class="voting__active_title">
                    Активные оповещения
                </div>
                <div class="voting__active_subtitle">
                    Здесь вы можете вкулючить/отключить уведомление у ваших подписок
                </div>
                <div class="voting__active_list">
                    <div class="voting__active-item">
                        <div class="voting__active-item_name" style="display: flex; align-items: flex-end; font-size: 18px">
                        <img style="width: 60px; margin-right: 20px" src="@/assets/images/territoriya-fitnesa.png" alt="">
                        Территория бизнеса</div>
                        <div class="voting__active-item_value" style="margin-top: 10px">
                            "Территория Фитнеса"- это сеть фитнес клубов, где вы сможете найти современный и комфортабельный тренажерный зал, оснащенный техникой последнего поколения.
                            <div class="voting__active-item_one voting__active-item_active">Да</div>
                            <div class="voting__active-item_one">Нет</div>
                        </div>
                    </div>
                     <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one voting__active-item_active">Да</div>
                            <div class="voting__active-item_one">Нет</div>
                        </div>
                    </div>
                     <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one voting__active-item_active">Да</div>
                            <div class="voting__active-item_one">Нет</div>
                        </div>
                    </div>
                     <div class="voting__active-item">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one voting__active-item_active">Да</div>
                            <div class="voting__active-item_one">Нет</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="voting__active">
                <div class="voting__active_title">
                    Возможные подписки
                </div>
                <div class="voting__active_subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi impedit voluptatum ea! Fugiat, inventore! Non facilis earum a eligendi? Qui hic officiis tempora harum assumenda repellat veritatis laborum debitis.
                </div>
                <div class="voting__active_list">
                    <div class="voting__active-item" style="flex-direction: column">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one" style="width: 150px">Активировать</div>
                        </div>
                    </div>

                    <div class="voting__active-item" style="flex-direction: column">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one" style="width: 150px">Активировать</div>
                        </div>
                    </div>

                    <div class="voting__active-item" style="flex-direction: column">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one" style="width: 150px">Активировать</div>
                        </div>
                    </div>

                    <div class="voting__active-item" style="flex-direction: column">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one" style="width: 150px">Активировать</div>
                        </div>
                    </div>

                    <div class="voting__active-item" style="flex-direction: column">
                        <div class="voting__active-item_name">Ответ 1</div>
                        <div class="voting__active-item_value">
                            Красное и белое<br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt nulla
                            <div class="voting__active-item_one" style="width: 150px">Активировать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="voting-history">
            <div class="voting-history__titles">
                <div class="voting-history__titles_name">Тема голосования</div>
                <div class="voting-history__titles_value">Результаты</div>
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
        </div> -->
    </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import StatisticsSection from '@/components/pages/dashboard/StatisticsSection.vue'
import SalesSection from '@/components/pages/dashboard/SalesSection.vue'
import LatestSection from '@/components/pages/dashboard/LatestSection.vue'
import Button from '@/components/Button.vue'
import { GithubIcon } from '@/components/icons/brands'
</script>

<style lang="css">
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
        max-height: 400px;
        overflow-y: auto;
        height: auto;
    }
    .voting__active-item{
        margin-top: 10px;
        box-sizing: border-box;
    }
    .voting__active-item_name{

    }
    .voting__active-item_value{
        display: flex;
        align-items: center;
    }
    .voting__active-item_one{
        padding: 5px;
        background: #a955f86c;
        width: 50px;
        text-align: center;
        color: #333333;
        cursor: pointer;
    }

    .voting__active-item_one:first-child{
        margin-left: 40px;
    }

    .voting__active-item_one:hover{
        background: #a955f8c9;
        cursor: pointer;
        color: #FFFFFF
    }
    .voting__active-item_active{
        background: #a955f8c9;
        color: #FFFFFF
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