<script setup>
const l = [
    {
        nom: "Iphone 15",
        prix: 1000,
        description: "Le dernier model de l'iPhone",
    },
    {
        nom: "Samsung S24",
        prix: 700,
        description: "Le dernier mode de Samsung"
    },
    {
        nom: "Huawei P30",
        prix: 500,
        description: "Le dernier mode de Huawei"
    }
]
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Nom du Produit</th>
                <th>Prix</th>
                <th>Description</th>
                <th>Voir</th>
            </tr>
            <tbody>
                <tr v-for="produit in l">
                    <td>{{produit.nom}}</td>
                    <td>{{produit.prix}}</td>
                    <td>{{produit.description}}</td>
                    <button><td><RouterLink to="/produit1_1">Voire le produit</RouterLink></td></button>
                </tr>
            </tbody>
        </thead>
    </table>
</template>
