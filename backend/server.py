import os
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from login.views import router as login_router

if not os.path.exists("users.json"):
    with open("users.json", "w", encoding="utf-8") as file:
        json.dump([], file)

app = FastAPI()

app.include_router(login_router, prefix="/auth", tags=["login"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou ["http://localhost:3000"] se quiser restringir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to AgendaPro API!"}

