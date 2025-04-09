# TodoApp – ASP.NET Core Web API

Tento projekt je jednoduchá RESTful API aplikácia pre správu úloh (To-Do List), vytvorená pomocou ASP.NET Core Web API a SQLite databázy. Backend je pripravený na napojenie s frontendovou časťou vyvíjanou v Reacte.

## Ciele projektu

Cieľom je vytvoriť backendovú aplikáciu, ktorá umožňuje manipuláciu s úlohami prostredníctvom HTTP metód. API poskytuje základné CRUD operácie:
- vytváranie úloh
- získanie zoznamu úloh
- aktualizácia existujúcich úloh
- mazanie úloh

## Funkcionalita

API poskytuje nasledujúce endpointy:

- `GET /api/todoitems` – vráti všetky úlohy
- `POST /api/todoitems` – vytvorí novú úlohu
- `PUT /api/todoitems/{id}` – aktualizuje existujúcu úlohu podľa ID
- `DELETE /api/todoitems/{id}` – odstráni úlohu podľa ID

Každá úloha obsahuje:
- `Id` – identifikátor úlohy
- `Title` – názov alebo popis úlohy
- `IsDone` – príznak, či je úloha dokončená

## Použité technológie

- .NET 7 (ASP.NET Core Web API)
- Entity Framework Core
- SQLite databáza
- Swagger (Swashbuckle) pre dokumentáciu API
- Rider ako vývojové prostredie
- Git a GitHub na verzovanie a spoluprácu

## Projektová štruktúra
