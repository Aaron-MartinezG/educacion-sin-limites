import { calcularPorcentaje, obtenerMensajeFeedback, formatearRacha } from "../utils";

describe("calcularPorcentaje", () => {
  it("retorna 0 cuando el total es 0", () => {
    expect(calcularPorcentaje(0, 0)).toBe(0);
  });

  it("calcula el porcentaje correctamente", () => {
    expect(calcularPorcentaje(7, 10)).toBe(70);
  });

  it("redondea al entero más cercano", () => {
    expect(calcularPorcentaje(1, 3)).toBe(33);
  });
});

describe("obtenerMensajeFeedback", () => {
  it("devuelve mensaje de excelente para >= 90", () => {
    expect(obtenerMensajeFeedback(95)).toContain("Excelente");
  });

  it("devuelve mensaje de ánimo para < 50", () => {
    expect(obtenerMensajeFeedback(40)).toContain("No te rindas");
  });
});

describe("formatearRacha", () => {
  it("usa singular para 1 día", () => {
    expect(formatearRacha(1)).toBe("1 día");
  });

  it("usa plural para múltiples días", () => {
    expect(formatearRacha(5)).toBe("5 días");
  });
});
