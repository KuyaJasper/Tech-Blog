const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
    await sequelize.sync({
        force: true
    });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // for (const blog of blogData) {
    //     await Blog.create({
    //         //spreads blog object so sequelize can understand and use the data
    //         ...blog,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }

    const blogs = await Blog.bulkCreate(blogData,{
        individualHooks: true,
        returning:true,
    });

    await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();