import axios from "axios";



export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID WMlxY33dCt9YpO4npMoOVSNXclAgdFo9u_VzwBTBlTw'
    }
}
)