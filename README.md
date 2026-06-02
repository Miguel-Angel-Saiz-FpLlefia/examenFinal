# IA9 — gestor-events · Checklist

> Marca `[x]` només el que funcioni. Suma la columna «Punts» de les files marcades.

### A. Teoria (full d'examen — no marquis aquí)

| **Punts A** | \_\_\_ / 2,0 (professorat) |

### B. Frontend (`apps/web`) — màx. 3,0 · PR: 3,0

|       | Criteri                                         | Punts         |
| ----- | ----------------------------------------------- | ------------- |
| [ X ] | B0 — Monorepo amb `apps/web` i `apps/api`       | 0,2           |
| [ X ] | B1 — `app/page.tsx` amb títol                   | 0,2           |
| [ X ] | B2 — `app/events/page.tsx` funcional            | 0,4           |
| [ X ] | B3 — `EventCard` reutilitzable                  | 0,5           |
| [ X ] | B4 — Targetes amb `id`, `nom`, `data`, `ciutat` | 0,6           |
| [ X ] | B5 — Almenys 4 events visibles                  | 0,3           |
| [ X ] | B6 — Estil bàsic (CSS o Tailwind)               | 0,4           |
| [ X ] | B7 — Carpetes `app/` i `components/`            | 0,3           |
| [ X ] | B8 — Frontend arrenca sense errors bloquejants  | 0,1           |
|       | **Subtotal B**                                  | **3,0 / 3,0** |

### C. API (`apps/api`) — màx. 3,0 · PR: \_\_\_

|       | Criteri                                 | Punts            |
| ----- | --------------------------------------- | ---------------- |
| [ X ] | C1 — `GET /api/events` → llistat JSON   | 0,5              |
| [ X ] | C2 — `GET /api/events/:id` → un event   | 0,5              |
| [ X ] | C3 — `id` inexistent → `404` JSON       | 0,5              |
| [ X ] | C4 — `routes/` + `controllers/`         | 0,4              |
| [ X ] | C5 — Dades en memòria                   | 0,2              |
| [ X ] | C6 — Logger (mètode + ruta)             | 0,3              |
| [ X ] | C7 — Errors en JSON                     | 0,3              |
| [ ]   | C8 — Detall amb `nom`, `data`, `ciutat` | 0,1              |
| [ ]   | C9 — API arrenca en local               | 0,2              |
| [ ]   | C10 — Codis HTTP coherents              | 0,2              |
|       | **Subtotal C**                          | **\_\_\_ / 3,0** |

### D. Integració — màx. 1,0 · PR: \_\_\_

|     | Criteri                          | Punts            |
| --- | -------------------------------- | ---------------- |
| [ ] | D1 — `fetch` a `GET /api/events` | 0,3              |
| [ ] | D2 — `loading`                   | 0,2              |
| [ ] | D3 — Missatge d'error            | 0,2              |
| [ ] | D4 — Llista des de l'API         | 0,2              |
| [ ] | D5 — `EventCard` amb dades API   | 0,1              |
|     | **Subtotal D**                   | **\_\_\_ / 1,0** |

### E. README i PR — màx. 1,0

|     | Criteri                                          | Punts            |
| --- | ------------------------------------------------ | ---------------- |
| [ ] | E1 — README **només** aquest checklist (res més) | 0,3              |
| [ ] | E2 — Checklist B, C, D complet                   | 0,2              |
| [ ] | E3 — Els `[x]` coincideixen amb el codi          | 0,2              |
| [ ] | E4 — PR B mergeada (enllaç a dalt)               | 0,1              |
| [ ] | E5 — PR C mergeada (enllaç a dalt)               | 0,1              |
| [ ] | E6 — PR D mergeada (enllaç a dalt)               | 0,1              |
|     | **Subtotal E**                                   | **\_\_\_ / 1,0** |

### Resum

| Apartat        | Punts | Màxim    |
| -------------- | ----- | -------- |
| A. Teoria      |       | 2,0      |
| B. Frontend    |       | 3,0      |
| C. API         |       | 3,0      |
| D. Integració  |       | 1,0      |
| E. README + PR |       | 1,0      |
| **TOTAL**      |       | **10,0** |

# examenFinal
