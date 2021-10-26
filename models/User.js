const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
            
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            beforeBulkCreate: async (newUserData) => {
                newUserData.forEach(user => {
                    user.password = await bcrypt.hash(req.body.password, 10)
                })
                console.log(newUserData)
                return newUserData
            },
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(req.body.password, 10)
                return newUserData
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(req.body.password, 10)
            },
            beforeBulkUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(req.body.password, 10)
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
       
    }

)

module.exports = User