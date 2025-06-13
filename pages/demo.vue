<template>
  <div class="@container font-battambang">
    <div id="start-container" class="absolute w-full h-full z-50 hidden">
      <img class="absolute w-full h-full object-cover z-10" src="/assets/image/demo/bg/bg.svg">
      <div class="absolute w-full h-full bottom-[25%]  flex flex-col items-center justify-end z-20">
        <img class="w-full md:max-w-[75vw] h-auto" src="/assets/image/demo/line/open.png" alt="" srcset="">
        <!-- <img class="w-[50%] md:max-w-[30vw] h-auto heartBeat" src="/assets/image/demo/btn-open.png" alt="" srcset=""> -->
        <!-- <Button class="w-[50%] md:max-w-[30vw] h-auto" imgLink="/assets/image/demo/btn/open.png" /> -->
        <BaseButton class="w-[50%] md:max-w-[30vw] h-auto" variant="transparent" @click="onClick">
          <img class="w-full h-full" src="/assets/image/demo/btn/open.png" alt="">
        </BaseButton>
      </div>
    </div>
    <div id="end-container" class="absolute w-full h-full z-10">
      <img class="fixed w-full h-full object-cover z-10" src="/assets/image/demo/bg/in-bg.svg">
      <div class="absolute w-full h-full z-20">
        <div id="main-path" class="flex flex-col h-[100vh] pt-[10vh]">
          <div class="title font-bold text-2xl text-center mb-4">សិរីមង្គលពិធីភ្ជាប់ពាក្យ</div>
          <div class="parent flex items-center justify-evenly text-lg">
            <div class="male-side">
              <div class="father"><span>លោក</span><span class="font-bold ml-2">ហ៊ុន ឡាក់</span></div>
              <div class="mother"><span>លោកស្រី</span><span class="font-bold ml-2">ងួន ផល្លី</span></div>
            </div>
            <div class="female-side">
              <div class="father"><span>លោក</span><span class="font-bold ml-2">សីម​​ ហេងទ្រី</span></div>
              <div class="mother"><span>លោកស្រី</span><span class="font-bold ml-2">ប៊ុនស្រីមុំ</span></div>
            </div>
          </div>
          <div class="text-center text-lg font-bold my-3">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</div>
          <div class="text-center text-sm">សម្ដេច​​ ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្សម្ដេច​​ ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្សម្ដេច​​
            ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្សម្ដេច​​ ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្</div>
          <div class="flex items-center justify-evenly my-3">
            <div class="flex flex-col items-center">
              <span>កូនប្រុសនាម</span>
              <span class="font-bold text-lg">ហ៊ុន​ ចត្រា</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="/assets/image/demo/logo/logo.svg" alt="logo" class="w-20 h-20">
              <span class="text-xs">ជាគូនឹង</span>
            </div>
            <div class="flex flex-col items-center">
              <span>កូនស្រីនាម</span>
              <span class="font-bold text-lg">លឹម ស្រីនាង</span>
            </div>
          </div>
          <div class="text-center text-sm">សម្ដេច​​ ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្សម្ដេច​​ ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្សម្ដេច​​
            ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្សម្ដេច​​ ឯក្ដកថ្ដកថ្ដកថដ្ថក្ក្</div>
          <div class="text-center text-sm font-bold my-3">ត្រូវនឹងថ្ងៃទី១៦​ ខែមិថុនា​ ឆ្នាំ២០២៦ វេលាម៉ោង ០៨:៤៥
            នាទីព្រឹក​<br>សង្កាត់ស្រះចក ខណ្ឌដូនពេញ រាធនីភ្នំពេញ</div>
          <BaseButton class="w-[50%] md:max-w-[30vw] h-auto mx-auto mt-5" variant="transparent" @click="onClick">
            <img class="w-full h-full" src="/assets/image/demo/btn/save-date.png" alt="">
          </BaseButton>
        </div>
        <div id="event-countdown" class="w-full h-full animate-fade-in">
          <img src="/assets/image/demo/line/open.png" alt="">
        </div>
        <div id="map-container" class="w-full h-full" ref="mapContainer">
          <div class="title flex items-center gap-2 my-3">
            <span class="w-10 h-0.5 bg-yellow-400 rounded-full"></span>
            <span class="text-lg font-bold">ទីតាំងកម្មវិធី​ / LOCATION</span>
          </div>
          <div class="list grid grid-cols-1 gap-2">
            <div class="item">
              <img src="/assets/image/demo/map/drawing.png" alt="" class="w-full h-full object-cover">
            </div>
            <div class="item">
              <img src="/assets/image/demo/map/img.png" alt="" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
        <div id="gallery-container" class="w-full h-full" ref="galleryContainer">
          <div class="title flex items-center gap-2 my-3">
            <span class="w-10 h-0.5 bg-yellow-400 rounded-full"></span>
            <span class="text-lg font-bold">វិចិត្រសាល​ / PHOTO GALLERY</span>
          </div>
          <div class="list grid grid-cols-1 gap-2">
            <div class="item">
              <img src="/assets/image/demo/gallery/img-1.jpg" alt="" class="w-full h-full object-cover">
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="item">
                <img src="/assets/image/demo/gallery/img-2.jpg" alt="" class="w-full h-full object-cover">
              </div>
              <div class="item">
                <img src="/assets/image/demo/gallery/img-3.jpg" alt="" class="w-full h-full object-cover">
              </div>
            </div>
          </div>
        </div>
        <footer class="fixed bottom-8 left-1/2 -translate-x-1/2 w-[80%] flex items-center justify-evenly gap-1.5">
          <button
            class="w-[50%] md:max-w-[30vw] h-10 mx-auto mt-5 rounded-md flex items-center justify-center bg-green-200"
            variant="transparent" @click="onClick">
            <img class="w-[60%] h-[60%]" src="/assets/image/demo/ico/date.svg" alt="">
          </button>
          <button
            class="w-[50%] md:max-w-[30vw] h-10 mx-auto mt-5 rounded-md flex items-center justify-center bg-green-200"
            variant="transparent" @click="scrollTo('map-container')">
            <img class="w-[60%] h-[60%]" src="/assets/image/demo/ico/map.svg" alt="">
          </button>
          <button
            class="w-[50%] md:max-w-[30vw] h-10 mx-auto mt-5 rounded-md flex items-center justify-center bg-green-200"
            variant="transparent" @click="scrollTo('gallery-container')">
            <img class="w-[60%] h-[60%]" src="/assets/image/demo/ico/gallery.svg" alt="">
          </button>
          <button
            class="w-[50%] md:max-w-[30vw] h-10 mx-auto mt-5 rounded-md flex items-center justify-center bg-green-200"
            variant="transparent" @click="onClick">
            <img class="w-[60%] h-[60%]" src="/assets/image/demo/ico/msg.svg" alt="">
          </button>
        </footer>
      </div>
      <div id="audio-container" class="absolute z-30">
        <audio preload="auto">
          <source src="/assets/audio/open.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</template>

