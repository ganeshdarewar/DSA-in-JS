## Big O Notation

# 1 Linear Time => O(n)

```javascript
for (let i = 0; i < n; i++) {
  console.log(arr[i]); // number of operations depends on number of input i.e. array size
}
```

# 2 constant time => O(1)

```javascript
console.log(arr[1]); // 1 operation
```

# 3 Quadratic Time => O(n^2)

    ```javascript
    for(let i=0; i<n;i++){
        for(let j=0; j<n;j++){
            console.log(arr[i], arr[j])
        }
    }
    ```

# 4 Factorial Time => O(n!) (most expensive)

## calculation of Big O

    1 worst case
    2 remove constant
    3 different terms of input
    4 drop non dominants
    for example O(n+n^2)
        first loop takes O(n)
        2nd loop takes O(n^2) time which is bigger than 1st loop so we drop 1st loop time and the big O is O(n^2) (think about most time taker)

https://www.bigocheatsheet.com/
