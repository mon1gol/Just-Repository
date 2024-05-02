import { encoded, translations } from './data.js'

// console.log("Let's rock")
// console.log(encoded, translations)



// console.log(decoded)


function decoded() {
    var new_data = [];

    encoded.forEach(element => {
        new_data.push({
            groupId: element.groupId,
            areaId: translations[element.areaId],
            departmentId: translations[element.departmentId],
            directionId: translations[element.directionId],
            mediaTypeId: translations[element.mediaTypeId],
            mediaId: translations[element.mediaId],
            resellingId: translations[element.resellingId],
            serviceTypeId: translations[element.serviceTypeId],
            formatTypeId: translations[element.formatTypeId],
            formatId: translations[element.formatId],
            unitId: translations[element.unitId],
            platformId: translations[element.platformId],
            budgetId: element.budgetId,
            adPlatformId: translations[element.adPlatformId],
            service: element.service,
            formatSize: element.formatSize,
            ca: element.ca,
            mpmId: element.mpmId,
        });
    });

    console.log(new_data);
}


function uniqueId() {
    var unique_data = [];

    unique_data.push(encoded[0].areaId);

    encoded.forEach(element => {
        for (var i = 0; i < Object.keys(element).length; i++) {
            if(unique_data.indexOf(Object.values(element)[i]) == -1 && 
                Object.keys(element)[i] != 'groupId' && 
                Object.keys(element)[i] != 'budgetId' &&
                Object.keys(element)[i] != 'service' &&
                Object.keys(element)[i] != 'formatSize' &&
                Object.keys(element)[i] != 'ca' &&
                Object.keys(element)[i] != 'mpmId'){
                unique_data.push(Object.values(element)[i]);
            }
        }
    });

    console.log(unique_data);
}


decoded();
uniqueId();