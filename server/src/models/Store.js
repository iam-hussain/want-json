
module.exports = function storeModel(sequelize, DataTypes) {
    const Store = sequelize.define('store', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'id',
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        payload: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        hash: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
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

    Store.associate = function storeAssociate(db) {
        db.Store.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id', as: 'owner' });
    };
    return Store;
};
