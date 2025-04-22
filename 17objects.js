var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2025,
    detalleDelAuto: function() {  // metodo del objeto
        console.log (`Auto ${this.modelo} ${this.annio}`)  // el this es una variable que hace referencia al objeto en este caso miAuto
    }
};

miAuto.marca // "Toyota"
miAuto.annio // 2025
miAuto.detalleDelAuto();  // Aut0 Corolla 2020