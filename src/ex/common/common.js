export default{
    fnPrintDate: function(_date){
	
        let _month=_date.getMonth();
        _month="0"+(_month+1);
        let _day="0"+_date.getDate();
        
        return _date.getFullYear()+"-"+_month.substring(_month.length-2,_month.length)+"-"+_day.substring(_day.length-2,_day.length);
        
    }

    ,fnPrintDateByNum: function(_date){
        if(_date!=null && _date!=""){
            let year=_date.substring(0,4);
            let month=_date.substring(4,6);
            let day=_date.substring(6,8);
            return year+"-"+month+"-"+day;
        }
        return "";
    }

    ,fnConvertStrDate: function(str,exp){
        let year;
        let month;
        let day;
        if(exp == null){
            year = str.substring(0,4);
            month = str.substring(4,6);
            day = str.substring(6,8);  
        }else{
            str=str.split(exp);
            year = str[0];
            month = str[1];
            day = str[2];  
        }
        return new Date(year,month,day);
    }
    
    ,fnConvertDateStr: function(paramDate,exp){
        let _date = new Date(paramDate);
        let month = _date.getMonth() + 1;
        let day = _date.getDate();
        let year = _date.getFullYear();
        let _month = month < 10 ? "0"+ month: month;
        let _day = day < 10 ? "0"+ day: day;
        if(exp == null){
            return year+ "/"+ _month+ "/" + _day;
        }else{
            return year+ exp+ _month+ exp + _day;
        }
    }

    ,fnOnFileDownload:function(seq){
		window.location='/file/download/'+seq;
    }
    
    ,fnConvertDateTimeStr : function(_date,exp){	
        if(_date==null){
            return '';
        }
        
        let dt = new Date(_date);
        
        let month = dt.getMonth() + 1;
        let day = dt.getDate();
        let year = dt.getFullYear();
        let hh=dt.getHours();
        let min=dt.getMinutes();
        let ss=dt.getSeconds();
        day=day<10?"0"+day:day;
        hh=hh<10?"0"+hh:hh;
        min=min<10?"0"+min:min;
        ss=ss<10?"0"+ss:ss;
        let _month = month < 10 ? "0"+ month: month;
        if(exp == null){
            return year+ "/"+ _month+ "/" + day+" "+hh+":"+min+":"+ss;
        }else{
            return year+ exp+ _month+ exp + day+" "+hh+":"+min+":"+ss;
        }
    }
    ,fnCheckAxiosResult : function(resp){
        if(resp.data.substring(0,2) == "\r\n"){
            window.location.href="/login";
        }
    }
}