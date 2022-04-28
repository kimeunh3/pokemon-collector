import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Pokemon-Collector API",
        version: "1.0.0",
        description: "Pokemon-Collector API 명세서입니다.",
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: [],
  };
  
const specs = swaggerJsDoc(options);
module.exports = {
    swaggerUi,
    specs
};