module.exports = function (sequelize, Sequelize) {
    const Dept_manager = sequelize.define("dept_manager", {
        from_date: {
            type: Sequelize.DATE,
            primaryKey: true
        },
        to_date: {
            type: Sequelize.DATE,
            primaryKey: true
        }
    });

    return Dept_manager;
}