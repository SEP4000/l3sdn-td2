<script setup>
const l = [
    {
        nom: "Lenovo Y540",
        prix: 1700,
        description: "Le dernier model de Lenovo",
    },
    {
        nom: "Dell XPS 13",
        prix: 1200,
        description: "Le dernier mode de Dell"
    },
    {
        nom: "HP P30",
        prix: 800,
        description: "Le dernier mode de HP"
    }
]
</script>

<template>
    <table class="product-table">
        <thead>
            <tr>
                <th>Nom du Produit</th>
                <th>Prix</th>
                <th>Description</th>
                <th>Voir le produit</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="produit in l" :key="produit.nom">
                <td>{{ produit.nom }}</td>
                <td>{{ produit.prix }}€</td>
                <td>{{ produit.description }}</td>
                <td><router-link :to="`/produit/${produit.nom}`">Voir le produit</router-link></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.product-table {
    width: 100%;
    border-collapse: collapse;
}

.product-table tr, .product-table td, .product-table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

.product-table td:first-child {
    font-weight: bold;
}
</style>
