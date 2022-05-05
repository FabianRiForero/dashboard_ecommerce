# Dashboard Games Pro Shop
Proyecto Integrador equipo 2 -Digital House
## Descripcion

Un Dashboard de administrador donde podemos ver detalladamente los productos y usuarios del proyecto integrador Game Pro shop
## Integrantes
- Fabián Forero -> Colombiano residente de bogotá, Técnologo en Análisis y Desarrollo de Sistemas de Información
- Johan Mauricio Peñuela -> Colombiano residente de Bogotá, Técnologo Industrial Me gusta estar en constante aprendizaje
- Jaime Andrés Artunduaga -> Estudiante de Ingeniería Multimedia de la ciudad de Cali, que le gusta la tecnología y aprender nuevas cosas cada día.  
- Sergio Andres Castro -> estudiante de producción musical y emprendedor en remates industriales y reciclaje, me gusta la música y la combinación de saberes.

# Games Pro Shop Dashboard
## Instalacion del proyecto
Para instalar el proyecto en su equipo y utilizarlo debe tener instalado los siguientes programas:
- NodeJS
- Git
- Navegador
- XAMPP (contiene phpmyadmin y MySQL)


### Instalacion del proyecto en el equipo
En este mismo repositorio a principios de la pagina hay un boton de color verde con el texto **code** al dar click en el hay dos opciones que podemos usar para tener el proyecto en el equipo:
1. La primera es la URL que nos esta dando, la copiamos y abrimos la terminal de git bash o la que sea de su preferencia y nos ubicamos en la carpeta donde se instalara. Una vez ubicado en la carpeta en la que se instalara ejecutamos el siguiente comando ``` git clone URL ``` donde sustituiremos la URL por la que copiamos del repositorio, cuando termine la instalacion ejecutamos el comando ``` npm install ``` para instalar las dependencias necesarias para que funcione el proyecto.
2. La segunda opcion es la opcion **Download ZIP**, damos click y comenzara a descargarnos el proyecto. Una vez descargado descomprimir el proyecto en la carpeta donde lo colocaremos y esperamos a que se descomprima. Una vez descomprimido accedemos a la terminal git bash o la que sea de preferencia y nos ubicamos en la carpeta descomprimida (la carpeta debe tener la carpetas public y src junto con otros archivos) y ejecutamos el comando ``` npm install ``` para instalar las dependencias necesarias para que funcione el proyecto.

### Ejecucion del proyecto

Una vez instalado el proyecto junto con las dependencias y configurado la base de datos ejecutamos la terminal git bash o la de su preferencia y nos ubicamos en la carpeta del proyecto donde ejecutaremos uno de los dos siguientes comandos ``` npm start ``` o ``` npx nodemon src/app.js ```. Tener en cuenta que como minimo ademas de ejecutar el comando en la terminal en XAMPP tener corriendo MySQL y finalmente ingresamos en el navegador al siguiente link http://localhost:3001/ , o dentro el archivo `.env.local` se puede cambiar la direccion por la de su preferencia por ejemplo http://localhost:5000/ para poder navegar en la pagina.
No olvidar antes tambien iniciar el proyecto Games Pro Shop del siguiente repositorio https://github.com/jaimeandres77/grupo_2_Ecomerce.git para no tener ningun tipo de error en el dashboard de Games Pro shop.
