export default {
    environment: "kubedev",
    app: {
        module: "e-shop",
        host: "https://prod.io",
        backendPort: 5000,
    },
    database: {
        host: "private-db-postgresql-nyc1-96371-do-user-13342913-0.b.db.ondigitalocean.com",
        database: "E-shop_DEV",
        port: 25061,
        username: "doadmin",
        password: "AVNS_2qrldO7BlaWliI-zsYj",
        dialect: "postgres",
        sync: {
            force: false,
        },
        pool: {
            max: 20,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false,
        define: {
            timestamps: true,
            freezeTableName: false,
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
    storage: {
        s3: {
            client: {
                forcePathStyle: false,
                endpoint: "https://ams3.example.com",
                region: "example",
                credentials: {
                    accessKeyId: "example",
                    secretAccessKey: "example",
                },
            },
            bucketName: "example-dev",
            uploadPath: "uploads/private/modules/e-shop-module/"
        },
    },
    secrets: {
        admin: {
            accessToken: "LS0tS9WRVo1TUs5cG1nMUlQay9paEE5dFIEtFWS0tLS0t2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dFIEtFWS0tLS0t2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQLS0tS9WRVo1TUs5cG1nMUlQay9paEE5d5cG1nMUlQay9paEE5dFIEtFWS0tLS0t2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dFIEtFWS0tLS0t2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dFIEtFWS0tLS0t2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQLS0tS9WRVo1TUs5cG1nMUlQay9paEE5d5cG1nMUlQay9paEE5dFIEtFWS0tLS0t2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dLS0tS9WRVo1TUs5cG1nMUlQay9paEE5dFIES",
            refreshToken: "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlCT2dJQkFBSkJBTlFLQStSV2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQay9paEE5dXF2Ny8rNVlzRjNUVURoCnFHZXN1bGJhdFFGdkNPaHVmSlNJQmFWT3RjbVZrTWZoWmRrQ0F3RUFBUUpBYkVlTkF6NnpaQzhBR3BhbGc4TmgKelBJdFNmaWFiWnd6dWVTcTh0L1RoRmQrUGhqN2IxTmphdjBMTjNGamhycjlzV3B2UjBBNW13OFpoSUFUNzZMUgpzUUloQU95Zmdhdy9BSTVoeGs3NmtWaVRRV0JNdjdBeERwdi9oSG1aUFdxclpyL1ZBaUVBNVdjalpmK0NaYlhTCnlpV3dUbEVENGVZQ3BSNk16Qk8wbFVhbExKdVRFL1VDSUhWTWZSUE9CNUNObDZqL1BaNFRJWTJEZm1MeGJyU1cKYmkxNWNhQzNaekFoQWlBNmUrVG1hQkdTWkp4c3ROY1I0RTJoRmNhdTJlOERTRExOcThrSWFsRkEwUUloQUlwUApUODFlWlNzYmVrNTlidGJPZ3J3bTJBdzJqUVk4TitJa3FMSTNySWFFCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"
        },
        user: {
            accessToken: "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlCT2dJQkFBSkJBTlFLQStSV2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQay9paEE5dXF2Ny8rNVlzRjNUVURoCnFHZXN1bGJhdFFGdkNPaHVmSlNJQmFWT3RjbVZrTWZoWmRrQ0F3RUFBUUpBYkVlTkF6NnpaQzhBR3BhbGc4TmgKelBJdFNmaWFiWnd6dWVTcTh0L1RoRmQrUGhqN2IxTmphdjBMTjNGamhycjlzV3B2UjBBNW13OFpoSUFUNzZMUgpzUUloQU95Zmdhdy9BSTVoeGs3NmtWaVRRV0JNdjdBeERwdi9oSG1aUFdxclpyL1ZBaUVBNVdjalpmK0NaYlhTCnlpV3dUbEVENGVZQ3BSNk16Qk8wbFVhbExKdVRFL1VDSUhWTWZSUE9CNUNObDZqL1BaNFRJWTJEZm1MeGJyU1cKYmkxNWNhQzNaekFoQWlBNmUrVG1hQkdTWkp4c3ROY1I0RTJoRmNhdTJlOERTRExOcThrSWFsRkEwUUloQUlwUApUODFlWlNzYmVrNTlidGJPZ3J3bTJBdzJqUVk4TitJa3FMSTNySWFFCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t",
            refreshToken: "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlCT2dJQkFBSkJBTlFLQStSV2ZQZFdHR25iYS9WRVo1TUs5cG1nMUlQay9paEE5dXF2Ny8rNVlzRjNUVURoCnFHZXN1bGJhdFFGdkNPaHVmSlNJQmFWT3RjbVZrTWZoWmRrQ0F3RUFBUUpBYkVlTkF6NnpaQzhBR3BhbGc4TmgKelBJdFNmaWFiWnd6dWVTcTh0L1RoRmQrUGhqN2IxTmphdjBMTjNGamhycjlzV3B2UjBBNW13OFpoSUFUNzZMUgpzUUloQU95Zmdhdy9BSTVoeGs3NmtWaVRRV0JNdjdBeERwdi9oSG1aUFdxclpyL1ZBaUVBNVdjalpmK0NaYlhTCnlpV3dUbEVENGVZQ3BSNk16Qk8wbFVhbExKdVRFL1VDSUhWTWZSUE9CNUNObDZqL1BaNFRJWTJEZm1MeGJyU1cKYmkxNWNhQzNaekFoQWlBNmUrVG1hQkdTWkp4c3ROY1I0RTJoRmNhdTJlOERTRExOcThrSWFsRkEwUUloQUlwUApUODFlWlNzYmVrNTlidGJPZ3J3bTJBdzJqUVk4TitJa3FMSTNySWFFCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t"
        },
    },
    corsOptions: {
        origin: ["http://localhost:3000"],
        credentials: true,
        optionSuccessStatus: 200,
    },
}
