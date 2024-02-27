<template>
    <div>
      <h1>Détails du produit {{ produitId }}</h1>
      <div v-if="produit">
        <p><strong>Nom :</strong> {{ produit.nom }}</p>
        <p><strong>Prix :</strong> {{ produit.prix }}</p>
        <p><strong>Description :</strong> {{ produit.description }}</p>
      </div>
      <div v-else>
        <p>Produit non trouvé.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['produitId'],
  }
  </script>
  
  <style>
  /* Ajoutez vos styles ici si nécessaire */
  </style>
  