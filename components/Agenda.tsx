"use client";

import { useState } from "react";

const EVENTOS = [
  { evento: "DP10", data: "2 de outubro de 2026" },
];

export default function Agenda() {
  const [open, setOpen] = useState(false);

  return (
    <div className="agenda">
      <button
        className="btn-abrir agenda-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="agenda-tabela"
      >
        Agenda de eventos
      </button>

      {open && (
        <table id="agenda-tabela" className="sheet">
          <thead>
            <tr>
              <th>Evento</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {EVENTOS.map((e) => (
              <tr key={e.evento + e.data}>
                <td>{e.evento}</td>
                <td>{e.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
