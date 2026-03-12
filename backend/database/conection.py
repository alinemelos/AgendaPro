import os
import psycopg2
import psycopg2.extras
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL") 

def get_connection():

    if not DATABASE_URL:
        raise ValueError("DATABASE_URL não encontrada. Verifique seu .env ou variáveis de ambiente no Render")
    
    conn = psycopg2.connect(
        DATABASE_URL,
        cursor_factory=psycopg2.extras.RealDictCursor,
        sslmode="require" 
    )
    return conn