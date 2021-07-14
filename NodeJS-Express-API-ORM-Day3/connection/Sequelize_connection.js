import Sequelize from 'sequelize';
const sequelize = new Sequelize('ECOM_API_ORM', 'root', 'Nirvana@1987@', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
