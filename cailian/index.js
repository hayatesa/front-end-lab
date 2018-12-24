let param1 = {
    "abpExpert": {
        "id": 1,
        "name": "string",
        "sex": "男",
        "nation": "string",
        "birthDate": '2018-11-11',
        "idNumber": "string",
        "schoolTag": "string",
        "major": "string",
        "duty": "string",
        "jobTitle": "string",
        "workUnit": "string",
        "industry": "string",
        "tel1": "string",
        "tel2": "string",
        "explain": "string",
        "district": "string",
        "filiale": "string",
        "abpExpertItem": [
            {
                "id": 0,
                "text": "string",
                "code": "string",
                "abpItemId": 0,
                "abpExpertId": 0
            }
        ]
    }
};

function commit() {
    axios({
        url: 'http://qy.chinapsp.cn:8883/api/services/app/AbpExpert/CreateOrUpdate',
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiMTQzNzUiLCIxNDM3NSJdLCJuYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IldPWlBYRk1KRlkyVjRSMjYyNUhJSEdLVUVRRFZMQUFZIiwicm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMiIsImp0aSI6ImU0M2Q1MGNiLTRiY2MtNDJiMi1hYmQ2LTAzNmQzZjVkYzdmNCIsImlhdCI6MTU0NTAxNzI5OSwibmJmIjoxNTQ1MDE3Mjk5LCJleHAiOjE1NDUxMDM2OTksImlzcyI6IkJpZFByb2plY3QiLCJhdWQiOiJCaWRQcm9qZWN0In0.naYgv7Qvo-Na4R53z1SKP_4gD1ThwmdBa0R1mknLTkc'
        },
        data: JSON.stringify(param1)
    });
}