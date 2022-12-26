const allRoles = {
  user: [],
  super_user: ["getUsers", "manageUsers"],
  administrator: ["getUsers", "manageUsers"],
  teacher: [],
  employee: [],
  student: [],
  parent: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
