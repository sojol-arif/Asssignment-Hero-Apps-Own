const getStoreReadBook = () =>{
    const storedBookSTR = localStorage.getItem('readList');

    if(storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else{
        return [];
    }
}

const addToStoreDb = (id) => {

    const storedBookData = getStoreReadBook();
    
    if(storedBookData.includes(id)){
        alert('App Already Installed');
    } else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        
        localStorage.setItem("readList", data);
    }
}

export { addToStoreDb, getStoreReadBook };