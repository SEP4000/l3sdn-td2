<template>
    <div>
      <header>
        <div class="wrapper">
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </nav>
        </div>
      </header>
      <main>
        <table>
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
  