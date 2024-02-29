<script setup>
const l = [
    {
        nom: "Tv Samsung UHD",
        prix: 1000,
        description: "Le dernier model de Tv Samsung",
    },
    {
        nom: "Tv Android UHD",
        prix: 900,
        description: "Le dernier mode de Tv Android"
    },
    {
        nom: "Tv Apple UHD",
        prix: 3200,
        description: "Le dernier mode de Tv Apple"
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
