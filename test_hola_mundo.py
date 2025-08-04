#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import unittest
from io import StringIO
import sys
from hola_mundo import main

class TestHolaMundo(unittest.TestCase):
    """Clase de pruebas para el programa hola_mundo."""
    
    def test_main_output(self):
        """Prueba que la función main imprima el mensaje esperado."""
        # Capturar la salida estándar
        captured_output = StringIO()
        sys.stdout = captured_output
        
        try:
            main()
            output = captured_output.getvalue()
            
            # Verificar que contiene los mensajes esperados
            self.assertIn("¡Hola Mundo!", output)
            self.assertIn("Mi primer programa en Python", output)
            self.assertIn("Hello World!", output)
            self.assertIn("My first Python program", output)
        finally:
            sys.stdout = sys.__stdout__

if __name__ == "__main__":
    unittest.main()