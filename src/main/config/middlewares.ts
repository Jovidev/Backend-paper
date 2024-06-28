import { Express } from 'express';
import { bodyParser, contentType, cors } from '@/main/middlewares';

export default (app: Express): void => {
    app.use(bodyParser);
    app.use(cors);
    app.use(contentType);
};