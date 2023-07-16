export default {
    environment: "prod",
    app: {
        module: "store_service",
        host: "http://localhost:3000",
        backendPort: 1234,
    },
    database: {
        host: "replace-with-your-hostname",
        port: 25061,
        database: "replace-with-your-database-name",
        username: "replace-with-your-database-username",
        password: "replace-with-your-database-password",
        dialect: "mysql | mariadb | sqlite | postgres | mssql",
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
                endpoint: "replace-with-your-endpoint-included-https",
                region: "replace-with-your-region",
                credentials: {
                    accessKeyId: "replace-with-your-key-id",
                    secretAccessKey: "replace-with-your-secret-access-key",
                },
            },
            bucketName: "replace-with-your-bucket-name",
            uploadPath: "uploads/private/modules/store_service-module/"
        },
    },
    secrets: {
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
