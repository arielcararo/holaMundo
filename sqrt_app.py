#!/usr/bin/env python3

import argparse
import math
import sys


def compute_real_square_root(value: float) -> float:
    """Return the real square root of a non-negative number.

    Raises:
        ValueError: If value is negative.
    """
    if value < 0:
        raise ValueError("Input must be non-negative to compute a real square root.")
    return math.sqrt(value)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Compute the real square root of a non-negative number."
    )
    parser.add_argument(
        "--number",
        "-n",
        type=float,
        help="The input number (must be non-negative). If omitted, reads from stdin.",
    )
    return parser.parse_args()


def read_number_from_stdin() -> float:
    try:
        raw = sys.stdin.read().strip()
        if raw == "":
            raise ValueError("No input provided on stdin.")
        return float(raw)
    except ValueError as exc:
        raise ValueError(f"Invalid input from stdin: {exc}")


def main() -> None:
    args = parse_args()

    try:
        number = args.number if args.number is not None else read_number_from_stdin()
    except ValueError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        sys.exit(1)

    try:
        result = compute_real_square_root(number)
    except ValueError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        sys.exit(1)

    # Print only the numeric result for easy piping/consumption
    # Using repr preserves precision without unnecessary formatting surprises
    print(repr(result))


if __name__ == "__main__":
    main()

