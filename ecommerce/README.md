# Exercicio proposto por @midudev:
Para practicar co uso de useContext e aprender a facer unha tenda sinxela, seguín este tutorial

## 1. Ecommerce

#### Mostra unha lista de productos que veñen dun JSON
    Esto resolvino simplemente facendo un .map e logo apliquei estilos. A mellor forma de estilar unha lista e que sexa responsive dunha maneira sinxela é con grid (repasar gods.css)
#### Engade un filtro por categoría e por prezo
    Primeiro hai que crear un estado para os filtros e logo usa-lo método .filter para filtra-la lista coas condicions que indiquemos (maior que tal prezo, igual a categoria X...)

✨ Fai uso de useContext para evitar pasar props innecesarias.

## 2. Carrito:

- Fai que se poida engadi-los productos a un carrito.
- Fai que se poida elimina-los productos do carrito.
- Fai que se poida modifica-la cantidade de productos do carrito.
- Sincroniza os cambios do carrito coa lista de productos.
- Garda no localStorage o carrito para que se recupere ao recarga-la páxina
