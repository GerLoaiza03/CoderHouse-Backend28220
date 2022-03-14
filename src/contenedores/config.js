const config = { 
    firebase:{
        "type": "service_account",
        "project_id": "ecommerce-a5793",
        "private_key_id": "a073e6d1a21e78066a24a3d5dc816c8546a5f789",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/B1s1cWeVPfKx\nyYJ5fVl7jmFmDnyCbryDMXdCVnsysM/g0YlZayXjdSAoY7fVfsowxr4hCM8oPzyj\n/TAsFJLKYmr62no6QTN1UdqqJgAQdyGHSnMMGQxGyNaFxqMgSfO7QyeLJaeqYkyD\ny9usTiQyuqPeCDt6fIIFAh6GUSt4fXJpERBPnyZbcxUIwb1wzhOpDxAvUwBcuc0h\ncSOHrC0gXX1tUTicDzrvO6ANvrcvAgSYe2OefSnJ1W1Ja6FY/0hRceH3CxmXzT3j\n2RC7dImMsFo1lZij5M+44k4G7D8HtPV+IlUFva27GcS+d2PEyJYydfCACZWWzNeu\ne3/ndYAHAgMBAAECggEAWxpQBlnSM5u6nc1jezsrrMBHdRudh7r2Dn9NyAZkdNVc\nHnTv0wRFqoeWUYzVBG2WUdLGpAyGd0RJUFAUZEFfjEOJj58YQaYMu3vRE+pRh4i5\nJcN8wJ1FfJCVtnD4JRL/uSQavMK1ho2gvg4/8pnFq6fVNLOqYgz1GRxcoGQfnjMq\ne8ZMa1PiZtZ/dp6y39T2DdGZDifReLE9hsDTexeEj3nH3um6jhHC57yar78dl96/\n8u6l1w3djn0Eg2z3HUJXmlUrRrp3X27p09G/j1KjAc/EU4YAPk839blK+VJFgCD9\nqWym4Lx9j9V+m8S+8LTA/Bc8RJgZbFbskIZ2sA7/aQKBgQDmfHzSrZD6PeLGHWNY\nmdPZ+4DYThigQOo5NUMyAKAbFs3TM6tUlTxtlRQjFUX1PljgJwElEhoxxsoXJAHN\nawyenRdWMBJ+tS5ZeG9GsuWmeJR+rJl6mKrJxqb//e4Ug6swDj79lGcWLhd1gNnx\nM1N3KVa8SeL6ZzZIOLX3JWLSQwKBgQDULLjeMKLq3uffWmJOFOiZkXKsjMyn79Iu\nQGjdiOPbZbY7aFzgBedLo+xyOs9KGBJN2Y09ixpi1xSErH+ebRJlD53A+gJoj/2b\ndYg/TIf0eudg8VLG2fbMzvXiDV9yx2knTeCzokp97XyXyJEyV18j1BXa/eLNs9UI\nFKVsynJI7QKBgQDRcA1843r56YJHxCyiNiXrzj4mT9DQziwID/4fUbIq623cnPby\nxSlD6lOCDbKkRyM7jDXeGbTzxk+c93srzjqJZvXtu4ES4lBbvLRg6e8Edk15Th2o\n6VFISNs3gub0fTDxWgCjLFcAMKHghFWGd71AarAGKJ24LFGHDwFKsw45QQKBgC8q\ntfom48DExtUfOaVT/pVNASocrs5SgO3pQaal7Ml0Jfu06piel1l4WnLWYgh9q2wF\nBeH9j2MTnysTUdd9Nc6jlxU0Pt7Ry7YIfb5cnAicXd1uKFGuWLAU/hI/mM1iSR0E\nsgQc+uRdrAnt+2EujSbg2e7x676A0MXYGSJDKv7NAoGARgLshxmRMZWzRoZiTDQS\ndERchC0ZPGICWeObyWUdML8YvjShLxmG5BdMAB3C/9Z+CYiKNoIBLgjCcqfmG770\nngqOAdT3u0QdxXjNWK9jzU1giliTwJgobrpFbDNLlmS6PgLuGt8+vboIoaa5Xuyy\ngjiVBNX8EdcXml4ud4KwjzY=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-p60x6@ecommerce-a5793.iam.gserviceaccount.com",
        "client_id": "116402502436316137569",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p60x6%40ecommerce-a5793.iam.gserviceaccount.com"
    },
    mongodb: {
        cnxStr: 'mongodb://127.0.0.1:27017/ecommerce',
    }
}

module.exports = config;