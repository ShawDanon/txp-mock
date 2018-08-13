var apiDate = [
  {
    method: "post",
    isMockData: false,
    url: "/login",
    data: {
      status: 0,
      data: [
        {
          authName: "权限管理",
          type: 0,
          url: "/authManage",
          subset: [
            {
              authName: "角色模块",
              type: 1,
              id: 4,
              url: "/tbuser/roleList",
              subset: [
                {
                  authName: "获取用户信息",
                  type: 2,
                  subset: [],
                  handleType: "view",
                  id: 11,
                  url: "/tbuser/getUserInfo"
                },
                {
                  authName: "新增用户",
                  type: 2,
                  subset: [],
                  handleType: "add",
                  id: 12,
                  url: "/tbuser/saveUser"
                },
                {
                  authName: "配置权限",
                  type: 2,
                  subset: [],
                  handleType: "getTestTree",
                  id: 14,
                  url: "/tbuser/tree"
                },
                {
                  authName: "更新树",
                  type: 2,
                  subset: [],
                  handleType: "updateTestTree",
                  id: 15,
                  url: "/tbuser/tree"
                }
              ]
            },
            {
              authName: "角色模块1",
              type: 1,
              id: 5,
              url: "/tbuser/roleList1",
              subset: [
                {
                  authName: "获取用户信息",
                  type: 2,
                  subset: [],
                  handleType: "view",
                  id: 11,
                  url: "/tbuser/getUserInfo1"
                },
                {
                  authName: "新增用户",
                  type: 2,
                  subset: [],
                  handleType: "add",
                  id: 12,
                  url: "/tbuser/saveUser1"
                },
                {
                  authName: "配置权限",
                  type: 2,
                  subset: [],
                  handleType: "getTestTree",
                  id: 141,
                  url: "/tbuser/tree1"
                },
                {
                  authName: "更新树",
                  type: 2,
                  subset: [],
                  handleType: "updateTestTree",
                  id: 115,
                  url: "/tbuser/tree1"
                }
              ]
            }
          ]
        },
        {
          authName: "系统管理",
          type: 0,
          url: "/system",
          subset: [
            {
              authName: "用户模块",
              type: 1,
              id: 4,
              url: "/tbuser/userList",
              subset: [
                {
                  authName: "获取用户信息",
                  type: 2,
                  subset: [],
                  handleType: "view",
                  id: 11,
                  url: "/tbuser/getUserInfo"
                },
                {
                  authName: "新增用户",
                  type: 2,
                  subset: [],
                  handleType: "add",
                  id: 12,
                  url: "/tbuser/saveUser"
                },
                {
                  authName: "配置权限",
                  type: 2,
                  subset: [],
                  handleType: "getTestTree",
                  id: 14,
                  url: "/tbuser/tree"
                },
                {
                  authName: "更新树",
                  type: 2,
                  subset: [],
                  handleType: "updateTestTree",
                  id: 15,
                  url: "/tbuser/tree"
                }
              ]
            }
          ]
        }
      ]
    }
  }
];
module.exports = apiDate;