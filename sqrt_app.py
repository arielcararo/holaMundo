#!/usr/bin/env python3

import math
import sys


def parse_float(text: str) -> float:
	"""Parsea una cadena a float, lanzando ValueError si no es válido."""
	text = text.strip().replace(",", ".")
	return float(text)


def compute_real_square_root(value: float) -> float:
	"""Devuelve la raíz cuadrada real de value. Lanza ValueError si value < 0."""
	if value < 0:
		raise ValueError("No existe raíz cuadrada real para números negativos")
	return math.sqrt(value)


def main() -> int:
	# Permite pasar el número como argumento o ingresarlo por teclado
	if len(sys.argv) > 1:
		input_text = sys.argv[1]
	else:
		try:
			input_text = input("Ingresa un número real: ")
		except EOFError:
			print("No se recibió entrada.")
			return 1

	try:
		value = parse_float(input_text)
	except ValueError:
		print("Entrada inválida. Por favor ingresa un número real, por ejemplo: 3.5")
		return 1

	try:
		result = compute_real_square_root(value)
	except ValueError as exc:
		print(str(exc))
		return 1

	# Imprime el resultado con buena precisión
	print(f"La raíz cuadrada de {value} es {result}")
	return 0


if __name__ == "__main__":
	sys.exit(main())

