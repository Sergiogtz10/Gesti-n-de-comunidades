from api.shared.encrypte_pass import encryp_pass

data = {
    "Roles":[
        {
            "role_id": 1,
            "role_name": "Administrador"
        },
        {
            "role_id": 2,
            "role_name": "Propietario"
        }
    ],

    "Community":[
        {
            
            "address": "C/ Vilafranca 2, Barcelona",
            "flats": 15
        },
        {
            
            "address": "C/ Industria 64, Segovia",
            "flats": 34
        }
    ],

    "Activities":[
        {
            "day": "17/02/2024",
            "time": "16:50h",
            "description": "Reparación del ascensor.",
            "severity": "Importante",
            "community_id": 1
        },
        {
            "day": "11/06/2023",
            "time": "18:30h",
            "description": "Reunión de vecinos.",
            "severity": "Muy importante",
            "community_id": 1
        }
    ],

    "User":[
        {
            
            "first_name":"Marina",
            "last_name":"Rojo",
            "flat_number":"5ºA",
            "phone_number":"602602602",
            "email":"marina@gmail.com",
            "password": encryp_pass("1234"),
            "role_id":1
        },
          {
            
            "first_name":"Mireia",
            "last_name":"Gonzalez",
            "flat_number":"3ºB",
            "phone_number":"602602603",
            "email":"mireia@gmail.com",
            "password": encryp_pass("1234"),
            "role_id":2
        }
    ],

    "Rel_user_community":[
        {
            "user_id":1,
            "community_id":1
        },

        {
            "user_id":2,
            "community_id":1
        }
    ],

    "Incident":[
    {
        "community_id": 1,
        "description": "Cristal roto",
        
        "severity": "Grave",
        "user_id": 2,
        "zone": "Cocina",
        "common": False
    },
    {
        "community_id": 1,
        "description": "Cesped levantado",
        
        "severity": "Leve",
        "user_id": 2,
        "zone": "Piscina",
        "common": True
    },
    {
        "community_id": 1,
        "description": "No funciona el grifo, no sale agua",
        
        "severity": "Medio",
        "user_id": 1,
        "zone": "Baño",
        "common": False
    }
    ]
}