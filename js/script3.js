class Cuenta{
    constructor(usuario,contraseña){
        this.usuario=usuario;
        this.contraseña=contraseña;
    };
    verificar(){
        if (this.usuario==="system"&&this.contraseña==="123") {
            return("sesion iniciada")
        } else {
            return("usuario o contraseña incorrectos")
        }
    };
};
function go() {
    var cuenta=new Cuenta(document.getElementById("login").value,document.getElementById("password").value)
    document.getElementById("resultado").value=cuenta.verificar()
}