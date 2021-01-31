module.exports = {
  username:'postgres',
  password:'root',
  database:'Users',
  host:'127.0.0.1',
  dialect:'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
  }
}
