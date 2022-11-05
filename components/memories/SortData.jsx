const sortDataByDate = (data, way = 'back') => {
        if (way === "order") {
            return data.sort(function (a, b) {
                //这里的time要根据本身的数据来，后面的正则匹配也要根据自己数据来
                return Date.parse(a.date.replace(/-/g, "/")) - Date.parse(b.date.replace(/-/g, "/"));
            });
        } else if (way === "back") {
            return data.sort(function (a, b) {
                return Date.parse(b.date.replace(/-/g, "/")) - Date.parse(a.date.replace(/-/g, "/"));
            });
        }
    }
    export {
           sortDataByDate
    }