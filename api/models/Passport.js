/* eslint-disable max-len */

/**
 * Passport.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @swagger
 *
 * /User:
 *   description: |
 *     You might write a short summary of how this **User** model works and what it represents here.
 *
 *   tags:
 *     - User (ORM)
 *     - User (ORM duplicate)
 *
 * /allActions:
 *   externalDocs:
 *     url: https://somewhere.com/yep
 *     description: Refer to these docs for more info
 *
 * /find:
 *   description: >
 *     _Alternate description_: Find a list of **User** records that match the specified criteria.
 *
 * tags:
 *
 *   - name: User (ORM)
 *     description: |
 *       A longer, multi-paragraph description
 *       explaining how this all works.
 *
 *       It is linked to more information.
 *
 *     externalDocs:
 *       url: https://somewhere.com/yep
 *       description: Refer to these docs
 *
 * components:
 *   examples:
 *     modelDummy:
 *       summary: A model example example
 *       value: dummy
 */

module.exports = {
  attributes: {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },

    provider: {
      type: Sequelize.STRING(191),
      allowNull: false,
      unique: false,
    },

    accessToken: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: false,
      maxLength: 255,
    },

    refreshToken: {
      type: Sequelize.TEXT,
      allowNull: true,
      unique: false,
      maxLength: 255,
    },

    refreshedAt: {
      type: Sequelize.BIGINT,
      description:
        'A JS timestamp (epoch ms) representing the moment at which this user most recently interacted with the backend while logged in (or 0 if they have not interacted with the backend at all yet).',
      example: 1502844074211,
    },
  },
  associations() {
    sails.models.passport.belongsTo(sails.models.user);
  },
  options: {
    paranoid: false,

    timestamps: true,
  },
};
