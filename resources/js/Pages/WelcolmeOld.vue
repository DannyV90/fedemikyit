<script setup>
import {Head, useForm} from '@inertiajs/vue3';
import {Countdown} from 'vue3-flip-countdown'
import {computed, onMounted, ref} from "vue";
import { useReCaptcha } from "vue-recaptcha-v3";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { VueFinalModal } from 'vue-final-modal'

onMounted(() => {
    AOS.init()
})

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    goldImage: String,
    foto3: String,
    fotoFamiglia: String,
    fotoDrago: String,
    logo: String

});

const showImage = ref(false)

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
            openFormModal.value = false
            form.clearErrors()
            form.reset()
        },
        onError: () => {
            toast.error("Qualcosa è andato storto! Riprova", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored"
            })
        }
    })
}

const closeModal = () => {
    openFormModal.value = false
    form.clearErrors()
    form.reset()
}

</script>

<template>
    <Head>
        <title>Ci Sposiamo</title>
    </Head>


    <div id="mainDiv" class="flex flex-col justify-center gap-y-20 bg-fuchsia-50 py-16 text-center"
         style="color: rgb(89,77,53)">
        <section class="z-50 mb:40 lg:mb-60 h-fit">
            <div class="flex flex-col md:flex-row xl:flex-row items-center justify-center text-5xl sm:text-5xl
            md:text-5xl xl:text-7xl w-full font-bold md:gap-x-8 xl:mx-auto xl:gap-x-16 mb-8 md:mb-32"
                 data-aos="zoom-in"
                 data-aos-duration="3000"
                 style="font-family: 'SophiaMartini', cursive">
                <div>
                    Federica
                </div>
                <div class="mt-4 mb-8 md:mt-8 md:mb-8 lg:mt-10 lg:mb-16">
                    e
                </div>
                <div>
                    Michele
                </div>
            </div>

            <transition>
                <div v-show="showImage" class="flex flex-col items-center mx-auto w-full mt-20">

                    <img v-show="showImage"  class="max-w-full sm:max-w-xl md:max-w-lg lg:max-w-2xl" :src="foto3" alt=""
                         @load="showImage = true"
                    >
                    <div class="font-bold text-4xl md:text-6xl punctuation -rotate-12">
                        " M' aggio pigghiato o' core "
                    </div>

                </div>
            </transition>
        </section>


        <section class="z-50 mt-40">
            <div>
                <div class="flex flex-col items-center justify-center text-3xl md:text-5xl xl:text-6xl w-full px-4 gap-y-6
                md:gap-y-14 xl:gap-y-20 font-bold"
                     style="font-family: 'SophiaMartini', cursive">
                    <div class="flex flex-col gap-y-6 md:gap-y-14 xl:flex-row">
                        <div>
                            Gabriele<span class="punctuation">,</span> Anna<span class="punctuation">,</span>
                        </div>
                        <div>
                            Giorgia e<span class="punctuation">...</span>Mia
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-6 md:gap-y-14 xl:flex-row gap-x-8">
                        <div>
                            sono felici di annunciarvi
                        </div>
                        <div>
                            che<span class="punctuation">...</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="z-50 md:hidden">
                <div class="flex flex-col items-center justify-center mx-auto mb-20">
                    <img
                        class="max-w-full xl:max-w-6xl z-50"
                        :src="fotoFamiglia"
                        alt=""
                        data-aos="flip-left"
                        data-aos-delay="500"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                </div>
            </div>
            <div class="hidden z-50 md:block">
                <div class="flex flex-col items-center justify-center mx-auto mb-20">
                    <img
                        class="max-w-4xl xl:max-w-6xl z-50"
                        :src="fotoFamiglia"
                        alt=""
                        data-aos="flip-left"
                        data-aos-delay="500"
                        data-aos-offset="300"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                </div>
            </div>
            <img
                class="md:hidden max-w-xs sm:max-w-sm mx-auto -mt-40"
                :src="fotoDrago"
                alt=""
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-offset="300"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
            <img
                class="hidden md:block md:max-w-xl xl:max-w-3xl mx-auto md:-mt-64"
                :src="fotoDrago"
                alt=""
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-offset="500"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
            <div
                class="md:hidden"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-offset="300"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <div class="font-bold text-4xl md:text-6xl punctuation -rotate-12 -mt-6 mb-20 xl:mb-32">
                    " L'Amore vince su tutto... "
                </div>
            </div>
            <div
                class="hidden md:block"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-offset="500"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <div class="font-bold text-4xl md:text-6xl punctuation -rotate-12 -mt-6 mb-20 xl:mb-32">
                    " L'Amore vince su tutto... "
                </div>
            </div>

        </section>

        <section
            class="z-50 w-full"
        >
            <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="500"
                data-aos-offset="500"
                data-aos-duration="3000"
            >
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
                text-xl my-16 bg-pink-100 hover:bg-pink-300 border border-pink-400 animate__animated animate__heartBeat
                animate__infinite"
                    @click="openFormModal = true"
                    style="color: rgb(89,77,53)"
                >
                    CLICCA QUI
                </button>

                <div class="mt-20 mb-16">
                    <div class="text-sm font-bold">
                        Vuoi contribuire al nostro viaggio di nozze?
                    </div>
                    <a
                        class="my-1 inline-flex items-center px-2 py-1 rounded-lg w-fit font-bold border-gray-300 mx-auto z-50
                     bg-pink-100 hover:bg-pink-300 border border-pink-400"
                        href="http://listanozze.gattinonionline.it/installations/siapDesign/GattinoniTravelNetwork/"
                        style="color: rgb(89,77,53)"
                        target="_blank"
                    >
                        Vai alla lista Nozze
                    </a>
                    <div class="z-50 text-sm">
                        Chiave d'accesso (Invitati): <b>Fedemiky</b>
                    </div>
                    <div class="z-50 my-8 text-sm font-bold">
                        o
                    </div>
                    <div class="z-50 my-8 text-sm font-bold">
                        <div >
                            modalità speedy...jamme jà...
                        </div>
                        <div>
                            IBAN: IT39X0344214239000054831009
                        </div>
                    </div>
                </div>
            </div>

        </section>



        <VueFinalModal
            v-model="openFormModal"
            v-slot="{ close }"
            classes="flex justify-center items-center my-4"
            content-class="relative flex flex-col max-h-full mx-4 px-2 pb-8 border w-full md:w-3/4 xl:w-1/2 rounded-lg
            bg-pink-50 overflow-y-auto"
        >
            <button class="absolute top-3 right-6 font-bold" @click="closeModal">
                X
            </button>
            <div
                class="font-bold text-2xl md:text-4xl my-12 mb-8 text-center"
                style="font-family: 'SophiaMartini', cursive"
            >
                Vuoi inviarci una dedica o un pensiero<span class="punctuation text-5xl md:text-7xl">?</span>
            </div>
            <div class="flex flex-col z-50 w-full px-4 justify-center">
                <form action="#" method="POST"  @submit.prevent="recaptcha"
                      class="flex flex-col gap-y-6 w-full md:w-3/4 xl:w-1/2 mx-auto">
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


        <div class="flex items-center justify-center z-50 mt-40 w-full text-xs font-bold">
            <div>
                Realizzazione grafica e tecnica by DVWebSolutions
            </div>
            <div>
                <img class="w-20 mx-auto " :src="logo" alt="">
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
    z-index: 20;
}

.punctuation{
    font-family: 'Sassy Frass', cursive
}

.v-enter-active,
.v-leave-active {
    transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.grecaptcha-badge {
    display: none !important;
}


</style>
