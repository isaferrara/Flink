README

Hola, muchas gracias por la oportunidad. Pueden encontrar el deploy en la siguiente liga: 

DESAFÍOS ENCONTRADOS
Uno de los desafíos que me encontré fue con CORS y certificaciones SSL, cree una solución rápida para evitarlo. 
Se encuentra en src/pages/Login 58

También obtuve un resultado diferente en diseño al deploy en Chrome. En dev los colores de fondo usados son diferentes
 y el font-weight es mayor. 


RECOMENDACIONES
Ver en Google Chrome para evitar problema con CORS 


    INSTRUCCIONES


Para tu challenge será necesario cumplir las siguientes instrucciones:
1.- Crea un repositorio, tendrás que compartirlo al final de tu challenge.☝ (LISTO)
2.- Puedes buscar lo que quieras en la red, pero no deberás recibir ayuda de un tercero para su resolución.✋
3.-Deberás usar un framework como React o Vue JS, en caso de que requieras usar uno diferente, deberás justificar el cambio del mismo.👀 (LISTO)
4.- Haz un esfuerzo por ocupar la menor cantidad de bibliotecas de terceros.
5.- Los puntos clave a revisar serán:
a) Arquitectura cliente servidor.
b) Manejo de componentes.
c) Manejo de rutas.
d) Interfaz intuitiva.
e) Atención al detalle(diseño). 
f) Deploy básico del proyecto (LISTO)

Podrás acceder a la información necesaria en la siguiente dirección.
https://hp-api.herokuapp.com/

También se necesita gestionar el acceso a la información (el mundo mágico no es la excepción) por lo que necesitaremos un login.
El login se manejará con la siguiente liga http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login

Obtendrás como respuesta:
1.- Nombre del usuario.
2.- Casa en hogwarts a la que pertenece.
3.- Si es estudiante o miembro del staff.


Puedes usar estos datos de acceso:

{
"user": "snape@hogwarts.com",
"password": "snape0109"
}

{
"user": "harry@hogwarts.com",
"password": "harry3107"
}


Consideraciones
1.- Ocupando la API mágica, deberás mostrar dos secciones. Una para estudiantes y otra para miembros del staff.
2.-Cada sección contendrá una tabla, con la siguiente información:
- Fotografía
- Nombre
- Casa a la que pertenece
4.- Al hacer clic en la celda de la tabla mostrará una página con mayor información sobre el estudiante o el miembro del staff.
1.- Fotografía
2.- Nombre
3.- Casa a la que pertenece
4.- Fecha de nacimiento
5.- Características de la varita
6.- Patronus
7.- Estatus de sangre
8.- Vivo o muerto (indicarlo visualmente)

MUY IMPORTANTE

-Los estudiantes tendrán solo acceso a ver la información de los demás estudiantes (ESTUDIANTES PUEDEN VER INFO BÁSICA DE PROFESORES PERO NO DETALLADA )

-El staff podrá ver la información tanto de estudiantes como de otros miembros del staff




