import { URL } from "../constants.js";
import ApiFacade from "./loginFacade";


const Facade = () => {

    const dataThreads = async () => {
            const options = ApiFacade.makeOptions("GET", true);
            try {
              // this parse may fail
              const response = await fetch(`${URL}/api/info/threads`,options);
              const data = await response.json();
              return data;
            } catch (err) {
              console.log("ERROR",err)
            }
    }


    const function2 =  () => {

    }

    return {
        dataThreads,
        function2
    };
}



export default Facade();