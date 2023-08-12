<template>
  <section class="h-[100vh] w-full space-y-10 bg-sky-100 flex flex-col justify-center items-center"
  :class="[isSubmit && 'bg-green-100']"
  >
    <h1 data-greet="greet" class="text-3xl"> Good Morning{{ greetingMsg && ", "+greetingMsg }}</h1>
    <form data-form="form" @submit.prevent="submitHandler" class=" shadow-lg bg-sky-50 p-5 rounded-lg w-[450px]"
    :class="[isSubmit && 'bg-green-50']"
    >
      <div class="space-y-3 pt-3">
        <div class="flex justify-between p-3">
          <label>User Name</label>
          <input data-name="name" v-model="userName" class="border border-transparent focus:outline-none focus:border-sky-200 ring-1 focus:ring-sky-400 rounded-sm" :class="[isSubmit && 'focus:border-green-300 focus:ring-1 focus:ring-green-300']"/>
        </div>
        
        <div class="flex justify-between p-3">
          <label>User Email</label>
          <input data-email="email" v-model="userEmail" class="border border-transparent focus:outline-none focus:border-sky-200 ring-1 focus:ring-sky-400 rounded-sm" type="email" :class="[isSubmit && 'focus:border-green-300 focus:ring-1 focus:ring-green-300']"/>
        </div>
      </div>

      <div class="space-y-6 my-10">
          <p class="text-center">How are you? (Optional)</p>
          <ul data-HAY="HAY" class="flex justify-evenly">
            <li :class="[isSubmit && 'bg-green-100']" class="bg-sky-100 p-2 px-4 rounded-md space-x-2"><input v-model="picked" id="Awsome" value="Awsome" type="radio"/> <label for="Awsome" >Awsome</label> </li>
            <li :class="[isSubmit && 'bg-green-100']" class="bg-sky-100 p-2 px-4 rounded-md space-x-2"><input v-model="picked" id="Great" value="Great" type="radio"/> <label for="Great" >Great</label> </li>
            <li :class="[isSubmit && 'bg-green-100']" class="bg-sky-100 p-2 px-4 rounded-md space-x-2"><input v-model="picked" id="Fantastic" value="Fantastic" type="radio"/> <label for="Fantastic" >Fantastic</label> </li>
          </ul>          
      </div>

      <div class="flex justify-evenly p-5">
        <button 
        data-submit="submit"
        type="submit" 
        class="cursor-pointer py-2 px-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 ring-2 ring-sky-300 rounded-md"
        :disabled="isSubmit"
        :class="[isSubmit && 'text-gray-400 cursor-not-allowed']"
        >
          {{ isSubmit ? "Submitted" : "Submit" }}
        </button>

        <button
        data-clear="clear"
        type="button" 
        @click="clearHandler" 
        class="py-2 px-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 ring-2 bg-red-100 ring-red-200 rounded-md">
          Clear All
        </button>
      </div>
    </form>

    <p data-success="success" v-if="isSubmit" class="text-green-800">{{ userEmail }} successfully subscribed the newsletter.</p>
    <p data-errorMsg="errorMsg" v-if="showErrorMsg" class="text-red-800">**All fields are required.</p>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
const greetingMsg = ref('');
const userName = ref('');
const userEmail = ref('');
const picked = ref('');
const isSubmit = ref(false);
const showErrorMsg = ref(false);

const timeout = ref(false)

watch([userName, userEmail], ()=>{
  isSubmit.value = false;
  greetingMsg.value = userName.value;
  showErrorMsg.value = false;
})

function clearHandler(){
  console.log('clear');
  userEmail.value = '';
  userName.value = '';
  picked.value = '';
  showErrorMsg.value = false;
}

function submitHandler(){
  console.log('submit');
  (userName.value && userEmail.value) && (isSubmit.value = true);
  (!userName.value || !userEmail.value) && (showErrorMsg.value = true);
}
</script>