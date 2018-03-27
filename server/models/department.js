module.exports = function (sequelize, Sequelize) {
    const Department = sequelize.define("department", {
        dept_no: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
    });

    return Department;
}