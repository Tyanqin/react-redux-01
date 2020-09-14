export const add = (value) =>({type:"add", data: value })
export const sub = (value) =>({type:"sub", data: value })
export const even = (value) =>({type:"even", data: value })
export const asyncAdd = (value) =>({type:"asyncAdd", data: value })
export const asyncAddAction=(value,delay)=>{
     // setTimeout(()=>{
     //     return {
     //       type:"asyncAddAction",
     //       data:value
     //     }
     // },delay)
     //引入thunk进行异步编程
     return (dispacth)=>{
      setTimeout(()=>{
        dispacth(add(value))
      },delay)
     }

}

