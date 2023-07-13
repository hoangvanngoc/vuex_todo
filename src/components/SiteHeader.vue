<template>
    <header>
        <div class="relative w-full p-4 flex justify-between bg-black" >
            <div>
                <button class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white">NewList</button>
            </div>
            <div class="flex">
                <router-link :to="{ name: 'lists' }" class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white" >Lists</router-link>
                <button class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white">Schedule</button>
                <button class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white">Today</button>
            </div>
            <div class="flex">
                <button class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white">
                    grid
                </button>
                <button class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white">
                    check
                </button>
                <button class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white">
                    Search
                </button>
            </div>
        </div>
    </header>
</template>