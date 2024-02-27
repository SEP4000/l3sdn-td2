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


