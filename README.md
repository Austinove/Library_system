# Bibliotheksverwaltungssystem (Deutsch)

## Übersicht

Dieses Projekt wurde im Rahmen meiner Bewerbung für die Ausbildung zum Fachinformatiker für Anwendungsentwicklung erstellt.

Ziel dieses Projekts war es, mein Verständnis für die Grundlagen der Softwareentwicklung, objektorientierte Programmierung, die Trennung von Verantwortlichkeiten sowie die Entwicklung einer vollständigen Anwendung vom Backend bis zum Frontend zu demonstrieren.

Die Anwendung ermöglicht:

- die Verwaltung von Büchern,
- die Organisation von Regalen,
- das Ausleihen und Zurückgeben von Büchern,
- die Erfassung von Entleiherdaten,
- die Nachverfolgung des Ausleihstatus.

---

## Funktionen

### Bücher

- Bücher anlegen
- Bücher anzeigen
- Bücher löschen
- Bücher Regalen zuordnen
- ISBN speichern
- Buchdetails anzeigen

### Regale

- Regale anlegen
- Regale bearbeiten
- Regale löschen
- Bücher organisieren

### Ausleihen

- Bücher ausleihen
- Entleiherdaten erfassen
- Zusätzliche Informationen speichern (z. B. Standort und geplantes Rückgabedatum)
- Bücher zurückgeben
- Ausleihstatus verfolgen

---

## Verwendete Technologien

### Backend

- PHP
- Objektorientierte Programmierung (OOP)
- Einfaches MVC-Konzept, selbst entwickelt
- PDO mit vorbereiteten Statements
- REST-ähnliche API-Endpunkte
- WAMP Server
- MySQL

### Frontend

- React
- JavaScript
- React Router
- Tailwind CSS

---

## Architektur und Entscheidungen

Im Rahmen dieser Aufgabe lag mein Fokus darauf, eine Lösung zu entwickeln, die:

- übersichtlich und verständlich ist,
- leicht gewartet werden kann,
- auf bewährten Entwicklungsprinzipien basiert,
- innerhalb des verfügbaren Zeitrahmens sinnvoll umgesetzt werden konnte.

Anstatt unnötige Komplexität einzuführen, habe ich bewusst Wert auf eine saubere Struktur und solide Grundlagen gelegt.

Das Backend wurde ohne große Frameworks entwickelt, um mein Verständnis der Funktionsweise einer MVC-Anwendung zu demonstrieren.

---

## Projektstruktur

```
library_management/
│
├── backend/
├── frontend/
├── database/
│   └── library_management.sql
│
└── README.md
```

---

## Installation

### Voraussetzungen

- WAMP Server
- PHP
- MySQL
- Node.js und npm

---

### Backend einrichten

1. Projekt in das WAMP-`www`-Verzeichnis kopieren.

2. Die Datei

```
database/library_management.sql
```

über phpMyAdmin importieren.

3. Falls erforderlich, die Datenbankkonfiguration anpassen.

4. Apache und MySQL starten.

Die API ist anschließend erreichbar unter:

```
http://localhost/library_management/backend/public/
```

---

### Frontend einrichten

Im Frontend-Ordner ein Terminal öffnen:

```
cd frontend
```

Abhängigkeiten installieren:

```
npm install
```

React starten:

```
npm run dev
```

Anschließend die angezeigte Adresse im Browser öffnen (meist):

```
http://localhost:5173
```

---

## Testen der Anwendung

### Bücher

- Buch hinzufügen
- Buchdetails anzeigen
- Buch löschen

### Regale

- Regal hinzufügen
- Regal bearbeiten
- Regal löschen

### Ausleihen

- Buch ausleihen
- Entleiherdaten erfassen
- Buch zurückgeben

---

## Mögliche Erweiterungen

Mit zusätzlicher Zeit könnten unter anderem folgende Funktionen ergänzt werden:

