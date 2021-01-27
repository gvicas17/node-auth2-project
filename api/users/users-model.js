const db = require('../../data/db-config')

module.exports = {
    find, 
    add, 
    findById,
    findBy
}

function find(){
    return db('users')
    .select('users.username', 'users.department')
}

async function add(newUser){
    const [id] = await db('users')
    .insert(newUser, 'id')
    return findById(id)
}

function findById(id){
    return db('users')
    .select('users.username', 'users.department')
    .where('id', id)
    .first()
}

function findBy(filter){
    return db('users')
        .select('users.username', 'users.department')
        .where(filter)
}