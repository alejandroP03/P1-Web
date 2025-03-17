# Ejecucion 

## Requisitos
- Node 18.19.1
- Npm 10.2.4

## Instalacion
```bash
npm install
```
## Ejecucion
```bash
npm start
```

# Decisiones de desarrollo

Se utilizó la libreria HeroUI que provee componentes estilizados, lo que permitió reducir el tiempo de desarrollo ajustándolo al tiempo del parcial sin perder calidad en el diseño.

Gracias a la libreria HeroUI no hubo necesidad de crear componentes nuevos, solo se utilizó los que ya provee la libreria.

De igual forma se decidió dividir el proyecto en componentes y páginas, se identificaron 3 páginas: autenticación, home y detalle

Se decidió crear una sola página de detalle para menú, restaurantes y carrito, ya que la estructura de la página es la misma, solo cambia la información que se muestra.

# Proceso de desarrollo

1. Antes del parcial se creó el proyecto con create-react-app, se instaló HeroUI y se configuró tailwindcss, adicionalmente se creó la estructura de carpetas
2. Se identificaron las páginas y componentes necesarios
3. Se creó la página de autenticación con el formulario de login y la validación de la contraseña a partir de los parámetros dados
4. Se creó la página de home con las 3 cards, sin routing funcional
5. Se creó en Mockaroo los schemas y la API
6. En la página de detalle se organizó las 3 secciones junto con los endpoints para que según la ruta se muestre la información correspondiente
7. Se implementó el routing para que al hacer click en una card se redirija a la página de detalle
8. Se implementó el routing en autenticación para que al hacer login se redirija a la página de home

# Elementos pertenecientes a React utilizados

- useState
- useEffect
- useParams (react-router-dom)
- React Render 
