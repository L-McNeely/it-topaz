async function getlevels (){
    "use strict";

    var myURL1 =
    "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055780,07055680&period=P7D&parameterCd=00065&siteStatus=active"

    var msgobject = await fetch(myURL1);

    if (msgobject.status >= 200 && msgobject.status <= 299) {

        var msgJSONText = await msgobject.text ();

        var msg1 = JSON.parse(msgJSONText);

    }


}
    
