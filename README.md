[![logo](https://i.ibb.co/dcmwHSb/light-bulb-2.png)]

# LatinoEduca

## Índice

- [Descripción](#resumen-del-proyecto)
- [Problema](#problema)
- [Consideraciones Técnicas](#Consideraciones-técnicas)
- [Proceso de diseño](#historias-de-usuario)
- [Diseño de interfaz](#prototipado)
- [Qué dicen los usuarios] (#que-dicen-los-usuarios)
- [Construido con](#construido-con)
- [Contribuyendo](#contribuyendo)
- [Agradecimientos](#agradecimientos)


---


## Resumen del proyecto 🚀

El proyecto LatinoEduca se crea con el objetivo de que el gremio de investigadores utilicen los datos obtenidos en lista, información que pueda ser relevante y genere propuestas hacia la mejora continua de la educación en Latinoamérica. Creamos una app que integre información de confianza ya que son datos del Banco Mundial,que especificamente se centran en indicadores de educación en los países México, Chile, Brasil y Perú.

## Problema  
Nos enfocamos en un problema que se vive en todas las carreras o sectores, que es el encontrar documentación que tenga fuentes fidedignas y que informe de países que se encuentran en Latinoamérica, seleccionando sólo a mujeres en la educación.Esto con el fin de que nuestro usuario pueda recabar información que le sirva para dar propuesras a las problemáticas educativas dentro de los países que seleccione y que tenga una visión precisa de la realidad.

## Consideraciones técnicas 📋
* [Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/download/) - El framework web usado

Para tener acceso a este proyecto deberás seguir los siguientes pasos:

1.-Antes que nada, asegúrate de tener un 📝 editor de texto en condiciones, algo como Atom o Code.
2.-Para ejecutar los comandos a continuación necesitarás una 🐚 UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash, aunque recomendaría que consideres probar 🐧 GNU/Linux.
3.-Haz tu propio 🍴 fork del repo de tu cohort.
4.-⬇️ Clona tu fork a tu computadora (copia local).
5.-📦 Instala las dependencias del proyecto con el comando npm install. Esto asume que has instalado Node.js (que incluye npm).
6.-Si todo ha ido bien, deberías poder ejecutar las 🚥 pruebas unitarias (unit tests) con el comando npm test.
7.-A codear se ha dicho! 🚀

## Historias de usuario
-El colectivo de investigación busca conocer los indicadores de alfabetismo en LatinoAmérica (mujeres) para conocer su comportamiento por año.


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

El proyecto se da inicio con un sketch a mano alzada que crea una interfaz sencilla para iniciar.

![marvel](https://i.ibb.co/b2sndrk/Imagen-de-i-OS-1.jpg)
![marvel](https://i.ibb.co/RbY4j0r/Imagen-de-i-OS-2.jpg)
![marvel](https://i.ibb.co/JF8nTdL/Imagen-de-i-OS.jpg)

#### Prototipo de alta fidelidad

En nuestra sección de prototipado de alta fidelidad utilizamos Figma esta herramienta era muy sencilla de utilizar e hicimos lo que podría ser un acercamiento a lo que requeriamos en nuestra html, sin embargo optamos por utilizar bootstrap que nos facilito el diseño que no era responsive como queríamos.

![Figma](https://i.ibb.co/yVq1LdK/fig1.jpg)
![Figma](https://i.ibb.co/hmv8PRk/fig2.jpg)
![Figma](https://i.ibb.co/SJZWb4T/fig3.jpg)


#### Testeos de usabilidad

Durante la producción del proyecto se intento lanzar encuestas a los candidatos más idoneos para la resolución de algunas incognitas que teníamos 

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tus propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

- `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

- `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

- `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son propuestas de funciones que podrías implementar.

El archivo `src/data.js` debe tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

