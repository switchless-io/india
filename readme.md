# Indian context

## .number
Everything related to number formating and number extraction from text in an Indian context.

### .number.toString()

takes in 2 arguments 
- number - any number
- format
	- rupee
	- paisa
	- short
	- long

```
just comma seperated for readability (rupee format - 0 decimal precision)
1000 - 1000
10000 - 10,000
100000 - 1,00,000
1000000 - 10,00,000
10000000 - 1,00,00,000

just comma seperated for readability (paisa format - 2 decimal precision)
1000.5 - 1000.50
10000.5 - 10,000.50
100000.5 - 1,00,000.50
1000000.5 - 10,00,000.50
10000000.5 - 1,00,00,000.50

short (single precision)
1510 - 1.5k
15100 - 15.1k
151000 - 1.5l
1510000 - 15.1l
15100000 - 1.5cr

expanded (single precision)
1000 - 1 thousand
10000 - 10 thousand
100000 - 1 Lakh
1000000 - 10 Lakhs
10000000 - 1 Crore
10000000 - 10 Crores
10000000 - 100 Crores
10000000 - 1000 Crores

```