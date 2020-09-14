let initValue = 0

export  function reducer(state = initValue,action){
    let {type,data} = action
    let  value = 0
    switch (type) {
        case "add":
              value = state + data*1
              break
        case "sub":
             value = state - data*1
        break
      case "even":
         if (data % 2 !== 1){
           value = state + data*1
         }else{
             value = state
         }
        break
      case "asyncAdd":
            value = state + data*1
        break
      case "asyncAddAction":
           value = state + data*1
        break
        default:
             return value
    }
    return value
}
