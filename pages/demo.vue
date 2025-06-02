<template>
  <div class="@container">
    <div id="start-container" class="absolute w-full h-full z-50">
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
      <img class="absolute w-full h-full object-cover z-10" src="/assets/image/demo/bg/bg.svg">
      <div class="absolute w-full h-full z-20">
        <div id="main-path" class="">
          <div class="title">សិរីមង្គលពិធីភ្ជាប់ពាក្យ</div>
          <div class="parent">
            <div class="male-side">
              <div class="father"><span>លោក</span><span>ហ៊ុន ឡាក់</span></div>
              <div class="mother"><span>លោកស្រី</span><span>ងួន ផល្លី</span></div>
            </div>
            <div class="female-side">
              <div class="father"><span>លោក</span><span>សីម​​ ហេងទ្រី</span></div>
              <div class="mother"><span>លោកស្រី</span><span>ប៊ុនស្រីមុំ</span></div>
            </div>
          </div>
        </div>
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
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.animate-fade-out {
    animation: fadeOut 3s forwards;
}
</style>

<script setup>
import Button from '/components/Button.vue'
import BaseButton from '/components/BaseBtn.vue'

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
</script>
