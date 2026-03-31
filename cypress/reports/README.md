# 🧪 Cypress Saucedemo Automation

Proyecto de automatización de pruebas E2E desarrollado con Cypress sobre la aplicación Saucedemo.

## 🚀 Tecnologías utilizadas
- Cypress
- JavaScript
- Mochawesome (reportes)

## 📌 Alcance de pruebas
- Login (exitoso, fallido, usuario bloqueado)
- Agregar productos al carrito

## 🧩 Buenas prácticas implementadas
- Page Object Model (POM)
- Custom Commands
- Tests modulares
- Ejecución en modo headless

## 📊 Reportes
Se generan reportes HTML con Mochawesome:

```bash
npx cypress run
npx mochawesome-merge cypress/reports/mochawesome*.json --output cypress/reports/final.json
npx marge cypress/reports/final.json -f reporte-final -o cypress/reports