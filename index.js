 require('datejs')
function combineUsers(...args){
  const combineObject = {
    users: [],
    merge_date: ''
  };

for(const array of args){
  combineObject.users = [
    ...combineObject.users,
    ...array
  ];
}
combineObject.merge_date = Date.today().toString("M/d/yyyy");

return combineObject;
}

module.exports = { combineUsers };
