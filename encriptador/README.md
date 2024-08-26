**Realizado Por**
    - Juan Sebastian Latorre Ruiz

---

# Cómo usar el Encriptador y Desencriptador

## Configuración del Proyecto

### Paso 1: Preparar el Front-End

1. Accede a la carpeta del proyecto Vue.js:
   ```bash
   cd encriptador/front-end/
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install pinia@^2.2.2 vue@^3.4.29 vue-router@^4.0.13
   ```

### Paso 2: Preparar el Back-End

1. Abre una nueva terminal y navega a la carpeta del servidor Express:
   ```bash
   cd encriptador/server/
   ```

2. Instala las dependencias necesarias para el servidor:
   ```bash
   npm install cors@^2.8.5 express@^4.19.2 express-validator@^7.2.0 path@^0.12
   ```

### Paso 3: Ejecutar el Servidor

1. En la terminal que está en la carpeta del servidor (`server`), inicia el servidor Express:
   ```bash
   npm run dev
   ```
   **Nota**: Este comando iniciará el servidor Express, que manejará las solicitudes de encriptación y desencriptación desde el proyecto de Vue.js.

### Paso 4: Ejecutar el Front-End

1. Regresa a la terminal donde estás en la carpeta del proyecto Vue.js (`front-end`) y levanta Vite:
   ```bash
   npm run dev
   ```

¡Listo! Ahora deberías tener tanto el servidor Express como la aplicación Vue.js corriendo. Puedes acceder a la aplicación de encriptación y desencriptación a través del navegador.

--- 


**¡Bienvenidas y bienvenidos a nuestro primer desafío!**

Durante estas cuatro horas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

```tex
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
```

**Requisitos:**

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:

```tex
"gato" => "gaitober"
gaitober" => "gato"
```

La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

**Extras:**

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

Tenemos un periodo de tiempo de cuatro horas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.

En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.

En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.

Por fin, en la columna Concluido estarán los elementos ya concluidos.

El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

Buen proyecto!

**Desencripta nuestro mensaje secreto!**

```tex
¡Fenterlimescimesdaidenters, hais lobergraidober dentersbloberqufatenterair enterstenter menternsaijenter!
```

