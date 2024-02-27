<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom du Produit</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Voir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(produit, index) in l" :key="index">
            <td>{{ produit.nom }}</td>
            <td>{{ produit.prix }}</td>
            <td>{{ produit.description }}</td>
            <td><router-link :to="'/produit/' + produit.nom">Voir le produit</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  const l = [
    {
      nom: "Iphone 15",
      prix: 1000,
      description: "Le dernier modèle de l'iPhone",
    },
    {
      nom: "Samsung S24",
      prix: 700,
      description: "Le dernier modèle de Samsung"
    },
    {
      nom: "Huawei P30",
      prix: 500,
      description: "Le dernier modèle de Huawei"
    }
  ];
  </script>
  