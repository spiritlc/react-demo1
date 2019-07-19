import React from 'react'

const lists = ['苹果', '香蕉', '栗子']

let a = lists.forEach(item => {
    return <h1>{ item }</h1>
})
console.log(a)
let b = lists.map(item => {
    return <h1>{ item }</h1>
})
console.log(b)

//循环
const arr = []
lists.forEach(item => {
    arr.push(<h1>{ item }</h1>) 
})
export default function Test() {
    return (
        <div>
            { arr }

            {/* { 
                lists.map((item, i) => {
                    return <h1 key={ i }>{ item }</h1>
                })
            } */}
        </div>
    )
}

// export default function Test() {
//     return { }
// }