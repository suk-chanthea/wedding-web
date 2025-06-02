<template>
    <div class="@container">
      <img class="fixed w-full h-full object-cover" src="/assets/image/demo/bg/bg.svg">
      <div class="fixed w-full h-full bottom-[25%]  flex flex-col items-center justify-end">
        <img class="w-full md:max-w-[75vw] h-auto" src="/assets/image/demo/line/open.png" alt="" srcset="">
        <!-- <img class="w-[50%] md:max-w-[30vw] h-auto heartBeat" src="/assets/image/demo/btn-open.png" alt="" srcset=""> -->
        <Button class="w-[50%] md:max-w-[30vw] h-auto" imgLink="/assets/image/demo/btn/open.png" />
        <BaseButton class="w-[50%] md:max-w-[30vw] h-auto" variant="transparent" @click="onClick">
          <img class="w-full h-full" src="/assets/image/demo/btn/open.png" alt="">
        </BaseButton>
      </div>
    </div>
</template>


<script setup>
    import Button from '/components/Button.vue'
    import BaseButton from '/components/BaseBtn.vue'

    function onClick() {
      alert('Button clicked!')
    }
</script>


