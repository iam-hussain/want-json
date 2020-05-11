module.exports = function userModel(sequelize, DataTypes) {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                field: 'id',
            },
            displayName: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            salt: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            emailVerified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            passwordSet: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            authData: {
                type: DataTypes.JSONB,
                defaultValue: {},
            },
            joinedIP: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM,
                values: ['active', 'inactive', 'suspended'],
                defaultValue: 'active',
            },
        },
        {
            timestamps: true,
            freezeTableName: true,
        },
    );

    User.associate = function userAssociate(db) {
        db.User.hasMany(db.Auth, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'logger',
        });
        db.User.hasMany(db.Payload, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'owner',
        });
    };
    return User;
};
