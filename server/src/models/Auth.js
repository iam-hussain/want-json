
module.exports = function authModel(sequelize, DataTypes) {
    const Auth = sequelize.define('auth', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        hashkey: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        useragent: {
            type: DataTypes.JSON,
            defaultValue: {},
        },
        status: {
            type: DataTypes.ENUM,
            values: [
                'active',
                'inactive',
            ],
            defaultValue: 'active',
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    });

    Auth.associate = function authAssociate(db) {
        db.Auth.belongsTo(db.User, { foreignKey: 'logger', sourceKey: 'id' });
    };
    return Auth;
};
