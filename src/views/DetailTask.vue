<template>
           <div class="w-full max-w-2xl relative mx-auto my-6">
                <div class="">
                    <h1 class="text-center p-6 text-white text-xl uppercase font-bold">Vue to do list</h1>

                    <div class="flex flex-col">
                        <h3 class="px-4 py-2 capitalize text-md text-center text-white">
                            Enter your todo
                        </h3>
                        <div class="flex justify-center items-center">
                            <input
                                class="w-full px-4 border-2 border-amber-400 outline-none placeholder-gray-900 rounded-md py-2 max-w-[300px] text-black"
                                type="text" placeholder="Enter to do" />
                            <button
                                class="bg-[#795cf6] text-white px-4 leading-[44px] ml-2 transition-all rounded-md hover:text-[#795cf6] hover:bg-white">Create</button>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <div class="list p-8">
                        <div class="flex items-center p-6 bg-[#3c3756] mb-4 rounded-xl mr-4">
                            <input checked id="orange-checkbox" type="checkbox" value=""
                                class="w-4 h-4 accent-orange-500 text-white text-orange-500 bg-gray-100 border-gray-300 rounded">
                            <label for="orange-checkbox"
                                class="ml-2 block cursor-pointer w-full text-sm text-white dark:text-gray-300">Danh rang rua
                                mat</label>
                        </div>
                        <div class="flex items-center p-6 bg-[#3c3756] mb-4 rounded-xl mr-4">
                            <input checked id="orange-checkbox" type="checkbox" value=""
                                class="w-4 h-4 accent-orange-500 text-white text-orange-500 bg-gray-100 border-gray-300 rounded">
                            <label for="orange-checkbox"
                                class="ml-2 block cursor-pointer w-full text-sm text-white dark:text-gray-300">Danh rang rua
                                mat</label>
                        </div>
                        <div class="flex items-center p-6 bg-[#3c3756] mb-4 rounded-xl mr-4">
                            <input checked id="orange-checkbox" type="checkbox" value=""
                                class="w-4 h-4 accent-orange-500 text-white text-orange-500 bg-gray-100 border-gray-300 rounded">
                            <label for="orange-checkbox"
                                class="ml-2 block cursor-pointer w-full text-sm text-white dark:text-gray-300">Danh rang rua
                                mat</label>
                        </div>
                        <div class="flex items-center p-6 bg-[#3c3756] mb-4 rounded-xl mr-4">
                            <input checked id="orange-checkbox" type="checkbox" value=""
                                class="w-4 h-4 accent-orange-500 text-white text-orange-500 bg-gray-100 border-gray-300 rounded">
                            <label for="orange-checkbox"
                                class="ml-2 block cursor-pointer w-full text-sm text-white dark:text-gray-300">Danh rang rua
                                mat</label>
                        </div>
                    </div>
                </div>
        </div>
</template>
