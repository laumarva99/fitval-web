## Pregunta 1

Con _redirects, Netlify siempre carga index.html (ahora mismo se ve "Hola, FitVal") y React muestra la página correcta. Sin él, Netlify no encuentra la dirección y devuelve un error 404

## Pregunta 2

Sin clearTimeout, el temporizador seguiría funcionando aunque el componente ya no esté en pantalla e intentaría cambiar un estado que ya no existe. Con la limpieza, se cancela y evitamos ese problema
