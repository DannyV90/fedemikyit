<script setup>
import { Head, Link } from '@inertiajs/vue3';
import {Countdown} from 'vue3-flip-countdown'
import {computed} from "vue";

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    goldImage: String,
    font: String,
    foto3: String,
    fotoFamiglia: String

});

const goldImageUrl = computed(() => {
    return 'url('+props.goldImage+')'
})
const fontUrl = computed(() => {
    return 'url('+props.font+')'
})

console.log(fontUrl.value)

</script>

<template>
    <Head>
        <title>Ci Sposiamo</title>
    </Head>

    <div id="mainDiv" class="flex flex-col justify-center bg-fuchsia-50 min-h-screen py-16 text-center "
         style="color: rgb(89,77,53)">
        <div class="md:hidden flex flex-col items-center justify-center text-5xl w-full z-50 mb-16 font-bold"
             style="font-family: 'SophiaMartini', cursive">
            <div>
                Federica
            </div>
            <div class="mt-8 mb-16">
                e
            </div>
            <div>
                Michele
            </div>
        </div>
        <!--        <div style="font-family: 'Sassy Frass', cursive; font-size: 3rem" class="md:hidden block w-full text-center h-20">
                    finalmente sposi
                </div>-->
        <div class="hidden md:flex items-center gap-x-16 font-bold justify-center flex-wrap mx-auto w-full px-16 z-50
        text-9xl my-20 z-50"
             style="font-family: 'SophiaMartini', cursive">
            <h1>
                Federica
            </h1>
            <h1>
                e
            </h1>
            <h1>
                Michele
            </h1>
        </div>
        <!--        <div style="font-family: 'Sassy Frass', cursive; font-size: 6rem" class="hidden md:block w-full text-center h-20">
                    finalmente sposi
                </div>-->
        <div class="md:hidden flex items-center justify-around mx-auto mb-10">
            <img :src="foto3" alt="" style="width: 90rem; z-index: 100" >
        </div>
        <div class="hidden md:flex items-center justify-around mx-auto mb-10 px-4">
            <img :src="foto3" alt="" style="width: 70rem; z-index: 100" >
        </div>
        <div class="hidden md:block z-50">
            <div class="flex flex-col items-center justify-center text-7xl w-full px-4 gap-y-20 font-bold"
                 style="font-family: 'SophiaMartini', cursive">
                <div>
                    Gabriele<span style="font-family: 'Sassy Frass', cursive">,</span> Anna
                    <span style="font-family: 'Sassy Frass', cursive">,</span> Giorgia e
                    <span style="font-family: 'Sassy Frass', cursive">...</span>Mia
                </div>
                <div>
                    sono felici di annunciarvi che...
                </div>
            </div>
        </div>
        <div class="md:hidden z-50">
            <div class="flex flex-col items-center justify-center text-2xl w-full px-4 gap-y-6 font-bold"
                 style="font-family: 'SophiaMartini', cursive">
                <div>
                    Gabriele<span style="font-family: 'Sassy Frass', cursive">,</span> Anna
                    <span style="font-family: 'Sassy Frass', cursive">,</span>
                </div>
                <div>
                     Giorgia e
                    <span style="font-family: 'Sassy Frass', cursive">...</span>Mia
                </div>
                <div>
                    sono felici di annunciarvi
                </div>
                <div>
                    che...
                </div>
            </div>
        </div>

        <div class="hidden md:block z-50">
            <div class="flex items-center justify-around mx-auto mb-10 mt-8">
                <img :src="fotoFamiglia" alt="" style="width: 70rem">
            </div>
        </div>
        <div class="md:hidden z-50">
            <div class="flex items-center justify-around mx-auto mb-10 mt-8">
                <img :src="fotoFamiglia" alt="" style="width: 20rem">
            </div>
        </div>

        <div class="hidden md:block mb-16 z-50">
            <div class="mb-4">
                <div class="text-7xl font-bold mb-4">
                    Sabato 1 Luglio 2023
                </div>
                <div class="text-5xl font-bold">
                    ore 15:00
                </div>
            </div>
            <div class="text-2xl font-bold z-50 my-4">
                presso
            </div>
            <div class="text-5xl font-bold z-50">
                Cattedrale S.Alessandro
            </div>
            <div class="text-3xl font-bold z-50">
                in Piazza Duomo - Bergamo (Città Alta)
            </div>
        </div>
        <div class="md:hidden mb-16 z-50 px-4">
            <div class="">
                <div class="text-4xl font-bold mb-4">
                    Sabato 1 Luglio 2023
                </div>
                <div class="text-2xl font-bold">
                    ore 15:00
                </div>
            </div>
            <div class="font-bold z-50 my-4">
                presso
            </div>
            <div class="text-3xl font-bold z-50">
                Cattedrale S.Alessandro
            </div>
            <div class="text-xl font-bold z-50">
                in Piazza Duomo
            </div>
            <div class="text-xl font-bold z-50">
                Bergamo (Città Alta)
            </div>
        </div>
        <div class="mb-16">
            <Countdown
                deadline="2023-07-01 15:00:00"
                mainColor="#EFDBC9"
                scondFlipColor="#F1EAE1"
                :labels="{days: 'Giorni',hours: 'Ore',minutes: 'Minuti',seconds: 'Secondi'}"
            />
        </div>
        <div class="hidden md:block text-3xl font-bold z-50">
            <div class="">
                a seguire il Ricevimento
            </div>
            <div class="text-2xl my-4">
                presso
            </div>
            <div class="text-5xl">
                Podere Castel Merlo
            </div>
            <div>
                a Villongo (BG) - Via Verdi, 6
            </div>
        </div>
        <div class="md:hidden font-bold z-50">
            <div class="text-2xl">
                a seguire il Ricevimento
            </div>
            <div class="my-2">
                presso
            </div>
            <div class="text-3xl">
                Podere Castel Merlo
            </div>
            <div>
                a Villongo (BG) - Via Verdi, 6
            </div>
        </div>

    </div>
</template>
<style scoped>

#mainDiv{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
#mainDiv::before{
    content: "";
    background-image: v-bind(goldImageUrl);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    opacity: 0.3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

@font-face {
    font-family: SophiaMartini;
    src:  v-bind(fontUrl) format("opentype");
}
</style>
