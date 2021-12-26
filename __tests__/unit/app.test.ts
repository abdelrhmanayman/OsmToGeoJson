import application from 'app';

describe('Application file', () => {
  afterAll(() => {
    application.closeServer();
  });

  it('application instance should be defined ', () => {
    expect(application).toBeTruthy();
    expect(application.startServer).toBeTruthy();
    expect(application.closeServer).toBeTruthy();
  });

  it('startServer function should start server on default port', (done: any) => {
    application.startServer().then(() => {
      expect(application.serverStatus).toEqual(true);
      done();
    });
  });

  it('closeServer function should close the server', (done: any) => {
    application.closeServer();
    expect(application.serverStatus).toEqual(false);
    done();
  });
});
