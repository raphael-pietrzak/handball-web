<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/api/api'; // Assurez-vous d'importer axios ou une instance d'api

const router = useRouter();
const user = ref({ username: '', password: '', name: '' });
const errorMessage = ref(null);

const login = async () => {
    try {
        const response = await api.register(user.value); 
        console.log(response.data.token); // Afficher le token dans la console
        localStorage.setItem('token', response.data.token); // Enregistrer le token
        errorMessage.value = null;
        router.push('/dashboard'); // Rediriger vers une autre page après connexion
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
            errorMessage.value = "Identifiants invalides";
        } else {
            errorMessage.value = "Une erreur s'est produite. Veuillez réessayer.";
        }
    }
};
</script>

<template>
  <div class="flex align-items-center justify-content-center">
    <div class="surface-section w-full md:w-6 p-6 md:p-2">
      <div class="mb-5">
        <div class="logo w-full h-15rem"></div>
        <div class="text-900 text-3xl font-medium mb-3">Bienvenue</div>
        <span class="text-600 font-medium mr-2">Pas de compte ?</span>
        <a class="font-medium no-underline text-blue-500 cursor-pointer" href="/signup">Inscrivez-vous !</a>
      </div>

      <!-- Affichage de l'erreur -->
      <div v-if="errorMessage" class="text-red-500 mb-3">{{ errorMessage }}</div>

      <div>

        <IftaLabel>
          <label for="name" class="block text-900 font-medium mb-2">Nom</label>
            <InputText v-model="user.name" id="name" type="text" placeholder="Nom" class="w-full mb-3 p-3" />   
        </IftaLabel>


        <IftaLabel>
          <label for="email2" class="block text-900 font-medium mb-2">Email</label>
          <InputText v-model="user.username" id="email2" type="text" placeholder="Email address" class="w-full mb-3 p-3" />
        </IftaLabel>

        <IftaLabel>
          <label for="password2" class="block text-900 font-medium mb-2">Mot de passe</label>
          <InputText v-model="user.password" id="password2" type="password" placeholder="Password" class="w-full mb-3 p-3" />
        </IftaLabel>

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox id="rememberme2" :binary="true" v-model="checked2" class="mr-2"></Checkbox>
            <label for="rememberme2">Se rappeler de moi</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Mot de passe oublié</a>
        </div>

        <Button label="Se connecter" icon="pi pi-user" class="w-full p-3" @click="login" />
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
    width: 100%;
    height: 100%;
}
.logo {
    background-size: contain;
    background-repeat: no-repeat;
}

</style>