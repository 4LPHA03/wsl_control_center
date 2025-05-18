# 🖥️ WSL Control Center

**WSL Control Center** to nowoczesny panel zarządzania środowiskami Linux uruchomionymi przez WSL (Windows Subsystem for Linux) z poziomu przeglądarki. Projekt łączy frontend oparty o React z backendem napisanym w Pythonie przy użyciu FastAPI oraz lokalnego CLI do wykonywania komend systemowych.

---

## 🚀 Funkcjonalności

- 🔍 Lista wszystkich zainstalowanych dystrybucji WSL (np. Ubuntu, Debian, Kali)
- ▶️ Uruchamianie i zatrzymywanie konkretnych dystrybucji
- 📦 Wyświetlanie i kontrolowanie procesów systemowych
- 📁 Podgląd struktury katalogów w systemie plików
- 📜 Wykonywanie komend CLI z poziomu przeglądarki
- 📡 REST API (FastAPI) do integracji z innymi aplikacjami

---

## 🛠️ Technologie

### Backend:
- [Python 3.10+](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/)
- Obsługa komend WSL przez `subprocess` i `wsl.exe`

### Frontend:
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [React Scripts (CRA)](https://create-react-app.dev/)

---
🐍 Backend (FastAPI)
Otwórz terminal WSL i przejdź do folderu projektu:

cd ~/wsl-control-center/backend

Utwórz i aktywuj wirtualne środowisko:

python3 -m venv venv
source venv/bin/activate

Zainstaluj zależności:

pip install -r requirements.txt

Uruchom backend:

uvicorn app:app --reload
Backend będzie domyślnie działał pod adresem: http://127.0.0.1:8000


⚛️ Frontend (React)
W nowym terminalu przejdź do folderu frontend:

cd ~/wsl-control-center/frontend

Zainstaluj zależności:

npm install

Uruchom frontend:

npm start


Aplikacja otworzy się automatycznie w przeglądarce pod adresem: http://localhost:3000

🌐 Gotowe!
Frontend łączy się z backendem na porcie 8000 i pozwala zarządzać dystrybucjami WSL z poziomu przeglądarki.

---

Endpoint	    Metoda	  Opis
/wsl/list	    GET	      Lista zainstalowanych WSL
/wsl/start    POST	    Uruchamia wskazaną dystrybucję
/wsl/stop	    POST	    Zatrzymuje dystrybucję

---

🔐 Wymagania
Windows 10/11 z WSL2

Zainstalowane dystrybucje (Ubuntu, Debian itp.)

Node.js 18+

Python 3.10+





📌 Status projektu
✅ Działa lokalnie
🔧 Trwa rozwój GUI i dodatkowych funkcji (obsługa wielu wsl na raz, graficzna prezentacja zużycia zasobów przez instancje linuxa)

dev by 4LPHA03 aka bsolecki
