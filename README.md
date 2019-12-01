# InsuranceAPI

an api which uses to compare the cost of insurance and find insurance that cover each symptoms of user.

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

for getting health insurance with expected age coverage and premium rate order from minimum premium rate.
```
/health/cost/min

with Json request { 'age' : xx, 'rate' : yy }
```

for getting health insurance with expected age coverage and premium rate order from minimum cover expense.
```
/health/cost/min/coverexpense

with Json request { 'age' : xx, 'rate' : yy }
```

for getting health insurance with expected age coverage, premium rate and coverage symptoms.
```
/health/disease

with Json request { 'age' : xx, 'rate' : yy, 'disease' : 'zzz' }
```

for getting health insurance with expected age coverage, premium rate and coverage symptoms order from minimum premium rate.
```
/health/disease/min

with Json request { 'age' : xx, 'rate' : yy, 'disease' : 'zzz' }
```

for getting health insurance with expected age coverage, premium rate and coverage symptoms order from minimum cover expense.
```
/health/disease/min/coverexpense

with Json request { 'age' : xx, 'rate' : yy, 'disease' : 'zzz' }
```
