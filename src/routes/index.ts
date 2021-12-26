import { Router } from 'express';

import mapRoutes from './map.routes';

const router = Router();

router.use('/map', mapRoutes);

export default router;
