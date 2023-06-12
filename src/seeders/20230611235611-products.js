'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('products',
      [
        {
          name: 'Celular 1',
          description: 'Gama ultra profesional',
          price: 15.5,
          product_image: 'https://previews.123rf.com/images/sak111/sak1111502/sak111150200189/36552317-tel%C3%A9fono-m%C3%B3vil-con-aplicaciones-en-el-fondo-blanco-ilustraci%C3%B3n-de-tel%C3%A9fono-celular.jpg',
          createAt: new Date(),
          updateAt: new Date(),
        },
        {
          name: 'Celular 2',
          description: 'Gama ultra profesional',
          price: 1550.5,
          product_image: 'https://previews.123rf.com/images/sak111/sak1111502/sak111150200189/36552317-tel%C3%A9fono-m%C3%B3vil-con-aplicaciones-en-el-fondo-blanco-ilustraci%C3%B3n-de-tel%C3%A9fono-celular.jpg',
          createAt: new Date(),
          updateAt: new Date(),
        },
        {
          name: 'Celular 3',
          description: 'Gama ultra profesional',
          price: 1550.5,
          product_image: 'https://previews.123rf.com/images/sak111/sak1111502/sak111150200189/36552317-tel%C3%A9fono-m%C3%B3vil-con-aplicaciones-en-el-fondo-blanco-ilustraci%C3%B3n-de-tel%C3%A9fono-celular.jpg',
          createAt: new Date(),
          updateAt: new Date(),
        },
        {
          name: 'Celular 4',
          description: 'Gama ultra profesional',
          price: 1450.5,
          product_image: 'https://previews.123rf.com/images/sak111/sak1111502/sak111150200189/36552317-tel%C3%A9fono-m%C3%B3vil-con-aplicaciones-en-el-fondo-blanco-ilustraci%C3%B3n-de-tel%C3%A9fono-celular.jpg',
          createAt: new Date(),
          updateAt: new Date(),
        },
        {
          name: 'Laptop 1',
          description: 'Gama ultra profesional',
          price: 1450.5,
          product_image: 'https://previews.123rf.com/images/sak111/sak1111502/sak111150200189/36552317-tel%C3%A9fono-m%C3%B3vil-con-aplicaciones-en-el-fondo-blanco-ilustraci%C3%B3n-de-tel%C3%A9fono-celular.jpg',
          createAt: new Date(),
          updateAt: new Date(),
        },
        {
          name: 'Laptop 2',
          description: 'Gama ultra profesional',
          price: 1450.5,
          product_image: 'https://previews.123rf.com/images/sak111/sak1111502/sak111150200189/36552317-tel%C3%A9fono-m%C3%B3vil-con-aplicaciones-en-el-fondo-blanco-ilustraci%C3%B3n-de-tel%C3%A9fono-celular.jpg',
          createAt: new Date(),
          updateAt: new Date(),
        },


      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
