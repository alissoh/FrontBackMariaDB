import sequelize from "sequelize"

const conection = new sequelize('question', 'root','2222222', {
    host: "localhost",
    dialect:"mariadb"
} )

export default conection