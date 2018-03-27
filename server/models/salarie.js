module.exports = function (sequelize, Sequelize) {
    const Salarie = sequelize.define("salarie", {         
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