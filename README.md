# Pop - up candy.

Este proyecto esta inspirado de una idea que vi en un grupo de progamacíon. Lo que se pediá era:

## Requisitos.

1. Hacer que un dulce (Los que estan en las imágenes) aparezca en intervalos en la pantalla.
2. El dulce puede aparecer en cualquier parte.
3. El dulce tiene que aparecer durante un intervalo de tiempo especifico.
4. El dulce no debe interferir con las demas funcionalidades de la página.

## Requisitos Extra.

1. El dulce puede aparecer rotado para agregar mas variedad.
2. Se debe de hacer de manera modular, es decir poder tener múltiples dulce que funcionen de manera independiente.
3. Hacer que el intervalo de tiempo pueda variar a conveniencia.
4. poder modificar el tamaño del dulce a cenveniencia.

# V2.0

1. Se refactorizó el código a un enfoque POO, para hacerlo modular.
2. Se agregó que el tiempo en que aparece y desaparece el dulce puede ser asignado a cada dulce de manera independiente.
3. Se agregó la posibilidad de tener un desfase para que los dulces no aparezcan de manera inmediata.
4. Se agregó la posibilidad de cambiar el tamaño del dulce a conveniencia (Tendra el mismo ancho y alto, y siempre será redondo)
5. Se agregaron valores por defecto a los tiempos de aparición desaparición desfase y tamaño del dulce.

El proyecto ahora cumple con todos los requisitos establecidos y requisitos extra.

# Modo de uso

**Solo es necesario el archivo "app.js"** los archivos html y css son solo utilizados para la demostración

Para poder crear un nuevo dulce solo es necesario instanciar una nueva clase especificando el contenedor en el que se van a encontrar los dulces, y el nombre de las imagenes que tendrán los dulces.

El contenedor deberá de tener el atributo ` position: relative ` para poder funcionar apropiadamente

Las imagenes para los dulces deberán estar en la carpeta **candy** y deberán ser formato **.jpg** (*Posiblemente se modifique esto mas adelante*) y solo deberá proporcionarse el nombre de la imágen. Es decir, si la imágen es `candy/dulce1.jpg` solo deberá colocarse `dulce1`

    `new Candy(container, "nombre1", "nombre2", "nombren")`

De igual manera se puede proporcionar el tiempo por el que aparecerá el dulce (apperarTime), el tiempo en el que el dulce no aparecerá en pantalla (disapperar), el tiempo inicial que tomará el dulce para aparecer por primera vez (offset) y por último el tamaño del dulce (size)

    `new Candy(container, {appearTime, disappearTime, offset}, { size }, "nombre1", "nombre2", "nombren")`