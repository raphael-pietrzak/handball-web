<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/api/api'; // Assurez-vous d'importer axios ou une instance d'api

const router = useRouter();
const user = ref({ username: '', password: '' });
const errorMessage = ref(null);
const loading = ref(false);

const login = async () => {
  loading.value = true
  try {
    const response = await api.login(user.value);
    console.log(response.data.token); // Afficher le token dans la console
    localStorage.setItem('token', response.data.token); // Enregistrer le token
    loading.value = false;
    router.push('/dashboard'); // Rediriger vers une autre page après connexion
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      errorMessage.value = "Identifiants invalides";
    } else {
      errorMessage.value = "Une erreur s'est produite. Veuillez réessayer.";
    }
  }

  loading.value = false
};
</script>

<template>
  <div class="flex align-items-center justify-content-center">
    <div class="surface-section w-full md:w-6 p-6 md:p-2">
      <div class="mb-5">
        <div class="logo w-full h-15rem"></div>
        <div class="text-900 text-3xl font-medium mb-3">Bienvenue</div>
        <span class="text-600 font-medium mr-2">Pas de compte ?</span>
        <span class="font-medium underline p-blue-500 cursor-pointer" @click="this.$router.push('/signup')">Inscrivez-vous !</span>
      </div>

      <div class="flex flex-column gap-3">
        <IftaLabel>
          <InputText v-model="user.username" id="email" class="w-full mb-3" :disabled="loading" />
          <label for="email" class="block text-900 font-medium">Email</label>
        </IftaLabel>

        <IftaLabel>
          <Password v-model="user.password" :feedback="false" input-id="password" class="w-full" :disabled="loading" />
          <label for="password" class="block text-900 font-medium">Mot de passe</label>
        </IftaLabel>

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox id="rememberme2" :binary="true" v-model="checked2" class="mr-2"></Checkbox>
            <label for="rememberme2">Se rappeler de moi</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Mot de passe oublié</a>
        </div>

        <Button label="Se connecter" icon="pi pi-user" class="w-full p-3" @click="login" :loading="loading" />

        <!-- Affichage de l'erreur -->
        <Message v-if="errorMessage" icon="pi pi-times-circle" severity="error">{{ errorMessage }}</Message>
      </div>
    </div>
  </div>
</template>

<style>
html {
  width: 100%;
  height: 100%;
}

input#password {
  width: 100% !important;
}
</style>