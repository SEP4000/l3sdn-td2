<script setup>
const l = [
    {
        nom: "Casio GSH-1000",
        prix: 200,
        description: "Le dernier model de Casio",
    },
    {
        nom: "Rolex RHA-1000",
        prix: 13000,
        description: "Le dernier mode de Rolex"
    },
    {
        nom: "Omega P30",
        prix: 1200,
        description: "Le dernier mode de Omega"
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
