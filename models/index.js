const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Traveller.belongstoMany(Location, {
    through: {
        model: Trip,
        unique: false,
    },
});

Location.belongstoMany(Traveller, {
    through: {
        model: Trip,
        unique: false,
    }
})

module.exports = { Location, Traveller, Trip };
