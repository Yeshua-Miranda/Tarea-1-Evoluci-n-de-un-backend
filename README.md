#  Book Management API

## Descripción del Proyecto
Esta es una API RESTful desarrollada con Node.js, Express y TypeScript para gestionar el inventario de libros de una biblioteca. El proyecto está construido bajo una estricta **arquitectura en capas** (Router -> Controller -> Service -> Repository), asegurando la separación de responsabilidades. Esto permite que el sistema sea mantenible, escalable y esté preparado para futuras migraciones de bases de datos sin afectar la lógica de negocio.

## Instalación y Ejecución

1. Clonar el repositorio.
2. Instalar las dependencias del proyecto:
   ```bash
   npm install

3. **Iniciar servidor en modo desarrollo:**
   npm run dev

**Compilar para producción:**
   npm run build

**Ejecutar versión compilada:**
   npm start

## EndPoints
Todos los EndPoint usan el prefijo /api/books.

1.Metodo que regresa todos los libros, tambien permite buscar por autor(?author=pepe)
GET/api/books

2. Permite buscar mediante un id de libro en especial
GET/api/books/:id

3. Crea un nuevo libro. Valida que el título y autor existan y el año sea válido.
POST/api/books
body: {"title": "...", "author": "...", "year": 2024}

4.Actualiza parcialmente la información de un libro existente.
PATCH/api/books/:id
body: {"year": 2026}

5.Elimina un libro del sistema.
DELETE/api/books/:id

## Reflexion de ingieneria 
**¿Qué problema intenta resolver una arquitectura en capas?**
Resuelve el acoplamienta y la sobrecarga del código, al separar las responsabilidades se evita el código espaguetti siendo código escalable 

**¿Qué consecuencias tendría colocar toda la lógica en el Controller?**
Sería un codigo muy dificil de leer, además que si hacemos un cambio como en la base de datos, debemos cambiar absolutamente todo

**¿Qué ventaja obtienes al separar la lógica de negocio del acceso a datos?**
Este te permite una gran flexibilidad al momento de cambiar de infrestructura, además que te permite hacer pruebas sin afectar lo demás

**Si cambiaras PostgreSQL por MongoDB, ¿qué componentes deberían modificarse?**
Solamente el repository, cambiando las consultas para que sean las debidas en MongoDB

**¿Existe una arquitectura "perfecta" para cualquier sistema? ¿Por qué?**
No, la arquitectura usada depende totalmente de las necesidades del proyecto, esta que es una buena estructura, pero tal vez muy grande para proyectos más pequeños

**¿En qué momento agregar más capas puede comenzar a generar complejidad innecesaria?**
Cuando el proyecto es sencillo y cuando agregas las nuevas capas solamente son vacios sin utilidad real

**¿Puedes identificar responsabilidades diferentes en una actividad cotidiana que podrían separarse como en un Backend?**
Para exponer el caso lo hare con un restarurante
Cuando llegas, el host o recepcionista actúa como el Router: no te prepara la comida ni toma tu orden, simplemente evalúa a dónde vas y te dirige al lugar correcto.

Una vez en tu mesa, el mesero toma el papel del Controller. Él recibe tu orden (el Request), verifica rápidamente que lo que pides exista en el menú y lleva la instrucción a la cocina. Al final, es él quien regresa para entregarte tu platillo terminado (el Response).

Dentro de la cocina está el chef, que representa nuestra capa de Service. El chef nunca interactúa con los clientes ni sabe en qué mesa están sentados; su única responsabilidad es conocer la receta, aplicar las reglas de preparación y coordinar la creación del platillo.

Por último, el chef no pierde tiempo yendo al refrigerador. Para eso está el ayudante de almacén o bodeguero, que funciona como nuestro Repository. Su única labor es entrar a la cámara frigorífica, buscar los ingredientes físicos y entregarlos. Al bodeguero no le importa si esos tomates se van a usar para una pizza o una ensalada; él simplemente gestiona la extracción pura de los datos.
