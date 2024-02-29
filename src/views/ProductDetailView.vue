<template>
    <div>
      <h2>Détails du produit</h2>
      <div>
        <p><strong>Nom du produit:</strong> {{ produit.nom }}</p>
        <p><strong>Prix:</strong> {{ produit.prix }}€</p>
        <p><strong>Description:</strong> {{ produit.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const produit = ref({}); 
  
  const getProduitDetails = () => {
    const nom = $route.params.nom; 
    produit.value = l.find(produit => produit.nom === nom) || {};
  };
  
  onMounted(() => {
    getProduitDetails(); 
  });
  </script>
  
  <style scoped>
  </style>
  