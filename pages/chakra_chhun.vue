<template>
    <div class="vdo_start w-screen h-screen">
      <video class="fixed left-[50%] -translate-x-1/2 transform w-full max-w-fit h-screen object-cover mx-auto my-0" src="https://ik.imagekit.io/t8fcd5f8h/scr001.mp4?updatedAt=1747383494292" autoplay muted loop></video>
      <div class="fixed w-full h-full bottom-[25%]  flex flex-col items-center justify-end">
        <img class="w-full md:max-w-[75vw] h-auto" src="/assets/image/demo/line-name.png" alt="" srcset="">
        <!-- <img class="w-[50%] md:max-w-[30vw] h-auto heartBeat" src="/assets/image/demo/btn-open.png" alt="" srcset=""> -->
        <Button class="w-[50%] md:max-w-[30vw] h-auto" imgLink="/assets/image/demo/btn-open.png" />
      </div>
    </div>
</template>

  <script setup>
    import Button from '@/components/Button.vue'
    
  </script>
  