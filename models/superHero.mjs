/**
 * Paso 2 = Modelo de datos
 * Modelo SuperHero
 * _____________________________________________
 * Establece la estructura y las reglas de validacion
 * para los documentos que seran almacenados en 
 * MongoDB
 * 
 * Permite un control de calidad sobre los datos, 
 * asi se garantiza que cada documento cumpla 
 * con los requisitos del esquema (tipos de datos
 * y campos obligatorios)
 * 
 */

import mongoose from "mongoose";

const superHeroSchema = new mongoose.Schema(

    {
        nombreSuperHeroe: { type: String, requiered: true },
        nombreReal: { type: String, required: true },
        edad: { type: String, default: 'Desconocido' },
        debilidad: String,
        poderes: [String],
        aliados: [String],
        enemigos: [String],
        creador: String,
        createdAt: { type: Date, default: Date.now }
    }
);

const superHero = mongoose.model('SuperHero', superHeroSchema, 'Grupo-05'); 
export default superHero; 

