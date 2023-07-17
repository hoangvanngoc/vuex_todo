<template>
    <header>
        <div class="relative w-full p-4 flex justify-between bg-black" >
            <div class="flex items-center">
               <button class="border-0 bg-transparent text-white text-2xl p-3 mx-2">
                   <font-awesome-icon icon="fa-solid fa-bars" />
               </button>
               <div class="text-xl text-white">
                 Keep
               </div>
            </div>
            <div class="flex">
                <form action="">
                    <div class="h-12 ml-14 mr-12 overflow-hidden">
                        <input class="bg-transparent border-none h-12 w-full outline-none" type="text" placeholder="Tìm Kiếm" />
                    </div>
                    <button aria-label="close search">
                        <font-awesome-icon icon="fa-brands fa-searchengin" /> 
                    </button>
                    <button aria-label="Tìm Kiếm">
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                    </button>
                </form>
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
