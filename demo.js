const map = new Map([
    [
        "a组",
        [
            {
                "id": "1746133410541748228",
                "createUser": "8888888888888888888",
                "createTime": "2024-01-13 19:33:41",
                "updateUser": "8888888888888888888",
                "updateTime": "2024-01-18 21:24:37",
                "version": 0,
                "disable": 0,
                "name": "a标签",
                "type": 1,
                "parentId": "1746133410541748227",
                "depth": 1,
                "path": "1746133410541748227.1746133410541748228",
                "qywxTagId": "etvInpdgAAR9X9KThTyyr7GElPuSDiRw",
                "lastSynchTime": "2024-01-18 21:24:37",
                "order": 0,
                "bindTime": "2023-09-26 17:41:57"
            }
        ]
    ]
])

// console.log(map);
for (const [key,value] of map) {
    console.log(key, Array.isArray(value),value);
}