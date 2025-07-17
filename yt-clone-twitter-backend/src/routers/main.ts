import {NextFunction, Router} from 'express';
import * as pingController  from '../controllers/ping';
import * as authController  from '../controllers/auth';
import * as tweetController  from '../controllers/tweet';
import * as userController  from '../controllers/user';
import { verifyJWT } from '../utils/jwt';

export const mainRouter = Router();

mainRouter.get('/ping', pingController.ping);
mainRouter.get('/privateping', verifyJWT, pingController.privatePing); // rota privada

mainRouter.post('/auth/signup', authController.signup); // rota de cadastro
mainRouter.post('/auth/signin', authController.signin); // rota de login

// rota dp tweet
mainRouter.post('/tweet', verifyJWT, tweetController.addTweet);
mainRouter.get('/tweet/:id', verifyJWT, tweetController.getTweet);
mainRouter.get('/tweet/:id/answers', verifyJWT, tweetController.getAnswers);
mainRouter.post('/tweet/:id/like', verifyJWT, tweetController.likeToggle);

// rota de usuário
mainRouter.get('/user/:slug', verifyJWT, userController.getUser);
mainRouter.get('/user/:slug/tweets', verifyJWT, userController.getUserTweets);
mainRouter.post('/user/:slug/follow', verifyJWT, userController.followToggle);
//mainRouter.put('/user');
//mainRouter.put('/user/avatar');
//mainRouter.put('/user/cover');

// rota do sistema
//mainRouter.get('/feed');
//mainRouter.get('/search');
//mainRouter.get('/trending');
//mainRouter.get('/suggestions');
