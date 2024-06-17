<template>
  <header>
    <nav class="p-4 md:max-container">
      <div class="flex justify-between items-center">
        <div class="flex justify-between items-center gap-3">
          <div class="mt-3">
            <span class="material-symbols-outlined text-gray-500 font-bold">
              menu
            </span>
          </div>
          <div>
            <h1 class="font-bold text-3xl">sneakers</h1>
          </div>
        </div>
        <div class="flex justify-between items-center gap-6">
          <div class="mt-2">
            <span class="material-symbols-outlined"> shopping_cart </span>
            <span
              class="absolute border border-red-400 rounded-2xl text-white bg-primary px-2 py-0 right-16 top-5 text-[10px]"
              >3</span
            >
          </div>
          <div>
            <a href="#">
              <img src="/images/image-avatar.png" alt="" class="w-8" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup></script>
<style scoped></style>
