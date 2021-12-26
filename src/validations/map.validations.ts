import Joi, { Schema } from 'joi';

export const getGeoJsonRequestSchema: Schema = Joi.object({
  bbox: Joi.string().required(),
});
