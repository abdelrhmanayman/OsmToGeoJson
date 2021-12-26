import mapControllers from '@controllers/map.controllers';

describe('map controllers', () => {
  it('getGeoJSONController, it should return a controller function', () => {
    const controllerFunction = mapControllers.getGeoJSONController();
    expect(typeof controllerFunction).toBe('function');
  });

});
