/** 
 * Paso 3 = Capa de persistencia
 * Interfaz CRUD
 * ______________________________________________
 * Esta interfaz define los metodos CRUD estandar, 
 * asegurando que cualquier clase que implemente 
 * la interfaz cuente con dichos metodos
 * 
 * Todos los repositorio mantedran una consistencia 
 * en cuanto a los metodos estandar aplicados. 
 * 
 * Mejora la mantenibilidad del software y facilita
 * cambios en la implementación. 
 * 
*/


class IRepository {

    // primer metodo
    obtenerPorId(id) {

        /** 
         * se detecta un nuevo error y se interrumpe la ejecucion
         * del codigo 
        */
        throw new Error (`Método 'obtenerPorId()' no implementado`); 
    }

    // segundo metodo
    obtenerTodos() {

        throw new Error (`Método 'obtenerTodos()' no implementado`); 
    }

    // tercer metodo
    buscarPorAtributo() {

        throw new Error (`Método 'buscarPorAtributo()' no implementado`); 
    }

    // cuarto metodo
    obtenerMayoresDe30() {

        throw new Error (`Método 'obtenerMayoresDe30()' no implementado`); 
    }
}

export default IRepository; 

