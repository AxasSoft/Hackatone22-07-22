<template>
    <PageWrapper>
        <div class="profile">
            <div class="profile__push">
                <div class="profile__push-header">
                    <h1 style="font-size: 22px">Отправить уведомление</h1>
                </div>
                <div class="profile__push-main">
                    <div class="profile__push-main_label">Заголовок</div>
                    <input class="profile__push-main_input" v-model="hello">

                    <div class="profile__push-main_label">Текст сообщения</div>
                    <textarea class="profile__push-main_input" v-model="hello"></textarea>

                    <div class="profile__push-main_label">Получатель</div>
                    <div style="display: flex; box-shadow: 0px 0px 4px 4px rgba(51, 51, 51, 0.212); border-radius: 5px; margin-top: 10px; overflow: hidden;">
                        <div class="profile__push-main_type" @click="activeType(index)" :class="{'active': type.active}" v-for="(type, index) in types" :key="index">{{type.name}}</div>
                    </div>
                    <input class="profile__push-main_date" value="24.07.2022, 14:00:00">
                </div>
                <div class="profile__push-buttons">
                    <div class="profile__push-buttons_send">
                        Отправить
                    </div>
                </div>
            </div>

            <div class="profile__voting">
                <div class="profile__voting-header">
                    <h1 style="font-size: 22px">Голосование</h1>
                </div>
                <div class="profile__voting-main-one" style="width: 70%">
                    <div class="profile__voting-main-one_title">Организация праздника</div>
                    <div class="profile__voting-main-one_subtitle">Организация праздника по случаю завершения ХАКАТОНА 24.07.2022</div>
                    <div class="profile__voting-main-one-stat">
                        <div class="profile__voting-main-one-stat_label" style="margin-top: 10px">Завершаем</div>
                        <div class="stat" style="background: #a855f8; width: 10%; border-radius: 100px; text-align: center; color: #FFFFFF">10%</div>
                        <div class="profile__voting-main-one-stat_label" style="margin-top: 10px">Продолжаем</div>
                        <div class="stat" style="background: #a855f8; width: 30%; border-radius: 100px; text-align: center; color: #FFFFFF">30%</div>
                        <div class="profile__voting-main-one-stat_label" style="margin-top: 10px">Я не хочу работать! Я хочу чтобы гроши на меня с неба падали!</div>
                         <div class="stat" style="background: #a855f8; width: 60%; border-radius: 100px; text-align: center; color: #FFFFFF">60%</div>
                    </div>
                </div>
            </div>
        </div>
    </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import LatestSection from '@/components/pages/dashboard/LatestSection.vue'
import {ref} from "vue"
const types = ref([
    {name: "Все жильцы", active: true},
    {name: "Должники", active: false},
    {name: "Пользователь", active: false},
])

const activeType = (index) => {
    for (let i = 0; i < types.value.length; i++){
        types.value[i].active = false
    }
    types.value[index].active = true
}
</script>

<style lang="css">
    .profile__voting{
        background: #FFFFFF;
        box-shadow: 0px 0px 4px 4px rgba(51, 51, 51, 0.212);
        border-radius: 5px;
        padding: 10px;
        width: 70%;
        margin-left: 20px;
    }

    .active{
        background: #a855f8;
        color: #FFFFFF;
    }

    .profile{
        display: flex;
    }
    .profile__push{
         background: #FFFFFF;
        box-shadow: 0px 0px 4px 4px rgba(51, 51, 51, 0.212);
        border-radius: 5px;
        padding: 10px;
        width: 30%;
    }
    .profile__push-header{

    }
    .profile__push-main{
        
    }
    .profile__push-main_label{
        margin-top: 10px;
    }
    .profile__push-main_input{
        box-shadow: 0px 0px 4px 4px rgba(51, 51, 51, 0.136);
        border-radius: 5px;
        width: 100%;
        padding: 5px;
        font-size: 12px;
    }
    .profile__push-main_type{
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
        width: 100%;
        font-size: 14px;
        text-align: center;
        transition: all 0.3s;
    }
    .profile__push-main_date{
        margin-top: 10px;
        box-shadow: 0px 0px 4px 4px rgba(51, 51, 51, 0.136);
        border-radius: 5px;
        width: 100%;
        padding: 5px;
        font-size: 12px;
    }
    .profile__push-buttons{
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    .profile__push-buttons_send{
        padding: 5px 20px;
        background: #a855f8;
        color: #FFFFFF;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
