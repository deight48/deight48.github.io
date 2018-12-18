/* 
 * Clase para crear un JTable al estilo de JTable de JAVA
 * Creado por Deight Paredes
 */
 //Variables globales que utilizara la clase
var tabla = null, thead = null, tfoot = null, tbody = null;
var rel = "stylesheet", type = "text/css";

//Creacion de la clase CreateJTable
class CreateJTable {

	//Constructor de la clase, se llama al instanciar la clase, este constructor recibe 4 parametros
	//el div donde se posara la tabla, el contenido de la cabecera de la tabla en un array,
	//Los valores de cada celda de la tabla en un array y el color del tema
    constructor(div_content, array_header, array_values, tema) {
        var div = null;
		//Valida si el div existe
        if (div = document.getElementById(div_content)) {
			//Valida si la cabecera no esta vacia, si es true crea los elementos de la tabla
            if (array_header != null) {
				//Crea el elemento link con sus atributos para anexar la hoja de estilos externa
				//en la pagina
                var style = document.createElement("link");
                style.setAttribute("href", setColor(tema));
                style.setAttribute("rel", rel);
                style.setAttribute("type", type);
				//Agrega la hoja de estilos al body (cuerpo) de la pagina
                document.body.appendChild(style);
				//Crea el elemmento table (tabla) con su atributo id
                this.tabla = document.createElement("table");
                this.tabla.setAttribute("id", "grid");
				//Crea el elemento thead (header) de la tabla
                this.thead = document.createElement("thead");
				//Crea el elemento tbody (body) de la tabla
                this.tbody = document.createElement("tbody");
				//Crea el elemento tfoot (footer) de la tabla
                this.tfoot = document.createElement("tfoot");
				//Agrega los datos que se mostraran en la cabecera de la tabla
                this.setHeader(array_header, this.thead);
				//Agrega los datos que se mostraran en el cuerpo de la tabla
                this.setBody(array_values, this.tbody);
				//Agrega los datos que se mostraran en el pie de la tabla
                this.setFooter(this.tfoot);
				
				//Agrega los elementos thead, tbody y tfoot al elemento table (tabla)
                this.tabla.appendChild(this.thead);
                this.tabla.appendChild(this.tbody);
                this.tabla.appendChild(this.tfoot);
				//Agrega la tabla creada con todos sus elementos al div recibido como parametro
                div.appendChild(this.tabla);
            }
        }
    }

	//Metodo que agrega la informacion a la cabecera de la tabla
    setHeader(header, thead) {
        var th = null;
		//Recorre el array de valores recibido como parametro
        for (var i = 0; i < header.length; i++) {
			//Crea un th (celda de cabecera) con sus elementos por cada iteracion del bucle y lo agrega
			//al thead (cabecera)
            th = document.createElement("th");
            th.appendChild(document.createTextNode(header[i]));
            thead.appendChild(th);
        }
    }

	//Metodo que agrega la informacion al cuerpo de la tabla
    setBody(array_values, tbody) {
        var val = array_values, tr = null, td = null, txt = "";
		//Recorre el array de valores recibido como parametro
        for (var i = 0; i < val.length; i++) {
			//Crea un tr (fila) con sus atributos por cada iteracion del bucle
            tr = document.createElement("tr");
            tr.setAttribute("class", "table-hover");
            if (i % 2 == 0)
                tr.setAttribute("class", "alt");
            for (var j = 0; j < val[i].length; j++) {
				//Crea un td (celda) con sus atributos e informacion por cada iteracion del bucle
                td = document.createElement("td");
                td.setAttribute("id", i + "" + j + "celda");
				//Agrega un evento a cada celda creada
                addEventos(td, "dblclick", alerta);
                td.appendChild(document.createTextNode(val[i][j]));
				//Agrega la celda a la fila
                tr.appendChild(td);
            }
			//Agrega la fila al tbody (cuerpo) de la tabla
            tbody.appendChild(tr);
        }
    }

	//Metodo que agrega la informacion al pie de la tabla
    setFooter(tfoot) {
		//Crea los elementos tr, td, div, ul, li y a para el footer
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.setAttribute("colSpan", "4");
        var div = document.createElement("div");
        div.setAttribute("id", "paging");
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var a = document.createElement("a");
		//Crea el primer link con sus atributos
        a.appendChild(document.createTextNode("previous"));
        a.setAttribute("href", "#");
		//Agrega el primer link a la lista
        li.appendChild(a);
		//Agrega la primera linea de la lista al contenedor de listas (ul)
        ul.appendChild(li);
		//Crea el segundo link con sus atributos
        a = document.createElement("a");
        a.appendChild(document.createTextNode("1"));
        a.setAttribute("href", "#");
        a.setAttribute("class", "active");
		//Crea otra linea de lista y le agrega el segundo link
        li = document.createElement("li");
        li.appendChild(a);
		//Agrega la segunda linea de la lista al contenedor de listas (ul)
        ul.appendChild(li);
		//Crea el tercer link con sus atributos
        a = document.createElement("a");
        a.appendChild(document.createTextNode("Next"));
        a.setAttribute("href", "#");
		//Crea otra linea de lista y le agrega el tercer link
        li = document.createElement("li");
        li.appendChild(a);
		//Agrega la tercer linea de la lista al contenedor de listas (ul)...
        ul.appendChild(li);
		//Agrega la lista al contenedor div
        div.appendChild(ul);
		//Agrega el contenedor div a la celda
        td.appendChild(div);
		//Agrega la celda con sus elementos a la fila
        tr.appendChild(td);
		//Agrega la fila al footer
        tfoot.appendChild(tr);
    }
}

//Metodo disparado por el evento de doble click de cada una de las celdas. Pueden crearse
//varios metodos y funciones para cada celda
function alerta(evt) {
	//Captura el evento en distintos navegadores
    var evento = evt || window.event;
	//Obtiene el id del elemento que disparo el evento
    var id = evento.target.getAttribute("id");
	//Guarda el elemento en una variable por su id
    var elemento = document.getElementById(id);
	//Muestra un mensaje o cualquier otra instruccion que se requiera...
    //alert("Has dado click a la celda " + elemento.textContent + " id:" + elemento.id);
}

//Metodo que se encarga de asignar el archivo css apropiado para la tabla, segun el parametro recibido
function setColor(tema) {
    var href = "";
    switch (tema) {
        case 'blue':
            href = "css/jtable-blue.css";
            break;
        case 'green':
            href = "css/jtable-green.css";
            break;
        case 'red':
            href = "css/jtable-red.css";
            break;
        case 'purple':
            href = "css/jtable-purple.css";
            break;
        case 'brown':
            href = "css/jtable-brown.css";
            break;
        case 'gray':
            href = "css/jtable-gray.css";
            break;
        default:
            href = "css/jtable-blue.css";
            break;
    }

    return href;
}

//Metodo que asigna los eventos a los elementos recibidos por parametro
function addEventos(celda, evento, funcion) {
    if (celda !== null) {
        if (document.addEventListener) {
            celda.addEventListener(evento, funcion, false);
        } else if (document.attachEvent) {
            celda.attachEvent('on' + evento, funcion);
        }
    }
}
