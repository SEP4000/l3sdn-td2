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
]
</script>

<template>
    <table class="product-table">
        <thead>
            <tr>
                <th>Nom du Produit</th>
                <th>Prix</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="produit in l" :key="produit.nom">
                <td>{{ produit.nom }}</td>
                <td>{{ produit.prix }}€</td>
                <td>{{ produit.description }}</td>
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
