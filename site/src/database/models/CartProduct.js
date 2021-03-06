module.exports = (sequelize,DataTypes) =>{ 
    let alias = 'CartProduct';
    let cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            allowNull:false
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull:false
        },    
        price:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        patenting:{
            type: DataTypes.DOUBLE
        },
        forms: {
            type: DataTypes.INTEGER
        },
        totalPrice:{
            type: DataTypes.DOUBLE,
            allowNull:false
        }
    }
    let config = {
        tableName: 'cartProduct'
    }
    const CartProduct = sequelize.define(alias,cols,config)

    CartProduct.associate=function(models){
        CartProduct.belongsTo(models.User,{
            as: "User",
            foreingKey: "userId"
        })
        CartProduct.belongsTo(models.Product,{
            as: "Product",
            foreingKey: "productId"
        })
    }
    return CartProduct;
}