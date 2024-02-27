<template>
    <div>
      <header>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
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
              <button><td><RouterLink to="/produit1">Découvrire</RouterLink></td></button>
            </tr>
            <tr>
              <td>Ordinateur</td>
              <button><td><RouterLink to="/produit2">Découvrire</RouterLink></td></button>
            </tr>
            <tr>
              <td>Télévision</td>
              <button><td><RouterLink to="/produit3">Découvrire</RouterLink></td></button>
            </tr>
            <tr>
              <td>Montre</td>
              <button><td><RouterLink to="/produit4">Découvrire</RouterLink></td></button>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  </template>