<style scoped>
div, span, .ft-btb{
  font-family: "Battambang", system-ui;
  font-weight: 500;
  font-style: normal;
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-out {
  animation: fadeOut 3s forwards;
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-in-out both;
}
</style>

<script setup>
import Button from '/components/Button.vue'
import BaseButton from '/components/BaseBtn.vue'
import { ref, onMounted } from 'vue'

const galleryContainer = ref(null)
const mapContainer = ref(null)
const aboutContainer = ref(null)
const contactContainer = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
        setTimeout(() => {
          entry.target.classList.remove('animate-fade-in')
        }, 1200)
      }
    })
  })

  // Observe multiple containers
  const containers = [
    galleryContainer.value,
    mapContainer.value, 
    aboutContainer.value,
    contactContainer.value
  ]

  containers.forEach(container => {
    if (container) {
      observer.observe(container)
    }
  })
})

function onClick() {
  const container = document.getElementById('start-container')
  const audio = document.querySelector('audio')

  // Play audio with error handling
  audio.play()

  // Fade out animation
  container?.classList.add('animate-fade-out')
  setTimeout(() => {
    container?.classList.add('hidden')
  }, 3000)
}

function scrollTo(path) {
  const pathView = document.getElementById(path)
  pathView?.scrollIntoView({ behavior: 'smooth' })
  pathView?.classList.add('animate-fade-in')
  setTimeout(() => {
    pathView?.classList.remove('animate-fade-in')
  }, 1200)
}
</script>