- Benutzeranmeldung und Rollenverwaltung
- Such- und Filterfunktionen
- Pagination
- Dashboard-Statistiken
- Automatisierte Tests
- Verbesserte Responsivität
- Unterstützung mehrerer Sprachen

---

## Abschließende Worte

Dieses Projekt spiegelt meinen aktuellen Wissensstand und meine Herangehensweise an die Softwareentwicklung wider. Obwohl jede Anwendung weiter verbessert werden kann, zeigt diese Umsetzung meine Lernbereitschaft, meine Motivation sowie meine Fähigkeit, eigenständig eine vollständige Anwendung zu entwickeln.

Vielen Dank für Ihre Zeit und die Prüfung meiner Bewerbung. Ich freue mich sehr über die Gelegenheit und auf eine mögliche Rückmeldung.

# Library Management System (English)

## Overview

This project is a simple Library Management System developed as part of my application for the apprenticeship position (Ausbildung zum Fachinformatiker für Anwendungsentwicklung).

The goal of this project was to demonstrate my understanding of software development fundamentals, object-oriented programming, separation of concerns, and the implementation of a complete application from backend to frontend.

The application allows users to:

- Manage books
- Organize shelves
- Borrow and return books
- Store borrower information and borrowing details
- View the current borrowing status of books

---

## Features

### Books

- Create books
- View books
- Delete books
- Assign books to shelves
- Store ISBN information
- View book details

### Shelves

- Create shelves
- Edit shelves
- Delete shelves
- Organize books by shelf

### Borrowing

- Borrow books
- Record borrower information
- Store additional borrowing details (e.g. location and expected return date)
- Return borrowed books
- Track borrowing status

---

## Technologies Used

### Backend

- PHP
- Object-Oriented Programming (OOP)
- Simple MVC architecture built from scratch
- PDO with prepared statements
- REST-style API endpoints
- WAMP Server
- MySQL

### Frontend

- React
- JavaScript
- React Router
- Tailwind CSS

---

## Design Decisions

For this exercise, I intentionally focused on creating a solution that is:

- Clean and understandable
- Easy to maintain
- Structured using common software development principles
- Practical within the available timeframe

Rather than introducing unnecessary complexity, I prioritized demonstrating solid programming fundamentals and a clear architecture.

The project was developed without the use of large backend frameworks in order to show my understanding of how MVC applications work internally.

---

## Project Structure

```
library_management/
│
├── backend/
├── frontend/
├── database/
│   └── library_management.sql
│
└── README.md
```

---

## Installation

### Requirements

- WAMP Server
- PHP
- MySQL
- Node.js and npm

---

### Backend Setup

1. Place the project inside your WAMP `www` directory.

2. Import the SQL file:

```
database/library_management.sql
```

using phpMyAdmin.

3. Update the database configuration if necessary.

4. Start Apache and MySQL.

The backend API will be available through:

```
http://localhost/library_management/backend/public/
```

---

### Frontend Setup

Open a terminal inside the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the React development server:

```
npm run dev
```

Open the URL displayed by Vite (usually):

```
http://localhost:5173
```

---

## How to Test

### Books

- Add a new book
- View book details
- Delete a book

### Shelves

- Add a shelf
- Edit a shelf
- Delete a shelf

### Borrowing

- Borrow a book
- Enter borrower details
- Return a borrowed book

---

## Future Improvements

Given more time, possible improvements could include:

- Authentication and user roles
- Search and filtering functionality
- Pagination
- Dashboard statistics
- Unit and integration tests
- Enhanced responsive design
- Internationalization (multiple languages)

---

## Final Notes

This project reflects my current knowledge and approach to software development. While there is always room for improvement, I believe it demonstrates my enthusiasm for learning, my ability to build complete applications independently, and my understanding of fundamental development concepts.

Thank you very much for taking the time to review my submission.

I appreciate the opportunity and look forward to hearing from you.
