module.exports = function (sequelize, Sequelize) {
    const Salarie = sequelize.define("salarie", {    
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },     
        salary: {
            type: Sequelize.INTEGER,
            validate: {
                notEmpty: true,
            }
        },
        from_date: {
            type: Sequelize.DATE,
            primaryKey: true
        },
        to_date: {
            type: Sequelize.DATE,
            primaryKey: true
        }
    });

    return Salarie;
}