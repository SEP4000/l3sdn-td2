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
                </tr>
            </tbody>
        </thead>
    </table>
</template>


