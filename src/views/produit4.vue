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


