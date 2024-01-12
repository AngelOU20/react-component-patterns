# Existen varias formas de iterar un objeto en JSX.

Aquí te dejo algunas de ellas:

## Object.keys():

Este método devuelve un array con las propiedades enumerables de un objeto. Luego puedes usar el método map para iterar sobre estas propiedades.

```
{
  Object.keys(objeto).map(key => {
    return <div>{objeto[key]}</div>;
  })
}
```

## Object.values():

Este método devuelve un array con los valores de las propiedades enumerables de un objeto. Al igual que con Object.keys(), puedes usar map para iterar sobre estos valores.

```
{
  Object.values(objeto).map(value => {
    return <div>{value}</div>;
  })
}
```

## Object.entries():

Este método devuelve un array de arrays. Cada uno de estos arrays internos tiene dos elementos: la clave de la propiedad y su valor correspondiente. Puedes usar map para iterar sobre estos pares clave-valor.

```
{
  Object.entries(objeto).map(([key, value]) => {
    return <div>{key}: {value}</div>;
  })
}
```

## for…in:

Este bucle itera sobre las propiedades enumerables de un objeto. Sin embargo, no es recomendable usarlo en JSX porque puede causar efectos secundarios inesperados.
