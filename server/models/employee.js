module.exports = function (sequelize, Sequelize) {
    const Employee = sequelize.define("employee", {        
        emp_no: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        birth_date: {
            type: Sequelize.DATE,
            validate: {
                notEmpty: true,
            }
        },
        first_name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        last_name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },        
        gender: {
            type: Sequelize.ENUM,
            values: ['M', 'F'],
            validate: {
                notEmpty: true,
            }
        },
        hire_date: {
            type: Sequelize.DATE,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Employee;
}