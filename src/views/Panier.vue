<template>
    <div>
      <h2>Panier</h2>
      <div v-if="panier.length === 0">
        <p>Votre panier est vide.</p>
      </div>
      <div v-else>
        <div v-for="(article, index) in panier" :key="index">
          <p>{{ article.nom }} - {{ article.prix }}€ - Quantité: {{ article.quantite }}</p>
          <button @click="supprimerDuPanier(index)">Supprimer</button>
        </div>
        <p>Total: {{ calculerTotal() }}€</p>
        <button @click="finaliserCommande">Finaliser la commande</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Simulation des articles dans le panier
  const panier = ref([]);
  
  const router = useRouter();
  
  const ajouterAuPanier = (produit) => {
    const index = panier.value.findIndex(item => item.nom === produit.nom);
    if (index !== -1) {
      panier.value[index].quantite++;
    } else {
      panier.value.push({ ...produit, quantite: 1 });
    }
  };
  
  const supprimerDuPanier = (index) => {
    panier.value.splice(index, 1);
  };
  
  const calculerTotal = () => {
    return panier.value.reduce((total, article) => total + (article.prix * article.quantite), 0);
  };
  
  const finaliserCommande = () => {
    // Logique pour finaliser la commande, par exemple redirection vers une page de paiement
    // Pour l'exemple, nous allons simplement rediriger vers la page d'accueil
    router.push('/');
  };
  
  </script>
  