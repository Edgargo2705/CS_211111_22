import { getData } from "./db.js";
import Sequelize from "sequelize";

const User = getData.sequelizeClient.define(
  "dbl_usersdb",
  {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone_number: Sequelize.STRING,
  },
  {
    tableName: "dbl_usersdb",
  }
);

export const getUser = User;
