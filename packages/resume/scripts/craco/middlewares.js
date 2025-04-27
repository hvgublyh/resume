const setups = [];

const middlewares = {
  name: 'Middlewares',

  setupMiddlewares: (devServer) => {
    if (!devServer) {
      throw new Error("webpack-dev-server is not defined");
    }
    setups.forEach((setup) => {
      setup(devServer);
    });
  },
  useMiddlewares: (setup) => {
    setups.push(setup);
  }
}

module.exports = middlewares;