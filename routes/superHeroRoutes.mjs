

/** 
   * Paso 7 = Rutas API para superHero
     _________________________________________________

   *  
*/

import express from 'express';

import { buscarSuperheroesPorAtributoController, obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosLosSuperheroesController } from '../controllers/superHeroControllers.mjs';

const router = express.Router();

/** 
 * Endpoints
*/
router.get('/heroes', obtenerTodosLosSuperheroesController());

router.get('/heroes/:id', obtenerSuperheroePorIdController());

router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router;

