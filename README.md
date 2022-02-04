# backendtestpatrick
Variaveis de Ambiente estão no .env.example, apenas retirar o .example

ID da cidade na API Climatempo foi: 5575
Cidade: Canoas
Alguns CEPs válidos:
92032023
92200170
92412216

POST  http://localhost:3000/api/get-forecast
corpo da requisição JSON example
{
	"cep": 92032023,
	"data": "2022-02-05"
}

resposta da requisição example
200 OK
{
  "message": {
    "date": "2022-02-05",
    "date_br": "05/02/2022",
    "humidity": {
      "min": 47,
      "max": 75,
      "dawn": {
        "min": 69,
        "max": 74
      },
      "morning": {
        "min": 49,
        "max": 75
      },
      "afternoon": {
        "min": 47,
        "max": 48
      },
      "night": {
        "min": 50,
        "max": 76
      }
    },
    "pressure": {
      "pressure": 1000.6
    },
    "rain": {
      "probability": 90,
      "precipitation": 12
    },
    "wind": {
      "velocity_min": 4,
      "velocity_max": 20,
      "velocity_avg": 12,
      "gust_max": 32,
      "direction_degrees": 323,
      "direction": "NW",
      "dawn": {
        "direction": "NE",
        "direction_degrees": 39,
        "gust_max": 32,
        "velocity_max": 20,
        "velocity_avg": 15
      },
      "morning": {
        "direction": "WNW",
        "direction_degrees": 305,
        "gust_max": 25,
        "velocity_max": 14,
        "velocity_avg": 12
      },
      "afternoon": {
        "direction": "W",
        "direction_degrees": 287,
        "gust_max": 22,
        "velocity_max": 17,
        "velocity_avg": 13
      },
      "night": {
        "direction": "W",
        "direction_degrees": 304,
        "gust_max": 22,
        "velocity_max": 17,
        "velocity_avg": 10
      }
    },
    "uv": {
      "max": 13
    },
    "thermal_sensation": {
      "min": 20,
      "max": 29
    },
    "text_icon": {
      "icon": {
        "dawn": "4rn",
        "morning": "4r",
        "afternoon": "4r",
        "night": "4rn",
        "day": "4r"
      },
      "text": {
        "pt": "Sol com muitas nuvens e chuva",
        "en": "Sun and rain.",
        "es": "Sol con muchas nubes durante el día. Períodos de nublado, con lluvia a cualquier hora.",
        "phrase": {
          "reduced": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
          "morning": "Sol com muitas nuvens e chuva",
          "afternoon": "Sol com muitas nuvens e chuva",
          "night": "Muitas nuvens e chuva",
          "dawn": "Muitas nuvens e chuva"
        }
      }
    },
    "temperature": {
      "min": 20,
      "max": 27,
      "dawn": {
        "min": 21,
        "max": 22
      },
      "morning": {
        "min": 20,
        "max": 21
      },
      "afternoon": {
        "min": 22,
        "max": 27
      },
      "night": {
        "min": 24,
        "max": 27
      }
    },
    "cloud_coverage": {
      "low": 6,
      "mid": 12.6,
      "high": 0,
      "dawn": {
        "low": 1.1,
        "mid": 12.3,
        "high": 0
      },
      "morning": {
        "low": 0,
        "mid": 0,
        "high": 0
      },
      "afternoon": {
        "low": 8.1,
        "mid": 3,
        "high": 0
      },
      "night": {
        "low": 14.7,
        "mid": 35.2,
        "high": 0
      }
    },
    "sun": {
      "sunrise": "05:56:00",
      "sunset": "19:20:00"
    }
  }
}