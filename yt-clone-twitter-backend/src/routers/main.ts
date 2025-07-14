import {Router} from 'express';
import * as pingController  from '../controllers/ping';
import * as authController  from '../controllers/auth';

export const mainRouter = Router();

mainRouter.get('/ping', pingController.ping);
// rota privada
//mainRouter.get('/privateping');

// rota de cadastro
mainRouter.post('/auth/signup', authController.signup);

// rota de login
//mainRouter.post('/auth/signin');

// rota dp tweet
//mainRouter.post('/tweet');
//mainRouter.get('/tweet/:id');
//mainRouter.get('/tweet/:id/answers');
//mainRouter.post('/tweet/:id/like');

// rota de usuário
//mainRouter.get('/user/:slug');
//mainRouter.get('/user/:slug/tweets');
//mainRouter.post('/user/:slug/follow');
//mainRouter.put('/user');
//mainRouter.put('/user/avatar');
//mainRouter.put('/user/cover');

// rota do sistema
//mainRouter.get('/feed');
//mainRouter.get('/search');
//mainRouter.get('/trending');
//mainRouter.get('/suggestions');
