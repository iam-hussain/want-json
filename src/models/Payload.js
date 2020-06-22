module.exports = function payloadModel(sequelize, DataTypes) {
  const Payload = sequelize.define(
    'payload',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        field: 'id',
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      keywords: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      data: {
        type: DataTypes.JSONB,
        defaultValue: {},
      },
      hasAuth: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      hitCount: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      viewCount: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.ENUM,
        values: ['static', 'dynamic'],
        defaultValue: 'static',
      },
      visibility: {
        type: DataTypes.ENUM,
        values: ['public', 'private'],
        defaultValue: 'public',
      },
      status: {
        type: DataTypes.ENUM,
        values: ['active', 'inactive'],
        defaultValue: 'active',
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    },
  );

  Payload.associate = function payloadAssociate(db) {
    db.Payload.belongsTo(db.User, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      as: 'owner',
    });
    db.Payload.hasMany(db.Payload, {
      as: 'parentData',
      foreignKey: 'parentId',
      sourceKey: 'id',
      useJunctionTable: false,
    });
  };
  return Payload;
};
