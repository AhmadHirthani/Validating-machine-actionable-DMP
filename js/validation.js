var maDMPJSON = null;
function validate() {
    document.getElementById('vaildresultID').innerHTML = "";
    document.getElementById('invaildresultID').innerHTML = "";
    document.getElementById('datapathlabelID').innerHTML = "";
    document.getElementById('errdataPathID').innerHTML = "";
    document.getElementById('messagelabelID').innerHTML = "";
    document.getElementById('errmessageID').innerHTML = "";
    document.getElementById('allowedValueslabelID').innerHTML = "";
    document.getElementById('allowedValuesID').innerHTML = "";
    var maDMP = document.getElementById("dataID").value;
    maDMPJSON = JSON.parse(maDMP);
    //var maDMPJSON = JSON.parse(maDMP.substring(1, maDMP.length));
    console.log("maDMPJSON");
    console.log(maDMPJSON);
    var schemaJSON = data;
    console.log("schemaJSON");
    console.log(schemaJSON);
    var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
    var validate = ajv.compile(schemaJSON);
    var valid = validate(maDMPJSON);
    if (!valid) {
        console.log("validate.errors");
        console.log(validate.errors);
        var errors = validate.errors;
        document.getElementById('invaildresultID').innerHTML = "Not validated maDMP";
        document.getElementById('errdataPathID').innerHTML = "Data Path: " + errors[0]['dataPath'];
        document.getElementById('errmessageID').innerHTML = "Message: " + errors[0]['message'];
        if (errors[0]['params']['allowedValues']) {
            document.getElementById('allowedValuesID').innerHTML = "Allowed Values: " + errors[0]['params']['allowedValues'];
        }
        else {
            document.getElementById('allowedValueslabelID').innerHTML = "";
            document.getElementById('allowedValuesID').innerHTML = "";
        }
        document.getElementById('invaildresultID').classList.add('text-danger');
        document.getElementById('errdataPathID').classList.add('text-danger');
        document.getElementById('errmessageID').classList.add('text-danger');

        console.log("invalid");
    }

    //maDMPJSON.dmp.dataset[0].distribution[0].license[0].license_ref
    else {
        if (maDMPJSON != null && maDMPJSON.dmp != null) {
            var isValidLink = true;
            var isWorkingLink = true;
            maDMPJSON.dmp.dataset.forEach(function (ds_element) {
                ds_element.distribution.forEach(function (dist_element) {
                    dist_element.license.forEach(function (li_element) {

                        if (!validURL(li_element.license_ref)) {
                            isValidLink = false;
                            document.getElementById('invaildresultID').innerHTML = li_element.license_ref + " is not a valid URL!";
                            document.getElementById('invaildresultID').classList.add('text-danger');
                            return;
                        }
                        try {
                            $.ajax({
                                type: "GET",
                                url: li_element.license_ref
                            }).done(function (result) {
                                console.log(li_element.license_ref + " is a working link")
                            }).fail(function () {
                                console.log(li_element.license_ref + "Sorry URL is not accessable");
                                document.getElementById('invaildresultID').innerHTML = li_element.license_ref + " is not a working URL!";
                                document.getElementById('invaildresultID').classList.add('text-danger');
                                return;
                            });
                        } catch (e) {

                        }


                    })
                });
            });
        }
        document.getElementById('vaildresultID').innerHTML = "Validated - the maDMP instance is conform the the schema";
        document.getElementById('vaildresultID').classList.add('text-success');
        console.log("valid");
    }
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
