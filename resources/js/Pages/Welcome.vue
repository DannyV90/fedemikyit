<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import {Countdown} from 'vue3-flip-countdown'
import {computed, ref} from "vue";
import { useReCaptcha } from "vue-recaptcha-v3";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { VueFinalModal } from 'vue-final-modal'

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    goldImage: String,
    foto3: String,
    fotoFamiglia: String

});

const goldImageUrl = computed(() => {
    return 'url('+props.goldImage+')'
})

const openFormModal = ref(false)

const form = useForm({
    name: null,
    email: null,
    phone: null,
    message: null,
    captcha_token :null,
})

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
const recaptcha = async () => {
    await recaptchaLoaded()
    form.captcha_token = await executeRecaptcha('login')
    submit();
}

function submit() {
    form.post(route('message'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success("Dedica Inviata, Federica & Michele ringraziano!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored"
            })
        },
        onError: () => {
            toast.error("Qualcosa è andato storto! Riprova", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored"
            })
        }
    })
}

</script>

<template>
    <Head>
        <title>Ci Sposiamo</title>
    </Head>

    <div id="mainDiv" class="flex flex-col justify-center bg-fuchsia-50 min-h-screen py-16 text-center "
         style="color: rgb(89,77,53)">
        <div class="flex flex-col lg:flex-row items-center justify-center text-5xl md:text-7xl lg:text-8xl md:my-20
        lg:my-16 w-full z-50 mb-16 font-bold lg:mx-auto lg:gap-x-16"
             style="font-family: 'SophiaMartini', cursive">
            <div>
                Federica
            </div>
            <div class="mt-8 mb-16 lg:mt-0 lg:mb-16">
                e
            </div>
            <div>
                Michele
            </div>
        </div>

        <div class="lg:hidden flex items-center justify-around mx-auto mb-10">
            <img :src="foto3" alt="" style="width: 90rem; z-index: 100" >
        </div>
        <div class="hidden lg:flex items-center justify-around mx-auto mb-10 px-4">
            <img :src="foto3" alt="" style="height: 40rem; z-index: 100" >
        </div>

        <div class="z-50">
            <div class="flex flex-col items-center justify-center text-2xl md:text-5xl lg:text-6xl w-full md:gap-y-14
            px-4 gap-y-6 md:gap-y-14 lg:gap-y-20 font-bold"
                 style="font-family: 'SophiaMartini', cursive">
                <div class="flex flex-col gap-y-6 md:gap-y-14 lg:flex-row">
                    <div>
                        Gabriele<span class="punctuation">,</span> Anna<span class="punctuation">,</span>
                    </div>
                    <div>
                        Giorgia e<span class="punctuation">...</span>Mia
                    </div>
                </div>
                <div class="flex flex-col gap-y-6 md:gap-y-14 lg:flex-row gap-x-8">
                    <div>
                        sono felici di annunciarvi
                    </div>
                    <div>
                        che...
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden lg:block z-50">
            <div class="flex items-center justify-around mx-auto mb-10 mt-8">
                <img
                    v-animate-onscroll="'animated flipInX'"
                    :src="fotoFamiglia"
                    alt=""
                    style="width: 70rem"
                >
            </div>
        </div>
        <div class="lg:hidden z-50">
            <div class="flex items-center justify-around mx-auto mb-10 mt-8">
                <img
                    v-animate-onscroll.repeat="'animated flipInX'"
                    :src="fotoFamiglia"
                    alt=""
                    style="width: 45rem"
                >
            </div>
        </div>

        <div class="mb-16 z-50 px-4">
            <div class="md:mb-4">
                <div class="text-4xl md:text-7xl font-bold mb-4">
                    Sabato 1 Luglio 2023
                </div>
                <div class="text-2xl md:text-5xl font-bold">
                    ore 15:00
                </div>
            </div>
            <div class="font-bold md:text-2xl z-50 my-4">
                presso
            </div>
            <div class="text-3xl md:text-5xl font-bold z-50">
                Cattedrale S.Alessandro
            </div>
            <div class="text-xl md:text-3xl font-bold z-50">
                in Piazza Duomo
            </div>
            <div class="text-xl md:text-3xl font-bold z-50">
                Bergamo (Città Alta)
            </div>
        </div>

        <div class="mb-16 z-50 font-bold">
            <Countdown
                deadline="2023-07-01 15:00:00"
                mainColor="#EFDBC9"
                scondFlipColor="#F1EAE1"
                :labels="{days: 'Giorni',hours: 'Ore',minutes: 'Minuti',seconds: 'Secondi'}"
            />
        </div>
        <div class="font-bold z-50">
            <div class="text-2xl md:text-3xl">
                a seguire il Ricevimento
            </div>
            <div class="my-2 md:text-2xl md:my-4">
                presso
            </div>
            <div class="text-3xl md:text-5xl">
                Podere Castel Merlo
            </div>
            <div>
                a Villongo (BG) - Via Verdi, 6
            </div>
        </div>

        <button
            class="inline-flex items-center px-4 py-2 rounded-lg w-fit font-bold border-gray-300 mx-auto z-50
            text-xl my-8 bg-pink-100 hover:bg-pink-300 border border-pink-400"
            @click="openFormModal = true"
            style="color: rgb(89,77,53)"
            v-animate-onscroll.repeat="'animated bounce'"
        >
            CLICCA QUI
        </button>

        <VueFinalModal
            v-model="openFormModal"
            v-slot="{ close }"
            classes="flex justify-center items-center my-4"
            content-class="relative flex flex-col max-h-full mx-4 px-2 py-8 border w-full md:w-3/4 lg:w-1/2 rounded-lg
            bg-pink-50 overflow-y-scroll"
        >
            <button class="absolute top-3 right-6 font-bold" @click="openFormModal=false">
                X
            </button>
            <div class="font-bold text-2xl md:text-4xl my-8" style="font-family: 'SophiaMartini', cursive">
                Vuoi inviarci una dedica o un pensiero<span class="punctuation text-5xl md:text-7xl">?</span>
            </div>
            <div class="flex flex-col z-50 w-full px-4 justify-center">
                <form action="#" method="POST"  @submit.prevent="recaptcha"
                      class="flex flex-col gap-y-6 w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <div>
                        <InputLabel value="Nome" class="font-bold mb-1 text-lg" style="color: rgb(89,77,53)"/>
                        <InputError :message="form.errors.name" class="font-bold"/>
                        <TextInput v-model="form.name" class="px-6 py-1.5 w-full"/>
                    </div>
                    <div>
                        <InputLabel value="Email" class="font-bold mb-1 text-lg" style="color: rgb(89,77,53)"/>
                        <InputError :message="form.errors.email" class="font-bold"/>
                        <TextInput v-model="form.email" class="px-6 py-1.5 w-full"/>
                    </div>
                    <div>
                        <InputLabel value="Tel" class="font-bold mb-1 text-lg" style="color: rgb(89,77,53)"/>
                        <InputError :message="form.errors.phone" class="font-bold"/>
                        <TextInput v-model="form.phone" class="px-6 py-1.5 w-full"/>
                    </div>
                    <div>
                        <InputLabel value="Messaggio" class="font-bold mb-1 text-lg" style="color: rgb(89,77,53)"/>
                        <InputError :message="form.errors.message" class="font-bold"/>
                        <textarea
                            v-model="form.message"
                            class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm px-6
                        py-1.5 w-full h-60"
                        />
                    </div>

                    <PrimaryButton
                       class="w-fit font-bold border-gray-300 mx-auto"
                    >
                        invia
                    </PrimaryButton>
                </form>
            </div>
        </VueFinalModal>

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
    z-index: 20;
}

.punctuation{
    font-family: 'Sassy Frass', cursive
}

</style>
