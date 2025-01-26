/**
 * @param {import('mongodb').Db} db
 * @param {import('mongodb').MongoClient} client
 */
export const up = async (db, client) => {
    await db.collection('sample').insertOne({ name: 'sample' })
}

/**
 * @param {import('mongodb').Db} db
 * @param {import('mongodb').MongoClient} client
 */
export const down = async (db, client) => {
  await db.collection('sample').deleteOne({ name: 'sample' })
}
