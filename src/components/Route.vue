<template>
  <div>
    <main>
      <table class="product-table">
        <thead>
          <tr>
            <th>Nom du Produit</th>
            <th>Lien</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Téléphone</td>
            <td><router-link to="/produit1">Découvrir</router-link></td>
          </tr>
          <tr>
            <td>Ordinateur</td>
            <td><router-link to="/produit2">Découvrir</router-link></td> 
          </tr>
          <tr>
            <td>Télévision</td>
            <td><router-link to="/produit3">Découvrir</router-link></td> 
          </tr>
          <tr>
            <td>Montre</td>
            <td><router-link to="/produit4">Découvrir</router-link></td> 
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
</script>

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

.product-table a {
  text-decoration: none;
  color: blue;
  outline: none;
}

.product-table a:hover {
  color: darkblue;
}
</style>
