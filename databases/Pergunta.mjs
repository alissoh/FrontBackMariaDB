import Sequelize from "sequelize";
import conection from "./database.mjs";
const Pergunta = conection.define("Pergunta", {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT
    }

})
Pergunta.sync({force:false}).then(()=>{})

export default Pergunta 