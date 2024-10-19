<script setup>
    import { ref } from 'vue';
    import NavbarComponent from '@/components/NavbarComponent.vue';

    import api from '@/api/api'; // Assurez-vous d'importer axios ou une instance d'api
    import { onMounted } from 'vue';

    const user = ref({ lastName: '', name: '', email: '' });


    const profileInfos = async () => {
        try {
            // get profile with token
            const token = localStorage.getItem('token');
            const response = await api.getProfile(token);
            user.value = response.data;
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur', error);
        }
    };

    onMounted(() => {
        profileInfos();
    });


    

    const isEditing = ref(false);

    //array contenant les champs; initialisé vide


    //array temporaire
        const userTmp = ref({
        lastName: '',
        firstName: '',
        email: '',
/*         pwd: '' */
    });

/*     // Fonction pour récupérer les données utilisateur depuis une API
    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://rapidapi.com/belchiorarkad-FqvHs2EDOtP/api/handball-full-api/player-detail');
            user.value = response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur', error);
        }
    };
 */
/*     // Récupérer les données utilisateur
    onMounted(() => {
        fetchUserData();
    }); */

    // Lorsque l'on appuie sur le bouton modifier, on copie les valeurs dans userTmp
    const editProfile = () => {
        isEditing.value = true;
        userTmp.value = { ...user.value };
    };

    // Lorsqu'on appuie sur sauvegarder, user prend la valeur de userTmp
/*     const saveProfile = async () => {
        try {
            await axios.put('https://api.example.com/user/1', userTmp.value); 
            user.value = { ...userTmp.value };
            isEditing.value = false;
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données utilisateur', error);
        }
    };
 */
    const saveProfile = () => {
        user.value = { ...userTmp.value };
        isEditing.value = false;
    }

    const cancelEdit = () => {
        isEditing.value = false;
    };
</script>

<template>
    <NavbarComponent />
    <div class="profile">
        <h2>Mon Profil</h2>
        
        <!-- si on est pas en mode édition, on affiche simplement les champs  -->
        <div v-if="!isEditing">
                <div class="show-field">
                    <div>
                        <p><strong>Rôle : </strong> Licencié</p>
                    </div>
                    <p><strong>Nom : </strong> {{ user.name }}</p>
                    <p><strong>Prénom : </strong> {{ user.firstName }}</p>
                    <p><strong>Email : </strong> {{ user.email }}</p>
<!--                     <p><strong>mot de passe </strong> {{ user.pwd }}</p> -->
                    <Button class="button" label="Modifier" @click="editProfile" />
                </div>
        </div>

        <!-- sinon, on est en mode édition et on peut modifier les champs -->
        <div v-else>
            <div class="container">
                <div class="field">
                    <label for="lastName">Nom : </label>
                    <InputText id="lastName" v-model="userTmp.lastName" required="required" />
                </div>
                
                <div class="field">
                    <label for="firstName">Prénom : </label>
                    <InputText id="firstName" v-model="userTmp.firstName" required="required"/>
                </div>
                
                <div class="field">
                    <label for="email">Email : </label>
                    <InputText id="email" v-model="userTmp.email" />
                </div>
                
<!--                 <div class="field">
                    <label for="pwd">Mot de passe : </label>
                    <InputText id="pwd" v-model="userTmp.pwd" required="required"/>
                </div> -->

                <Button label="Enregistrer" icon="pi pi-check" @click="saveProfile" />
                <Button class="p-button-secondary" label="Annuler" icon="pi pi-times" @click="cancelEdit" />
            </div>
        </div>
        </div>
  </template>
  
  <style>
  body {
    background-color:rgb(255, 255, 255);
  }
  
  .profile {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid rgb(91, 91, 91);
      border-radius: 8px; 
      background-color: #f9f9f9;
      margin-top: 25px;
  }

  .show-field, .field {
      display: flex;
      flex-direction: column; 
      align-items: center; 
      margin-bottom: 10px; 
  }

  .field {
      width: 100%;
      border: 1px solid #fdfdfd;
      border-radius: 4px;
      padding: 10px;
  }

  .button {
      align-self: center;
      transform: translateY(10px);
  }

  .container {
      padding: 20px;
  }
  .input {
    background-color: rgb(91, 91, 91);
  }

</style>