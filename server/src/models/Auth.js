
module.exports = function authModel(sequelize, DataTypes) {
    const Auth = sequelize.define('auth', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        hash: {
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
            type: DataTypes.JSONB,
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
        db.Auth.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id', as: 'logger' });
    };
    return Auth;
};
