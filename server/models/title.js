module.exports = function (sequelize, Sequelize) {
    const Title = sequelize.define("title", {
        title:{
            type: Sequelize.DATE,
            primaryKey: true
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

    return Title;
}