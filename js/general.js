window.onload = function () {
    var header = ["Nombre", "Apellido", "Direccion", "Telefono"];
    var valores = [["Deight", "Paredes", "Cota 905 El Naranjal", "960116855"],
        ["Darrin", "Paredes", "Cota 905 El Naranjal", "980555876"],
        ["Darrin", "Paredes", "Cota 905 El Naranjal", "980555876"],
        ["Darrin", "Paredes", "Cota 905 El Naranjal", "980555876"]];
    var jtable = new CreateJTable("JTable", header, valores, "green");
};
