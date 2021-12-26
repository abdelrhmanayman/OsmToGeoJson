import { Router } from 'express';
import { createValidator, ExpressJoiInstance } from 'express-joi-validation';

import { getGeoJsonRequestSchema } from '@validations/map.validations';
import mapControllers from '@controllers/map.controllers';

const router: Router = Router();
const validator: ExpressJoiInstance = createValidator();

router.get('/', validator.query(getGeoJsonRequestSchema), mapControllers.getGeoJSONController());


export default router;
