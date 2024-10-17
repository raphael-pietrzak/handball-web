<script setup></script>

<template>
    
<div class="flex">
    <div class="surface-section w-full md:w-6 p-6 md:p-8">
        <div class="mb-5">
            <div class="logo w-full h-15rem"></div>
            <div class="text-900 text-3xl font-medium mb-3">Bienvenue</div>
            <span class="text-600 font-medium mr-2">Pas de compte ?</span>
            <a class="font-medium no-underline text-blue-500 cursor-pointer">Inscrivez-vous !</a>
        </div>
        <div>
            <IftaLabel>                
                <label for="email2" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email2" type="text" placeholder="Email address" class="w-full mb-3 p-3" />
            </IftaLabel>
        
            <IftaLabel>
                <label for="password2" class="block text-900 font-medium mb-2">Mot de passe</label>
                <InputText id="password2" type="password" placeholder="Password" class="w-full mb-3 p-3" />
            </IftaLabel>
        
            <div class="flex align-items-center justify-content-between mb-6">
                <div class="flex align-items-center">
                    <Checkbox id="rememberme2" :binary="true" v-model="checked2" class="mr-2"></Checkbox>
                    <label for="rememberme2">Se rappeler de moi</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Mot de passe oublié</a>
            </div>
        
            <Button label="Se connecter" icon="pi pi-user" class="w-full p-3"></Button>
        </div>
    </div>
    <div class="hidden md:block w-6 logo"></div>
</div>
</template>