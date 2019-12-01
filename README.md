# InsuranceAPI

an api which uses to compare the cost of insurance and find insurance that cover each symtoms of user.

``` 
https://insuranceapii.herokuapp.com 
```


 for getting all health insurance.
```
 /health   
 ```

for getting all disease.
```
/disease 
```

for getting all company.
```
/company 
```

for getting health insurance with expected insurance company.
```
/company/search

with Json request { 'company' : 'xx' }
```



for getting health insurance with expected age coverage and premium rate.
```
/health/cost

with Json request { 'age' : xx, 'rate' : yy }
```

for getting health insurance with expected age coverage and premium rate order from minimum coverage.
```
/health/cost/min

with Json request { 'age' : xx, 'rate' : yy }
```

for getting health insurance with expected age coverage, premium rate and coverage symtoms.
```
/health/disease

with Json request { 'age' : xx, 'rate' : yy, 'disease' : 'zzz' }
```

