import UserInfo from "./userinfo-idb";

const MenuList = async ()=>{
        const list = await UserInfo.getUserInfo('0');

        const listArr = list.data.role_code;
        const listArrName = [];
        for(let i=0; i < listArr.length; i++){
            let getName = listArr[i].split('.');
            listArrName.push(getName[0]);
        }

        const arrMenuList = [...new Set(listArrName)];
        return arrMenuList;
}

export default MenuList;