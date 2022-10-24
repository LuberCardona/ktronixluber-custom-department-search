# custom-department-search

Custom department search es un componente que permitirá realizar búsqueda por departamento.

## Vista en escritorio
![customDepartmentSearch](https://user-images.githubusercontent.com/66228518/197623206-6cff4751-199e-48f7-aa8a-5ad21a8a5f74.JPG)

## Vista en móviles
![customDepartmentSearch-mobile](https://user-images.githubusercontent.com/66228518/197625438-756f7329-e84c-4343-bf03-9c0b1bdd2527.JPG)

## Configuración
### Paso 1 - Configuración Básica
Ingresar al siguiente repositorio en GitHub [react-app-template](https://github.com/vtex-apps/react-app-template) y crear un nuevo repositorio usando este template

### Paso 2 - Clonación del repositorio
Abrir la terminal e ingresar el comando git clone mas la URL del repositorio en gitHub así:  
git clone [url](), posteriormente acceda a la carpeta del proyecto en su repositorio local.

### Paso 3 - Editar el Manifest.json
Modificar en el archivo manifest.json el valor del vendor con el nombre correspondiente a su vendor y el valor del name con el nombre con el que va a usar su componente. Opcionalmente puede modificar la versión, el título y agregar una descripción.

Ejemplo:  
{     
  "vendor": "itgloberspartnercl",  
  "name": "custom-department-search",  
  "version": "0.0.1",  
  "title": "Search Bar Customizada",  
  "description": "Daremos la opción de elegir un departamento en nuestra barra de busqueda"   
}

Adicionalmente debe asegurarse de tener en los builders el store en su version 0.x así:

"builders":{   
"store": "0.x"   
} 

### Paso 4 - Editar el Package.json
Modificar en los archivos package.json ubicado de manera global asi como el que esta ubicado en la carpeta de react, el nombre y la versión de igual forma como fueron modificados en el archivo manifest.json

Ejemplo:  
{    
  "version": "0.0.1",  
  "name": "custom-department-search"      
}

### Paso 5 - Instalar apps necesarias
En la terminal ubicarse en la carpeta react con el comando cd react y luego de estar allí digitar en la terminal la palabra yarn, con esto se hará la instalación de los modulos de node necesarios para su aplicación. Cierre su editor y abra nuevamente su proyecto y verifique que dentro de la carpeta de react haya quedado instalada la carpeta de node_modules.

### Paso 6 - Ejecute un preview de la tienda
En su terminal digite el comando vtex link, si su aplicación es lanzada sin ningún error, en su terminal aparecerá la siguiente información:   
(info: App linked successfully). 

Para usar la aplicación en su tienda debe adicionar en el archivo manifest.json la dependencia correspondiente al componente.

Ejemplo:  
"dependencies": {  
 "itgloberspartnercl.custom-department-search": "0.x"  
}

Luego podrá renderizar el componente en su tienda donde lo requiera.

## Dependencies
1. "vtex.css-handles": "0.x"  
2. "vtex.store-graphql": "2.x"
3. "vtex.store-components": "3.x"

## Store Component Apps  
Ninguna

## Custom Apps  
Ninguna

## Contributors
1. Luber María Cardona Vargas

