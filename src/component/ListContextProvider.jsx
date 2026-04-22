import { createContext, useState } from "react"
var listContext = createContext()
function ListContextProvider(data){
    var [list,setlist] = useState([{name:"Sam",status:false}])
    return(
        <listContext.Provider value={{list,setlist}}>
            {data.children}
        </listContext.Provider>
    )

}
export default ListContextProvider
export {listContext}